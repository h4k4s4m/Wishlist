import React from 'react'
import Progress from "./progress"
import { Card, Icon, Image } from 'semantic-ui-react'

const giftCard = (props) => (
    <Card color={"blue"} >
        <Image src={props.item.url} />
        <Card.Content>
            <Card.Header>
                {props.item.name}
            </Card.Header>
            <Card.Meta>
                Cost: $149.99
            </Card.Meta>
            <Card.Description>
                For {props.event.for}'s {props.event.what}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='gift' size="large" />
                Progress to goal!
                <Progress />

            </a>
        </Card.Content>   <Card.Content extra>
            <a>
                <Icon name='user' />
                Suggested by {props.user.username}
            </a>
        </Card.Content>
    </Card>
)

export default giftCard