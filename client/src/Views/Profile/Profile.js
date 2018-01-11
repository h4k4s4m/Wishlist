import React from 'react';
import MyCard from '../../Components/ProfileCard';

import { Container, Grid, Segment } from 'semantic-ui-react'

const Profile = () => (
    <Container>
        <Grid stackable celled columns={1}>
            <Grid.Column width={6}>
                
                    <MyCard />
                
            </Grid.Column>
            <Grid.Column width={10}>
                <Segment>
                    <h1>Profile</h1>
                    <hr />
                    <h5>Name: Tom Fish</h5>
                    <h5>Email: tom@gmail.com</h5>
                    <h5>Password: **********</h5>
                    <h5>DOB: 1990-03-31</h5>
                    <h5>Wish: New Hat</h5>
                </Segment>
            </Grid.Column>
        </Grid>
    </Container>
)

export default Profile;