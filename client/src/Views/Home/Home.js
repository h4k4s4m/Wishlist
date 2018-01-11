import React from 'react';
import Feed from '../../Components/Feed';
import Comments from '../../Components/Comments';
import { Container } from 'semantic-ui-react'


const Home = () => (
   <Container>
        <Feed />
        <Comments />
   </Container>
)

export default Home;
