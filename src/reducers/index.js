import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import photoReducer from "./photoReducer";
import summaryReducer from "./summaryReducer";
import skillsReducer from "./skillsReducer";

const resumeReducers = combineReducers({
    profile: profileReducer,
    photo: photoReducer,
    summary: summaryReducer,
    skills: skillsReducer
});

export default resumeReducers