import React, { Component } from 'react';
import MyCard from '../../Components/ProfileCard';
import Item from '../../Components/Items';
import { Container, Grid, Segment } from 'semantic-ui-react';

class Profile extends Component {
    state = {
        loading: true,
        account: {}
    };

    componentWillMount = () => {
        let login = sessionStorage.getItem('isLoggedin');
        if (!login) {
            this.props.history.push('/login');
        }
    }

    componentDidMount = () => {
        this.setState({
            account: {
                username: sessionStorage.getItem('userName'),
                fullName: sessionStorage.getItem('fullName'),
                dob: sessionStorage.getItem('dob'),
                email: sessionStorage.getItem('email'),
                joinDate: sessionStorage.getItem('joinDate')
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
                                <MyCard account={this.state.account} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Segment textAlign='center' color='blue'>
                                <h1>Profile Details</h1>
                                <hr />
                                <h5>Username: {this.state.account.username}</h5>
                                <h5>Email: {this.state.account.email}</h5>
                                <h5>DOB: {this.state.account.dob}</h5>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Item />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}// end of class

export default Profile;