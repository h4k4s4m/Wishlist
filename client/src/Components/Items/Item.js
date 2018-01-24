import React, { Component } from 'react';
import { List, Segment} from 'semantic-ui-react';
import postApi from '../../Data/post-api';

export default class Item extends Component {
    state = {
       post: []
    }

    componentDidMount = () => {
        let accountId = sessionStorage.getItem('userId');
        postApi.findAllByAccount(accountId)
            .then( res => {
                let results = res.data.map( element => {
                    return element;
                })
              this.setState({post: results});
            });
    }

    render() {
        return (
            <Segment textAlign='center' color='blue'>
                                <h1>Wishlist Items</h1>
                                <hr />
                                <Segment textAlign='left'>
                                <h5>{this.state.post.map((e) => {
                                    return (
                                    <List key={e.postID}>
                                        <List.Item >
                                        <List.Icon name='gift' />
                                            {e.item} -- {e.price}
                                        </List.Item>
                                    </List>)
                                })}</h5>
                                </Segment>
                        </Segment>


        )
    }
}