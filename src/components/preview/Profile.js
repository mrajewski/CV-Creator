import React from "react";
import {connect} from "react-redux"

const Profile = ({profile}) => {
    return (
        <section className="section profile">
            <h2 className="header">{profile.name}</h2>
            <p className="title">{profile.job}</p>
            <div className="address">
                <span>{profile.address}</span>
                <span>{profile.phone}</span>
                <span>{profile.mail}</span>
            </div>
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        profile: state.resume.profile
    }
};

export default connect(mapStateToProps)(Profile)