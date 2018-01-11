import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable>
                <Menu.Item>
                    <Link to="/"><i class="huge shop icon"></i></Link>
                </Menu.Item>

                <Menu.Item
                    name='features'
                    active={activeItem === 'features'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
                        <Link to="/profile">Profile</Link>
                    </Menu.Item>

                    <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
                        <Button><Link to="/signup">Signup</Link></Button>
                    </Menu.Item>

                    <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
                        <Button><Link to="/login">Login</Link></Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}