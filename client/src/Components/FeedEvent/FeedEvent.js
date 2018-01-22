 import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Feed, Button } from 'semantic-ui-react';

const FeedEvent = (props) => (
    <Feed>
        <Feed.Event>
            <Feed.Label>
                <img src='/assets/images/avatar1.jpeg' alt='' />
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User>{props.accountID}</Feed.User>
                </Feed.Summary>
                <Feed.Meta>
                {props.text}
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
        <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Feed>
)

export default FeedEvent;