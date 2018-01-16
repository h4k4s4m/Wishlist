import React, { Component } from 'react';
import { Menu, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item>
                    <img alt="" src='/assets/images/wlLogo.png' />
                </Menu.Item>
                <Menu.Item>
                    <Header as='h1' color='blue'>
                        <Link to="/">WishList</Link>
                    </Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='signup' >
                        <Link to="/signup">
                            <Button active={activeItem === 'signup'} onClick={this.handleItemClick}>Signup
                            </Button>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name='login'>
                        <Link to="/login">
                            <Button active={activeItem === 'login'} onClick={this.handleItemClick}>Login
                            </Button>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name='profile'>
                        <Link to="/profile">
                            <Button  active={activeItem === 'profile'} onClick={this.handleItemClick}>Profile
                            </Button>
                        </Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}