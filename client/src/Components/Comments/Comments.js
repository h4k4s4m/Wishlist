import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import userApi from '../../Data/user-api';
import CommentBox from '../CommentBox'

export default class WishComment extends React.Component{
state = {
  name: ""
}


userLookup = (id) =>{
  return userApi.getById(id).then((name)=>{
    this.setState({name: name.firstName})
  })
}

componentDidMount(){
  this.userLookup(this.props.accountID)
}

render(){
  return(
    <div>
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>{this.state.name}</Comment.Author>
        <Comment.Metadata>
          <div></div>
        </Comment.Metadata>
        <Comment.Text>{this.props.text}!</Comment.Text>
        <Comment.Actions>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    <CommentBox />
    </div>
  )}
}