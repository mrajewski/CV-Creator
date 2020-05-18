import React, {Component} from "react";
import { Button, Header, Modal } from 'semantic-ui-react'

class ModalForm extends Component {
    render() {
        const {header, content} = this.props;
        return (
            <Modal open={this.props.open} onClose={this.props.close}>
                <Modal.Header>{header}</Modal.Header>
                <Modal.Content>
                    {content}
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.props.close} negative>Cancel</Button>
                    <Button positive>Send</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ModalForm