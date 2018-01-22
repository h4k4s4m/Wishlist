import React, { Component } from 'react';
import { Divider, Button, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MyButton from '../Logout';

export default class Layout extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu fixed='top' inverted color='blue'>
                    <Menu.Item as='h3' header>
                        <Image
                            size='mini'
                            src='/assets/images/wlLogo.png'
                            style={{ marginRight: '1.5em' }} />
                        <Link to='/'>
                            Wishlist
                            </Link>
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item name='login'>
                            <Link to="/login">
                                <Button active={activeItem === 'login'} onClick={this.handleItemClick}>Login
                            </Button>
                                </Link>
                                <Link to="/logout">
                                    <MyButton active={activeItem === 'login'} onClick={this.handleItemClick} />
                                </Link>
                                <Link to="/signup">
                                    <Button active={activeItem === 'signup'} onClick={this.handleItemClick}>Signup
                            </Link>
                            </Button>
                            </Link>
                            <Link to="/profile">
                                <Button active={activeItem === 'profile'} onClick={this.handleItemClick}>Profile
                            </Button>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment
                    inverted
                    vertical
                    style={{ marginTop: '40em' }}
                    color='blue'
                >
                    <Grid divided inverted stackable>
                        <Grid.Row
                            style={{ marginLeft: '1.5em', marginRight: '1.5em' }}>
                            <Grid.Column width={8} textAlign='center'>
                                <Header inverted as='h4' content='Contact Us' />
                                <Divider inverted fitted />
                                <List link inverted>
                                    <List.Item as='a'><a href='https://github.com/Wishlist-Project/Wishlist' target='_blank' rel="noopener noreferrer">
                                        <Icon name='github square'>
                                        </Icon>GitHub</a></List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign='center'>
                                <Header inverted as='h4' content='Contributors' />
                                <Divider inverted />
                                <List link inverted>
                                    <List.Item as='a'><a href='https://www.linkedin.com/in/hfakhreddine86/' target='_blank' rel="noopener noreferrer">
                                        <Icon name='linkedin square'>
                                        </Icon>Hussein Fakhreddine</a></List.Item>
                                    <List.Item as='a'><a href='https://www.linkedin.com/in/quentin-halsey-93ab25143/' target='_blank' rel="noopener noreferrer">
                                        <Icon name='linkedin square'>
                                        </Icon>Quentin Halsey </a></List.Item>
                                    <List.Item as='a'><a href='https://www.linkedin.com/in/ren-jing-2372b81b/' target='_blank' rel="noopener noreferrer">
                                        <Icon name='linkedin square'>
                                        </Icon>Ren Jing</a></List.Item>
                                    <List.Item as='a'><a href='https://www.linkedin.com/in/sahm-s/' target='_blank' rel="noopener noreferrer">
                                        <Icon name='linkedin square'>
                                        </Icon>Sahm Samarghandi </a></List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='center'
                            style={{ marginLeft: '1.5em', marginRight: '1.5em' }}
                            as='h4'>
                            <Grid.Column width={16}>
                                <List inverted>
                                    <List.Item as='a' href='#'><Link to='/'>&copy; Wishlist
                            </Link></List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}