import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import photoReducer from "./photoReducer";

const resumeReducers = combineReducers({
    profile: profileReducer,
    photo: photoReducer
});

export default resumeReducers