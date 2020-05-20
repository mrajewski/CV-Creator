import {PHOTO_UPDATE} from "../actions/types";

export default (state= "https://www.paulworpole.com/wp-content/uploads/2019/02/Black-and-White-Portrait-of-Man-Laughing-%C2%A9-Paul-Worpole-Photography.jpg", action) => {
    switch (action.type) {
        case PHOTO_UPDATE:
            return action.payload;
        default:
            return state;
    }
}