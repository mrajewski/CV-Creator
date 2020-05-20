import {SUMMARY_UPDATE} from "../actions/types";

const INITIAL_STATE = "Burger ipsum dolor amet bacon strip steak chuck, t-bone beef Cheeseburger spare ribs. Bresaola corned beeftenderloin spare ribs t-bone. Beef tenderloin chuck filet mignon t-bone, rump tri-tip brisket. Cheeseburgershank meatloaf ribeye, ground round patties bacon porterhouse chuck rump Burger t-bone. Burger cow corned beef,filet mignon kobe tenderloin bresaola short loin short rib meatloaf beef ribs shoulder patties.";

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SUMMARY_UPDATE:
            return action.payload;
        default:
            return state;
    }
}