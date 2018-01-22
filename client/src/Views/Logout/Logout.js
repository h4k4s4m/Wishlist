import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import axios from "axios";

export default class Logout extends Component {
    history = this.props.history;
    logout = () => {
        sessionStorage.clear();
        window.location.replace('/login');
    }    


    render() {
        return (
            <Button onClick={this.logout} color='red'>Logout</Button>
        )
    }
}

