import React, {Component} from "react";
import {Button, Header, Modal} from 'semantic-ui-react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux"
import {profileUpdate} from "../../actions";

class ProfileForm extends Component {
    onSubmit = (formValues) => {
        this.props.profileUpdate(formValues);
        this.props.close()
    };

    renderInput({ input, label, meta, value }) {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {/*{this.renderError(meta)}*/}
            </div>
        )
    }

    render() {
        const {name, job, phone, mail, address} = this.props.profile;

        return (
            <Modal open={this.props.open} onClose={this.props.close}>
                <Modal.Header>Edit profile</Modal.Header>
                <Modal.Content>
                    <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
                        {/*<Button attached="right" onClick={this.props.close} negative>Cancel</Button>*/}
                        {/*<Button attached="right" positive>Send</Button>*/}
                    </form>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.props.close} negative>Cancel</Button>
                    <Button positive primary>Send</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.resume.profile
    }
};

const modalForm = connect(mapStateToProps, {profileUpdate})(ProfileForm);

export default reduxForm({
    form: "profileData"
})(modalForm)