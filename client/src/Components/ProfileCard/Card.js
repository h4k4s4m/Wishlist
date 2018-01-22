import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const MyCard = props => (
  <div>
    <Card>
      <Image src='/assets/images/tom.jpg' />
      <Card.Content>
        <Card.Header>{props.account.fullName}</Card.Header>
      </Card.Content>
    </Card>
  </div>
)

export default MyCard;