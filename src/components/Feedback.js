/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  Form, FormGroup, Label, Input } from 'reactstrap';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Feedback</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Feedback System</ModalHeader>
          <Form action="mailto:metsamittari@luke.fi" method="post" enctype="text/plain">
          <ModalBody>
            
                <FormGroup>
                <Label for="userName">Username</Label>
                <Input type="text" name="name" id="userName" placeholder="Fill in your name here" />
                </FormGroup>
                <FormGroup>
                <Label for="userTextArea">Message</Label>
                <Input type="textarea" name="textarea" id="userTextArea" placeholder="Type your message here" />
                </FormGroup>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle} type="submit">Submit</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Feedback;
