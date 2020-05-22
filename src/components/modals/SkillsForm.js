import React, {Component} from "react";
import {Modal} from 'semantic-ui-react'
import {Field, reduxForm, FieldArray} from "redux-form";
import {connect} from "react-redux"
import _ from "lodash";

import {skillsUpdate} from "../../actions";

class SkillsForm extends Component {
    onSubmit = (formValues) => {
        this.props.skillsUpdate(formValues.skills);
        this.props.close()
    };

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.submitFailed ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
            </div>
        )
    };

    renderTextArea = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.submitFailed ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <textarea rows="3" {...input} autoComplete="off"/>
            </div>
        )
    };

    renderSkills = (fieldArray) => {
        return (
            <div>
                {fieldArray.fields.map((member, index) => (
                    <div key={index}>
                            <Field
                                component={this.renderInput}
                                name={`${member}.group`}
                                label="Skills group name"
                                placeholder="Name of a group"
                            />
                            <Field
                                component={this.renderTextArea}
                                label="Skills"
                                name={`${member}.items`}
                                placeholder="List your skills"
                            />
                            <button
                                className="ui button negative small right floated"
                                type="button"
                                onClick={() => fieldArray.fields.remove(index)}
                                disabled={fieldArray.fields.length <= 1}
                            >
                                Remove
                            </button>
                    </div>
                ))}
                <div className="buttons">
                    <div className="ui button large primary"  onClick={() => fieldArray.fields.push()}>
                        Add skill group
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <Modal size="small" open={this.props.open} onClose={this.props.close}>
                <Modal.Header>Edit Skills</Modal.Header>
                <Modal.Content>
                    <form id="skills-form" className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <FieldArray name="skills" component={this.renderSkills} />
                    </form>
                </Modal.Content>
                <Modal.Actions>
                    <button onClick={this.props.close} className="ui button">Cancel</button>
                    <button className="ui button positive" type="submit" form="skills-form">Send</button>
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

const mapStateToProps = (state) => {
    return {
        skills: state.resume.skills
    }
};

const skillsForm = connect(mapStateToProps, {skillsUpdate})(SkillsForm);

export default reduxForm({
    form: "skillsData",
    validate
})(skillsForm)