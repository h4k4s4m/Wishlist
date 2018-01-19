import React from 'react';
import MyCard from '../../Components/ProfileCard';
import { Grid, Segment, Container } from 'semantic-ui-react'

const Profile = () => (
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
                        <h5>Name: Tom Fish</h5>
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

export default Profile;