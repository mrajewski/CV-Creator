import React, {useState} from "react";
import {connect} from "react-redux"
import EducationForm from "../modals/EducationForm";

const Education = ({education}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };

    const renderExperience = () => {
        return (
            <section onClick={openModal} className="section education">
                <h4 className="section__header">Education</h4>
                <div className="section__hr"/>
                <div className="education__list">
                    {education.map(education => {
                        return (
                            <div key={education.specialization} className="education__item">
                                <h5 className="education__specialization">{education.specialization}</h5>
                                <p className="education__school">{education.school}</p>
                                <p className="education__date">{education.startDate} - {education.endDate}</p>
                                <div className="education__hr"/>
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
            <EducationForm
                open={modalIsOpen}
                close={closeModal}
                initialValues={{education: education}}
            />
        </>

    )
};

const mapStateToProps = (state) => {
    return {
        education: state.resume.education
    }
};

export default connect(mapStateToProps)(Education)