import React, {Component} from "react";
import {Button, Header, Modal} from 'semantic-ui-react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux"
import _ from "lodash"

import {profileUpdate} from "../../actions";

class ProfileForm extends Component {
    onSubmit = (formValues) => {
        this.props.profileUpdate(formValues);
        this.props.close()
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.submitFailed ? 'error': ''}`;
        console.log(meta);

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
            </div>
        )
    };

    render() {
        return (
            <Modal open={this.props.open} onClose={this.props.close}>
                <Modal.Header>Edit profile</Modal.Header>
                <Modal.Content>
                    <form id="profile-form" className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div className="two fields">
                            <Field
                                name="name"
                                label="Full name"
                                component={this.renderInput}
                            />
                            <Field
                                name="job"
                                label="Specialization"
                                component={this.renderInput}
                            />
                        </div>
                        <div className="two fields">
                            <Field
                                name="phone"
                                label="Phone"
                                component={this.renderInput}
                            />
                            <Field
                                name="mail"
                                label="E-mail"
                                component={this.renderInput}
                            />
                        </div>
                        <Field
                            name="address"
                            label="Address"
                            component={this.renderInput}
                        />
                    </form>
                </Modal.Content>
                <Modal.Actions>
                    <button onClick={this.props.close} className="ui button">Cancel</button>
                    <button className="ui button positive" type="submit" form="profile-form">Send</button>
                </Modal.Actions>
            </Modal>
        )
    }
}

const validate = (formValues) => {
  const errors = {};

  _.forOwn(formValues, function (value, key) {
      if (!value) {
          errors[key] = "This field can't be empty"
      }
  });

  return errors
};

const modalForm = connect(null, {profileUpdate})(ProfileForm);

export default reduxForm({
    form: "profileData",
    validate
})(modalForm)