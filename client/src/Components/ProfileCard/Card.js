import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const MyCard = props => (
  <div>
    <Image src='/assets/images/tom.jpg' size='large' circular />
    <Card fluid>
      <Card.Content>
        <Card.Header>Name: {props.fullName}</Card.Header>
      </Card.Content>
    </Card>
  </div>
)

export default MyCard;