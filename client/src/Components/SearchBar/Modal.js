import React from 'react'
import axios from "axios"
import { Button, Header, Icon, Modal, Form, Image, Input } from 'semantic-ui-react'
// import Form from 'semantic-ui-react/dist/commonjs/collections/Form/Form';

export default class modal extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            ...props
        }
    };


    handleSubmit = (data) => {
        axios.post('/api/post', ...this.props).then(results => results.data)
    }

    render(){
        return (
            <Modal closeIcon trigger={<Button>Add Gift!</Button>} size='small'>
            <Header icon='gift' content='Add Gift to Wishlist' />
            <Modal.Content>
            <Form>
            <Image src={this.props.image} size="medium"/>
            <Form.Field>
              <label>Item</label>
              <p>{this.props.item}</p>
            </Form.Field>
            <Form.Field>
            <label>Rename?</label>
            <input id="itemRename" placeholder="Rename Item" />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <p>{this.props.price}</p>
            </Form.Field>
          </Form>

            </Modal.Content>
            <Modal.Actions>
              <Button color='green' inverted>
                <Icon name='checkmark' /> Add!
              </Button>
            </Modal.Actions>
          </Modal>
        )
    }
}

