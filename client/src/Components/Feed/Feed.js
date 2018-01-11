import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Feed, Icon} from 'semantic-ui-react'

const MyFeed = () => (
    <Feed>
        <Feed.Event>
            <Feed.Label>
                <img src='/assets/images/avatar1.jpeg'/>
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                    <Feed.User>Elliot Fu</Feed.User>
                    added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like'/>
                        4 Likes
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>

        <Feed.Event>
            <Feed.Label image='/assets/images/avatar3.jpeg'/>
            <Feed.Content>
                <Feed.Summary>
                    <a>Helen Troy</a>
                    added
                    <a>2 new illustrations</a>
                    <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                    <a><img src='/assets/images/nintendoswitch.jpeg'/></a>
                    <a><img src='/assets/images/ps4pro.jpeg'/></a>
                </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like'/>
                        1 Like
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>

        <Feed.Event>
            <Feed.Label image='/assets/images/avatar5.jpeg'/>
            <Feed.Content>
                <Feed.Summary
                    date='2 Days Ago'
                    user='Jenny Hess'
                    content='add you as a friend'/>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like'/>
                        8 Likes
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>

        <Feed.Event>
            <Feed.Label image='/assets/images/avatar2.jpeg'/>
            <Feed.Content>
                <Feed.Summary>
                    <a>Joe Henderson</a>
                    posted on his page
                    <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                    Ours is a life of constant reruns. We're always circling back to where we'd we
                    started, then starting all over again. Even if we don't run extra laps that day,
                    we surely will come back for more of the same another day soon.
                </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like'/>
                        5 Likes
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>

        <Feed.Event>
            <Feed.Label image='/assets/images/avatar4.jpeg'/>
            <Feed.Content>
                <Feed.Summary>
                    <a>Justen Kitsune</a>
                    added
                    <a>2 new photos</a>
                    of you
                    <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                    <a><img src='/assets/images/xboxonex.jpeg'/></a>
                    <a><img src='/assets/images/xboxonex.jpeg'/></a>
                </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like'/>
                        41 Likes
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    </Feed>
)

export default MyFeed;