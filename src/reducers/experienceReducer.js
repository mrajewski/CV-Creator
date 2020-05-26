import {EXPERIENCE_UPDATE} from "../actions/types";

const INITIAL_STATE = [
    {
        position: 'Example Job',
        company: 'Example Company',
        startDate: 'June 2018',
        endDate: 'Till now',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        position: 'Example Job',
        company: 'Example Company',
        startDate: 'June 2016',
        endDate: 'June 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case EXPERIENCE_UPDATE:
            return [...action.payload];
        default:
            return state;
    }
}