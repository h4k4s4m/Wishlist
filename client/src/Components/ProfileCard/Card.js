import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const MyCard = () => (
  <Card>
    <Image src='/assets/images/tom.jpg' />
    <Card.Content>
      <Card.Header>Tom</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>Tom is a comedian living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default MyCard;