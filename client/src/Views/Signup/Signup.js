import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react';
import userApi from '../../Data/user-api';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
  state = {
    loading: true,
    user: {}
  };
  history = this.props.history;
  addUser = () => {
    userApi.create(this.state.user)
      .then(newUser => {
        this.history.push('/login');
      });
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    const user = { ...this.state.user };
    user[name] = value;
    this.setState({
      user
    });
  };
  componentDidMount = () => {
    let id = null;
    if (this.props && this.props.match && this.props.match.params) {
      id = this.props.match.params.id;
    }
    if (id) {
      userApi.getById(id).then(user => {
        this.setState({
          user,
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
      <div className='Signup-form'>
        <Container text style={{ marginTop: '7em' }}>
          {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
          <style>{`
        body > div,
        body > div > div,
        body > div > div > div.Signup-form {
        }
      `}</style>
          <Grid
            textAlign='center'
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='blue' textAlign='center'>
                {' '}Join Us!
          </Header>
              <Form size='large'>
                <Segment stacked color='blue'>
                  <Form.Input
                    onChange={this.handleInputChange}
                    value={this.state.user.username}
                    name='username'
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Username'
                  />
                  <Form.Input
                    onChange={this.handleInputChange}
                    value={this.state.user.email}
                    name='email'
                    fluid
                    icon='mail'
                    iconPosition='left'
                    placeholder='Email'
                  />
                  <Form.Input
                    onChange={this.handleInputChange}
                    value={this.state.user.firstName}
                    name='firstName'
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='First Name'
                  />
                  <Form.Input
                    onChange={this.handleInputChange}
                    value={this.state.user.lastName}
                    name='lastName'
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Last Name'
                  />
                  <Form.Input
                    onChange={this.handleInputChange}
                    value={this.state.user.dob}
                    name='dob'
                    fluid
                    icon='calendar'
                    iconPosition='left'
                    placeholder='Date of Birth 0000-00-00'
                  />
                  <Form.Input
                    onChange={this.handleInputChange}
                    value={this.state.user.password}
                    name='password'
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
                  {!this.state.user.id &&
                    <div>
                      <Button onClick={this.addUser} primary fluid size='large'>
                        Signup
                    </Button>
                    </div>
                  }
                </Segment>
              </Form>
              <Message>
                Already a Member? <a href='/login'>Login</a>
              </Message>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default withRouter(Signup);