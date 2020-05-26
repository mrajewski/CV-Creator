import React, {useState} from "react";
import {connect} from "react-redux"
import PrivateLifeForm from "../modals/PrivateLifeForm";

const PrivateLife = ({privateLife}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };

    const renderSection = () => {
        return (
            <section onClick={openModal} className="section private">
                <h4 className="section__header">Private Life</h4>
                <div className="section__hr"/>
                <p className="private__content">{privateLife}</p>
            </section>
        )
    };

    return (
        <>
            {renderSection()}
            <PrivateLifeForm
                open={modalIsOpen}
                close={closeModal}
                initialValues={{privateLife: privateLife}}
            />
        </>

    )
};

const mapStateToProps = (state) => {
    return {
        privateLife: state.resume.privateLife
    }
};

export default connect(mapStateToProps)(PrivateLife)