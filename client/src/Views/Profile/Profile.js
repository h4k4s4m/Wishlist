import React, { Component } from 'react';
import MyCard from '../../Components/ProfileCard';
import { Container, Grid, Segment, Button } from 'semantic-ui-react'

class Profile extends Component {
    state = {
        loading: true,
        account: {}
    };
   
  componentDidMount = () =>{
    this.setState({
        account:{
            username: sessionStorage.getItem('userName'),
            fullName: sessionStorage.getItem('fullName')
        }
    })
  }
      render() {
          return (
            <Container text style={{ marginTop: '7em' }}>
        <Grid columns={2} divided>
            <Grid.Row stretched>
                <Grid.Column mobile={16} tablet={8} computer={6}>
                    <Segment textAlign='center' color='blue'>
                        <MyCard />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={10}>
                    <Segment textAlign='center' color='blue'>
                        <h1>Profile</h1>
                        <hr />
                        <h5>Name: { this.state.account.fullName }</h5>
                        <h5>Email: tom@gmail.com</h5>
                        <h5>Password: **********</h5>
                        <h5>DOB: 1990-03-31</h5>
                        <h5>Wish: New Hat</h5>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
          )
      }
}// end of class

export default Profile;