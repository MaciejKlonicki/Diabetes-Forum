import {LOGIN_REQUEST, SUCCESS, FAILURE} from './authTypes';

const initalState = {
    isLoggedIn: ''
};

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state
            };
        case SUCCESS:
            return {
                isLoggedIn: action.payload
            };
        case FAILURE:
            return {
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};

export default reducer;