import React, {useState} from "react";
import {connect} from "react-redux"
import ProfileForm from "../modals/ProfileForm";
import {Icon} from "semantic-ui-react";


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
            <section onClick={openModal} className="section profile">
                <h2 className="profile__name">{profile.name}</h2>
                <div className="profile__hr"/>
                <p className="profile__title">{profile.job}</p>
                <div className="profile__address">
                    <span>
                        <Icon name="map marker alternate"/>
                        {profile.address}
                    </span>
                    <span>
                        <Icon name="phone"/>
                        {profile.phone}
                    </span>
                    <span>
                        <Icon name="envelope"/>
                        {profile.mail}
                    </span>
                </div>
            </section>
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