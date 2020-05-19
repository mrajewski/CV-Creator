import {
    PROFILE_UPDATE,
    PHOTO_UPDATE
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