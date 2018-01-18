import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import userApi from '../../Data/user-api';
import { withRouter } from 'react-router-dom';


class Login extends Component {
  state = {
    loading: true,
    credential: {}
  };
  history=this.props.history;
  loginUser = () => {
    userApi.login(this.state.credential)
      .then(loggedin => {
        this.history.push('/profile');
      });
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    const credential = { ...this.state.credential };
    credential[name] = value;
    this.setState({
      credential
    });
  };

  componentDidMount = () => {
    let id = null;
    if (this.props && this.props.match && this.props.match.params) {
      id = this.props.match.params.id;
    }
    if (id) {
      userApi.getById(id).then(credential => {
        this.setState({
          credential,
          loading: false
        })
      });
    } else {
      this.setState({
        loading: false
      })
    }
  };

  render() {
    return (
      <div className='login-form'>
    {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
    <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
          {' '}Login to Your Account
          </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              onChange={this.handleInputChange}
              value={this.state.credential.username}
              name='username'
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
            />
            <Form.Input
              onChange={this.handleInputChange}
              value={this.state.credential.password}
              name='password'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button onClick={this.loginUser} primary fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/signup'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

export default withRouter(Login);