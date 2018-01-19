<<<<<<< Q
<<<<<<< Q
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react';
import userApi from '../../Data/user-api';
import { withRouter } from 'react-router-dom';

<<<<<<< HEAD
=======
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react';
import userApi from '../../Data/user-api';
import { withRouter } from 'react-router-dom';
>>>>>>> Fixed conflicts

=======
>>>>>>> master
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
      <Container text style={{ marginTop: '7em' }}>
    {/*
=======
import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react';

const Login = () => (
  <div className='login-form'>
    <Container text style={{ marginTop: '7em' }}>
      {/*
>>>>>>> Major front end overhaul
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
        }
      `}</style>
      <Grid
        textAlign='center'
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
<<<<<<< HEAD
<<<<<<< Q
          <Header as='h2' color='blue' textAlign='center'>
            {' '}Login to Your Account
          </Header>
<<<<<<< Q
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
=======
=======
>>>>>>> master
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
<<<<<<< HEAD
>>>>>>> Fixed conflicts
=======
>>>>>>> master

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
<<<<<<< HEAD
<<<<<<< Q
=======
          <Form size='large'>
            <Segment stacked color='blue'>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button primary fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/signup'>Signup</a>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
>>>>>>> Major front end overhaul
=======
    </Container>
>>>>>>> Fixed conflicts
=======
    </Container>
>>>>>>> master
  </div>
    )
  }
}

export default withRouter(Login);