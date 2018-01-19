import React, { Component } from 'react';
import MyCard from '../../Components/ProfileCard';
import userApi from '../../Data/user-api';

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
            <Container>
            <Grid stackable celled columns={1}>
                        <Grid.Column width={6}>
                            
                                <MyCard />
                            
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Segment>
                                <h1>Profile</h1>
                                <hr />
                                <h5>Name: {this.state.account.fullName}</h5>
                                <h5>Email: tom@gmail.com</h5>
                                <h5>Password: **********</h5>
                                <h5>DOB: 1990-03-31</h5>
                                <h5>Wish: New Hat</h5>
                            </Segment>
                            <Button onClick={this.getUser}>Test</Button>
                        </Grid.Column>
                    </Grid>
                </Container>
          )
      }
}// end of class

export default Profile;