import React, {useState} from "react";
import {connect} from "react-redux"

const Skills = ({skills}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };

    const renderSkills = () => {
        return (
            <div className="ui grid">
                {skills.map(skill => {
                    return (
                        <div key={skill.group} className="eight wide column skills__item">
                            <h5 className="skills__header">{skill.group}</h5>
                            <p className="skills__content">{skill.items}</p>
                        </div>
                    )
                })
                }
            </div>
        )
    };

    const renderSection = () => {
        return (
            <section onClick={openModal} className="section skills">
                <h4 className="section__header">Skills</h4>
                <div className="section__hr"/>
                {renderSkills()}
            </section>
        )
    };

    return (
        <>
            {renderSection()}
            {/*<SummaryForm*/}
            {/*    open={modalIsOpen}*/}
            {/*    close={closeModal}*/}
            {/*    initialValues={skills}*/}
            {/*/>*/}
        </>

    )
};

const mapStateToProps = (state) => {
    return {
        skills: state.resume.skills
    }
};

export default connect(mapStateToProps)(Skills)