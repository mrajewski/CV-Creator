import {EDUCATION_UPDATE} from "../actions/types";

const INITIAL_STATE = [
    {
        specialization: 'Example  specialization',
        school: 'Example School',
        startDate: 'June 2010',
        endDate: 'June 2015'
    }
];

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case EDUCATION_UPDATE:
            return [...action.payload];
        default:
            return state;
    }
}