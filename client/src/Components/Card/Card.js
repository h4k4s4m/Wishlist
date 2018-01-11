<<<<<<< HEAD:client/src/Components/ProductCard/Card.js
import React from 'react'
import Progress from "./Progress"
=======
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Progress from "./Progress";
>>>>>>> Hussein:client/src/Components/Card/Card.js
import { Card, Icon, Image } from 'semantic-ui-react'

const ProductCard = (props) => (
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

<<<<<<< HEAD:client/src/Components/ProductCard/Card.js
export default ProductCard;
=======
export default giftCard;
>>>>>>> Hussein:client/src/Components/Card/Card.js
