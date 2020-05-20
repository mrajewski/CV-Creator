import {SKILLS_UPDATE} from "../actions/types";

const INITIAL_STATE = [
    {
        group: 'Cooking',
        items: 'Burgers, pizza, sushi'
    },
    {
        group: 'Drinks',
        items: 'Coffee, tea, coffee-tea, beer, whiskey, vodka'
    },
    {
        group: 'Bresaola',
        items: 'Porterhouse, ribs, ground, brisket, filet'
    },
    {
        group: 'Meatball',
        items: 'Tri-tip, mignon, chuck, tenderloin'
    }
];

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case SKILLS_UPDATE:
            return [...action.payload];
        default:
            return state;
    }
}