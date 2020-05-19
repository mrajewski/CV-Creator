import {PROFILE_UPDATE} from "../actions/types";

const INITIAL_STATE = {
    name: "Maciej Rajewski",
    job: "Frontend Developer",
    phone: "+48 500 600 700",
    mail: "example@example.com",
    address: "ul. Example 99, 00-000 Warszawa",
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_UPDATE:
            return {...action.payload};
        default:
            return state;
    }
}