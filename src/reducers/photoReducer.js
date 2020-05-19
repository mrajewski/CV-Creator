import {PHOTO_UPDATE} from "../actions/types";

export default (state= "https://react.semantic-ui.com/images/wireframe/square-image.png", action) => {
    switch (action.type) {
        case PHOTO_UPDATE:
            return action.payload;
        default:
            return state;
    }
}