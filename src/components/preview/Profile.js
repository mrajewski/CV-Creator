import React from "react";
import {connect} from "react-redux"

const Profile = ({profile}) => {
    return (
        <section className="">
            <h2 className="header">{profile.name}</h2>
            <p className="title">{profile.job}</p>
            <div className="address">
                <p>{profile.address}</p>
                <p>{profile.phone}</p>
                <p>{profile.mail}</p>
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