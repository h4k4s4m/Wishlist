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
                    <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
                        <Button><Link to="/signup">Signup</Link></Button>
                    </Menu.Item>
                    <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
                        <Button><Link to="/login">Login</Link></Button>
                    </Menu.Item>
                    <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
                        <Button><Link to="/profile">Profile</Link></Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}