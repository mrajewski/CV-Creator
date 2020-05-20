import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import photoReducer from "./photoReducer";
import summaryReducer from "./summaryReducer";

const resumeReducers = combineReducers({
    profile: profileReducer,
    photo: photoReducer,
    summary: summaryReducer
});

export default resumeReducers