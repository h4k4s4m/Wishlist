import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, Container, Comment, Header } from 'semantic-ui-react';
import Comments from "../Comments";
import SearchBar from "../SearchBar";
import commentApi from "../../Data/comment-api";

export default class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            result: []
        }
    }

componentDidMount = ()=>{
    commentApi.getAll().then((result)=>{
        this.setState({result})
    })
}


printArray = (array) => array.map((item) => <Comments accountID={item.accountID} text={item.text}/> );

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
                    <Comment.Group>
                    <Header as='h3' dividing>Comments</Header>
                    {this.printArray(this.state.result)}
                    </Comment.Group>
                    </Segment>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Container>
    )
}
}


