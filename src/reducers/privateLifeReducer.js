import {PRIVATE_UPDATE} from "../actions/types";

const INITIAL_STATE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut.";

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case PRIVATE_UPDATE:
            return action.payload;
        default:
            return state;
    }
}