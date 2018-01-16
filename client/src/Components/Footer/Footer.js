import React, { Component } from 'react';
import { Menu, Input, Header, Link } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item>
                    <Header as='h1' color='blue'>
                        <Link to="/">&copy; WishList</Link>
                    </Header>
                </Menu.Item>
                <Menu.Item position="right">
                    <Input label="Contirbutors:" />
                </Menu.Item>
                <Menu.Item >
                </Menu.Item>
            </Menu>
        );
    }
}

export default Footer;