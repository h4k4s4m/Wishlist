import React from 'react';
import 'semantic-ui-css/semantic.min.css';
<<<<<<< HEAD
import { Grid, Segment, Container } from 'semantic-ui-react';
import FeedEvent from "../FeedEvent";
import Axios from 'axios';

const postsArr = [];
const getEveryPostOfAllTime = () => {
    Axios.get('/')
    .then(function (response){
        arr = response;
        console.log(response);
    })
}

const friendsArr = [];
const getAllFriends = accountID => {
    Axios.get("/" + accountID)
    .then(function(response){
        friendsArr = response;
        console.log(response);
    })
}

const MyFeed = (props) => (
    <Container>
        <Grid columns={2} divided>
            <Grid.Row stretched>
                <Grid.Column mobile={16} tablet={10} computer={10}>
                    <Segment color='blue'>
                        <FeedEvent who={"Sahm"} what={"added a gift"} when={"Like 15 minutes ago"} />
                        <FeedEvent who={"Ren"} what={"liked a gift"} when={"Like 20 minutes ago"} />
                        <FeedEvent who={"Q"} what={"stole a gift"} when={"Like 15 minutes ago"} />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={6} computer={6}>
                    <Segment color='blue'></Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
=======
import { Grid, Segment } from 'semantic-ui-react';
import FeedEvent from "../FeedEvent";
import SearchBar from "../SearchBar";

const MyFeed = () => (
    <Grid columns={2} divided>
        <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={10}>
                <Segment color='blue'>
                    <FeedEvent who={"Sahm"} what={"added a gift"} when={"Like 15 minutes ago"} />
                    <FeedEvent who={"Ren"} what={"liked a gift"} when={"Like 20 minutes ago"} />
                    <FeedEvent who={"Q"} what={"stole a gift"} when={"Like 15 minutes ago"} />
                </Segment>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={6}>
                <Segment color='blue'>
                    <SearchBar />
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
>>>>>>> master
)

export default MyFeed;