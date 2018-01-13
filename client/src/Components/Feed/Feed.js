import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Feed, Icon, Grid, Segment, Button, Form } from 'semantic-ui-react';
import FeedEvent from "../FeedEvent";

const MyFeed = () => (
    <Grid columns='equal'>
        <Grid.Column>
            <Segment color='blue'> </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
            <Segment color='blue'>
                <FeedEvent who={"Sahm"} what={"added a gift"} when={"Like 15 minutes ago"} />
                <FeedEvent who={"Ren"} what={"liked a gift"} when={"Like 20 minutes ago"} />
                <FeedEvent who={"Q"} what={"stole a gift"} when={"Like 15 minutes ago"} />
            </Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment color='blue'></Segment>
        </Grid.Column>
    </Grid>
)

export default MyFeed;