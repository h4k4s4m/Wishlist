import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
  
    logout = event => {
        sessionStorage.clear();
        this.props.history.push('/login');
    }

    render() {
        return (
            <Button onClick={this.logout}>Logout</Button>
        )
    }
}

export default withRouter(Logout);