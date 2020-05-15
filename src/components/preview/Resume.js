import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import PrivateLife from "./PrivateLife";
import Profile from "./Profile";
import Skills from "./Skills";
import Summary from "./Summary";


const Resume = () => {
    return (
        <div className="ui container resume">
            <Profile/>
            <Summary/>
            <Skills/>
            <Experience/>
            <Education/>
            <PrivateLife/>
        </div>
    )
};

export default Resume