import React, {useState} from "react";
import {connect} from "react-redux"
import SummaryForm from "../modals/SummaryForm";

const Summary = ({summary}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };

    const renderSection = () => {
        return (
            <section onClick={openModal} className="section summary">
                <h4 className="section__header">Summary</h4>
                <div className="section__hr"/>
                <p className="summary__content">{summary}</p>
            </section>
        )
    };

    return (
        <>
            {renderSection()}
            <SummaryForm
                open={modalIsOpen}
                close={closeModal}
                initialValues={{summary: summary}}
            />
        </>

    )
};

const mapStateToProps = (state) => {
    return {
        summary: state.resume.summary
    }
};

export default connect(mapStateToProps)(Summary)