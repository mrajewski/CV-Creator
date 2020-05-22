import {
    PROFILE_UPDATE,
    PHOTO_UPDATE,
    SUMMARY_UPDATE,
    SKILLS_UPDATE
} from "./types";

export const profileUpdate = (profile) => {
    return {
        type: PROFILE_UPDATE,
        payload: profile
    }
};

export const photoUpdate = (photo) => {
    return {
        type: PHOTO_UPDATE,
        payload: photo
    }
};

export const summaryUpdate = (summary) => {
    return {
        type: SUMMARY_UPDATE,
        payload: summary
    }
};

export const skillsUpdate = (skills) => {
    return {
        type: SKILLS_UPDATE,
        payload: skills
    }
};