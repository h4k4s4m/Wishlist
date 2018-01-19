import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const MyCard = props => (
  <Card>
    <Image src='/assets/images/tom.jpg' />
    <Card.Content>
      <Card.Header>{props.account.fullName}</Card.Header>
      <Card.Meta>Joined in {props.account.joinDate}</Card.Meta>
    </Card.Content>
  </Card>
)

export default MyCard;