import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import photoReducer from "./photoReducer";
import summaryReducer from "./summaryReducer";
import skillsReducer from "./skillsReducer";
import experienceReducer from "./experienceReducer";

const resumeReducers = combineReducers({
    profile: profileReducer,
    photo: photoReducer,
    summary: summaryReducer,
    skills: skillsReducer,
    experience: experienceReducer
});

export default resumeReducers