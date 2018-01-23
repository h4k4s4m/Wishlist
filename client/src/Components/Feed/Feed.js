import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, Container, Comment, Header, Card } from 'semantic-ui-react';
import Comments from "../Comments";
import SearchBar from "../SearchBar";
import ProductCard from "../ProductCard";
import commentApi from "../../Data/comment-api";
import postApi from "../../Data/post-api"

export default class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: [],
            posts: []
        }
    }

componentDidMount = ()=>{

    setInterval(()=>{

    commentApi.getAll().then((result)=>{
        this.setState({comments: result})
    })
    postApi.getPosts().then((result) => {
        this.setState({posts: result})
    })

    }, 1000)
}


printComments = (array) => array.map((item) => <Comments accountID={item.accountID} text={item.text}/> );

printPosts = (array) => array.map((item) => <ProductCard {...item}/> );

render(){
    return(
        <Container>
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                    <Segment color='blue'>
                        <SearchBar />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                    <Segment color='blue'>
                    <Grid.Row >
                    <Card.Group >{this.printPosts(this.state.posts)}</Card.Group>
                    </Grid.Row>
                    <Comment.Group>
                    <Header as='h3' dividing>Comments</Header>
                    {this.printComments(this.state.comments)}
                    </Comment.Group>
                    </Segment>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Container>
    )
}
}


