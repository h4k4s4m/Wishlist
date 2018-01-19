import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Feed, Icon, Button, Form } from 'semantic-ui-react';

const FeedEvent = (props) => (
    <Feed>
        <Feed.Event>
            <Feed.Label>
                <img src='/assets/images/avatar1.jpeg' alt='' />
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User>{props.who}</Feed.User>
                    {" " + props.what}
                    <Feed.Date>{props.when}</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like' />
                        4 Likes
            </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
        <Form.TextArea />
        <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Feed>
)

export default FeedEvent;