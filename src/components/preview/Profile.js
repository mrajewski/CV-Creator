import React, {useState} from "react";
import {connect} from "react-redux"
import ProfileForm from "../modals/ModalForm";
import {Field, reduxForm} from "redux-form";


const Profile = ({profile}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };


    const onSubmit = () => {

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
            <ProfileForm
                open={modalIsOpen}
                close={closeModal}
                initialValues={profile}
            >
            </ProfileForm>
        </>

    )
};

const mapStateToProps = (state) => {
    return {
        profile: state.resume.profile
    }
};

export default connect(mapStateToProps)(Profile)