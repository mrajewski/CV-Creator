import React, {Component} from "react";
import { Button, Header, Modal } from 'semantic-ui-react'

class ModalForm extends Component {
    render() {
        return (
            <Modal open={this.props.open} onClose={this.props.close}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                            We've found the following gravatar image associated with your e-mail
                            address.
                        </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                <Button onClick={this.props.close}>Close</Button>
            </Modal>
        )
    }
}

export default ModalForm