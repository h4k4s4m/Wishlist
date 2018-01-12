import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Feed, Icon } from 'semantic-ui-react';

const FeedEvent = (props) => (
    <Feed.Event>
        <Feed.Label>
            <img alt="" src='/assets/images/avatar1.jpeg' />
        </Feed.Label>
        <Feed.Content>
            <Feed.Summary>
                <Feed.User>{props.who} </Feed.User>
                {props.what}
                <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
                <Feed.Like>
                    <Icon name='like' />
                    4 Likes
    </Feed.Like>
            </Feed.Meta>
        </Feed.Content>
    </Feed.Event>
)

export default FeedEvent;