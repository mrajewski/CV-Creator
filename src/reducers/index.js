import {combineReducers} from "redux";
import profileReducer from "./profileReducer";

const resumeReducers = combineReducers({
    profile: profileReducer
});

export default resumeReducers