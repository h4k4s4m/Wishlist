import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import commentAPI from '../../Data/comment-api';


export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleClick = () => {

        commentAPI.create({
            text: this.state.comment,
            accountID: sessionStorage.getItem("userId"),
        }).then(function (result) {
            console.log('sould have sent');
        }).catch(function (err) {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Form onChange={this.handleChange} style={{ width: 100, height: 100 }} reply>
                    <Form.TextArea />
                    <Button onClick={this.handleClick} content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
            </div>
        )
    }

};



