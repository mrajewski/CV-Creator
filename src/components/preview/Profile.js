import React, {useState} from "react";
import {connect} from "react-redux"
import Modal from 'react-modal';
import ModalForm from "../modals/ProfileModal";


const Profile = ({profile}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <section onClick={openModal} className="section profile">
                <h2 className="header">{profile.name}</h2>
                <p className="title">{profile.job}</p>
                <div className="address">
                    <span>{profile.address}</span>
                    <span>{profile.phone}</span>
                    <span>{profile.mail}</span>
                </div>
            </section>
            <ModalForm
                open={modalIsOpen}
                close={closeModal}
            >
            </ModalForm>
        </>

    )
};

const mapStateToProps = (state) => {
    return {
        profile: state.resume.profile
    }
};

export default connect(mapStateToProps)(Profile)