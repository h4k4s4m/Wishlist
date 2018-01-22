import React, { Component } from 'react';
import MyCard from '../../Components/ProfileCard';
import { Container, Grid, Segment } from 'semantic-ui-react'

class Profile extends Component {
    state = {
        loading: true,
        account: {}
    };

    componentDidMount = () => {
        this.setState({
            account: {
                username: sessionStorage.getItem('userName'),
                fullName: sessionStorage.getItem('fullName')
            }
        })
    }
    render() {
        return (
            <Container>
                <Grid text style={{ marginTop: '10em' }}>
                    <Grid.Row stretched>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            <Segment textAlign='center' color='blue'>
                                <MyCard fullName={this.state.account.fullName} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Segment textAlign='center' color='blue'>
                                <h1>Profile Details</h1>
                                <hr />
                                <h5>Username:</h5>
                                <h5>Email: </h5>
                                <h5>DOB: 1990-03-31</h5>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Segment textAlign='center' color='blue'>
                                <h1>Wishlist Items</h1>
                                <hr />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}// end of class

export default Profile;