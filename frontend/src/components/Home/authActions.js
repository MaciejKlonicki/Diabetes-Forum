import {LOGIN_REQUEST, SUCCESS, FAILURE} from './authTypes';

export const authenticateUser = (email, password) => {
    return dispatch => {
        dispatch(loginRequest());
        if(email === "test" && password === "test") {
            dispatch(success());
        } else {
            dispatch(failure());
        }
    };
};

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const success = isLoggedIn => {
    return {
        type: SUCCESS,
        payload: isLoggedIn
    };
};

const failure = isLoggedIn => {
    return {
        type: FAILURE,
        payload: isLoggedIn
    };
};