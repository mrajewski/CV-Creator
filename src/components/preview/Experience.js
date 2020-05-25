import React, {useState} from "react";
import {connect} from "react-redux"
import ExperienceForm from "../modals/ExperienceForm";

const Experience = ({experience}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };

    const renderExperience = () => {
        return (
            <section onClick={openModal} className="section experience">
                <h4 className="section__header">Experience</h4>
                <div className="section__hr"/>
                <div className="experience__list">
                    {experience.map(exp => {
                        return (
                            <div key={exp.company} className="experience__item">
                                <h5 className="experience__position">{exp.position}</h5>
                                <p className="experience__company">{exp.company}</p>
                                <p className="experience__date">{exp.startDate} - {exp.endDate}</p>
                                <p className="experience__description">{exp.description}</p>
                                <div className="experience__hr"/>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        )
    };

    return (
        <>
            {renderExperience()}
            <ExperienceForm
                open={modalIsOpen}
                close={closeModal}
                initialValues={{experience: experience}}
            />
        </>

    )
};

const mapStateToProps = (state) => {
    return {
        experience: state.resume.experience
    }
};

export default connect(mapStateToProps)(Experience)