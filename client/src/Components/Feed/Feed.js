import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment } from 'semantic-ui-react';
import FeedEvent from "../FeedEvent";
import SearchBar from "../SearchBar";

const MyFeed = () => (
    <Grid columns={2} divided>
        <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={16}>
                <Segment color='blue'>
                    <SearchBar />
                </Segment>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={16}>
                <Segment color='blue'>
                    <FeedEvent who={"Sahm"} what={"added a gift"} when={"Like 15 minutes ago"} />
                    <FeedEvent who={"Ren"} what={"liked a gift"} when={"Like 20 minutes ago"} />
                    <FeedEvent who={"Q"} what={"stole a gift"} when={"Like 15 minutes ago"} />
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default MyFeed;