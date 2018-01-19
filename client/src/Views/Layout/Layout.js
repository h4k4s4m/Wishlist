import React, { Component } from 'react';
import { Container, Button, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu fixed='top' inverted color='blue'>
                    <Container>
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
                                    <Button active={activeItem === 'login'} onClick={this.handleItemClick}>Logout
                            </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button active={activeItem === 'signup'} onClick={this.handleItemClick}>Signup
                            </Button>
                                </Link>
                                <Link to="/profile">
                                    <Button active={activeItem === 'profile'} onClick={this.handleItemClick}>Profile
                            </Button>
                                </Link>
                            </Menu.Item>
                        </Menu.Menu>

                    </Container>
                </Menu>

                <Segment
                    inverted
                    vertical
                    style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
                    color='blue'
                >
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header inverted as='h4' content='Contact Us' />
                                    <List link inverted>
                                        <List.Item as='a'>
                                            <Link to='/'>&copy; WishList</Link></List.Item>
                                        <List.Item as='a'><a href='https://github.com/Wishlist-Project/Wishlist' target='_blank' rel="noopener noreferrer">
                                            <Icon name='github square'>
                                            </Icon>GitHub</a></List.Item>
                                        <Image
                                            size='mini'
                                            src='/assets/images/wlLogo.png'
                                            style={{ marginRight: '1.5em' }} />
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Header inverted as='h4' content='Contributors' />
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
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}