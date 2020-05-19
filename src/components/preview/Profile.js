import React, {useState} from "react";
import {connect} from "react-redux"
import ProfileForm from "../modals/ModalForm";

import ImagePreview from "./ImagePreview"


const Profile = ({profile, photo}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };


    const closeModal = () => {
        setIsOpen(false);
    };

    const renderSection = () => {
        return (
            <div className="ui grid">
                <div className="twelve wide column">
                    <section onClick={openModal} className="section profile">
                        <h2 className="name">{profile.name}</h2>
                        <p className="title">{profile.job}</p>
                        <div className="address">
                            <span>{profile.address}</span>
                            <span>{profile.phone}</span>
                            <span>{profile.mail}</span>
                        </div>
                    </section>
                </div>
                <div className="four wide column">
                   <ImagePreview/>
                </div>
            </div>
        )
    };

    return (
        <>
            {renderSection()}
            <ProfileForm
                open={modalIsOpen}
                close={closeModal}
                initialValues={profile}
            />
        </>

    )
};

const mapStateToProps = (state) => {
    return {
        profile: state.resume.profile
    }
};

export default connect(mapStateToProps)(Profile)