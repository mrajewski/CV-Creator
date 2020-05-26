import React, {Component} from "react";
import {Modal} from 'semantic-ui-react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux"

import {privateLifeUpdate} from "../../actions";

class PrivateLifeForm extends Component {
    onSubmit = (formValues) => {
        this.props.privateLifeUpdate(formValues.privateLife);
        this.props.close()
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.submitFailed ? 'error': ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <textarea rows="5" {...input} autoComplete="off"/>
            </div>
        )
    };

    render() {
        return (
            <Modal size="small" open={this.props.open} onClose={this.props.close}>
                <Modal.Header>Edit Private Life</Modal.Header>
                <Modal.Content>
                    <form id="summary-form" className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field
                            name="privateLife"
                            label="Private Life"
                            component={this.renderInput}
                        />
                    </form>
                </Modal.Content>
                <Modal.Actions>
                    <button onClick={this.props.close} className="ui button">Cancel</button>
                    <button className="ui button positive" type="submit" form="summary-form">Send</button>
                </Modal.Actions>
            </Modal>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.privateLife) {
        errors.privateLife = "Too short"
    }

    return errors
};

const privateLifeForm = connect(null, {privateLifeUpdate})(PrivateLifeForm);

export default reduxForm({
    form: "privateLifeData",
    validate
})(privateLifeForm)