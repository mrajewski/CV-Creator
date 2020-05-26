import React, {Component} from "react";
import {Modal} from 'semantic-ui-react'
import {Field, reduxForm, FieldArray} from "redux-form";
import {connect} from "react-redux"
import _ from "lodash";

import {experienceUpdate} from "../../actions";

class ExperienceForm extends Component {
    onSubmit = (formValues) => {
        this.props.experienceUpdate(formValues.experience);
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

    renderExperience= (fieldArray) => {
        return (
            <div>
                {fieldArray.fields.map((member, index) => (
                        <div className="experience__form-item" key={index}>
                            <div className="two fields">
                                <Field
                                    component={this.renderInput}
                                    name={`${member}.position`}
                                    label="Position"
                                    placeholder="Position"
                                />
                                <Field
                                    component={this.renderInput}
                                    label="Company"
                                    name={`${member}.company`}
                                    placeholder="Company"
                                />
                            </div>
                            <div className="two fields">
                                <Field
                                    component={this.renderInput}
                                    name={`${member}.startDate`}
                                    label="Date of Start"
                                    placeholder="Date of Start"
                                />
                                <Field
                                    component={this.renderInput}
                                    label="Date of end"
                                    name={`${member}.endDate`}
                                    placeholder="Date of end"
                                />
                            </div>
                            <Field
                                component={this.renderTextArea}
                                label="Description"
                                name={`${member}.description`}
                                placeholder="Description"
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
                <div className="skills__buttons">
                    <div className="ui button large primary right floated" onClick={() => fieldArray.fields.push()}>
                        Add experience
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <Modal size="small" open={this.props.open} onClose={this.props.close}>
                <Modal.Header>Edit Experience</Modal.Header>
                <Modal.Content>
                    <form id="experience-form" className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <FieldArray name="experience" component={this.renderExperience}/>
                    </form>
                </Modal.Content>
                <Modal.Actions>
                    <button onClick={this.props.close} className="ui button">Cancel</button>
                    <button className="ui button positive" type="submit" form="experience-form">Send</button>
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
        experience: state.resume.experience
    }
};

const experienceForm = connect(mapStateToProps, {experienceUpdate})(ExperienceForm);

export default reduxForm({
    form: "experienceData",
    validate
})(experienceForm)