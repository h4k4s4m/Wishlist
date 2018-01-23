import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Progress from "./Progress";
import { Card, Icon, Image } from 'semantic-ui-react';

const ProductCard = (props) => (
    <Card color={"blue"} >
        <Image src={props.image} />
        <Card.Content>
            <Card.Header>
                {props.item}
            </Card.Header>
            <Card.Meta>
                {props.price}
            </Card.Meta>
            <Card.Description>
                What a wonderful gift!
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
                Suggested by {props.accountName}
            </a>
        </Card.Content>
    </Card>
)

export default ProductCard;
