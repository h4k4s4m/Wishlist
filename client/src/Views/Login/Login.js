import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react';

const Login = () => (
  <div className='login-form'>
    <Container text style={{ marginTop: '7em' }}>
      {/*
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
          <Header as='h2' color='blue' textAlign='center'>
            {' '}Login to Your Account
          </Header>
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
  </div>
)


export default Login;