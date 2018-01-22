import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, Container } from 'semantic-ui-react';
import FeedEvent from "../FeedEvent";
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


printArray = (array) => array.map((item) => <FeedEvent accountID={item.accountId} text={item.text}/> );

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
                    {this.printArray(this.state.result)}
                    </Segment>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Container>
    )
}
}


