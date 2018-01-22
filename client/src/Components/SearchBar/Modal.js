import React from 'react'
import { Button, Header, Icon, Modal, Form, Image, Input } from 'semantic-ui-react'
import postApi from '../../Data/post-api';
// import Form from 'semantic-ui-react/dist/commonjs/collections/Form/Form';

export default class modal extends React.Component{

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


handleSubmit = (data) => {
  let apiPost = {
    item: this.props.item,
    price: this.props.price,
    image: this.props.image,
    accountId: this.props.accountId,
    accountName: this.props.accountName
  }

  console.log(apiPost);
  postApi.create({
    item: this.props.item,
    price: this.props.price,
    image: this.props.image,
    accountId: this.props.accountId,
    accountName: this.props.accountName
  });

this.handleClose();

}


// handleChange = (event) => {

// }

    render(){
        return (
            <Modal closeIcon
            open={this.state.modalOpen}
            onClose={this.handleClose}
            trigger={<Button onClick={this.handleOpen}>Add Gift!</Button>} size='small'>
            <Header icon='gift' content='Add Gift to Wishlist' />
            <Modal.Content>
            <Form>
            <Image src={this.props.image} size="medium"/>
            <Form.Field>
              <label>Item</label>
              <p>{this.props.item}</p>
            </Form.Field>
            {/* <Form.Field>
            <label>Rename?</label>
            <input id="itemRename" onChange = {this.handleChange} placeholder="Rename Item" />
            <Button onClick={this.changeName} >Change</Button>
            </Form.Field> */}
            <Form.Field>
              <label>Price</label>
              <p>{this.props.price}</p>
            </Form.Field>
          </Form>

            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.handleSubmit} color='green' inverted>
                <Icon name='checkmark' /> Add!
              </Button>
            </Modal.Actions>
          </Modal>
        )
    }
}

