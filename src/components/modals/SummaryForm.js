import React, {Component} from "react";
import {Modal} from 'semantic-ui-react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux"

import {summaryUpdate} from "../../actions";

class SummaryForm extends Component {
    onSubmit = (formValues) => {
        this.props.summaryUpdate(formValues.summary);
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
                <Modal.Header>Edit summary</Modal.Header>
                <Modal.Content>
                    <form id="summary-form" className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Field
                                    name="summary"
                                    label="Summary"
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

    if (!formValues.summary) {
        errors.summary = "Too short"
    }

    return errors
};

const summaryForm = connect(null, {summaryUpdate})(SummaryForm);

export default reduxForm({
    form: "summaryData",
    validate
})(summaryForm)