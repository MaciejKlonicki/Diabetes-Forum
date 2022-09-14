import * as UT from './userTypes';
import axios from 'axios';

export const registerUser = (userObject) => {
    return dispatch => {
        dispatch(userRequest());
        axios.post("http://localhost:8080/users/register", userObject)
        .then(response => {
            dispatch({
                type: UT.USER_SAVED_SUCCESS,
                payload: response.data.message
            });
        })
        .catch(error => {
            dispatch(userFailure(error.message));
        });
    };
};

const userRequest = () => {
    return {
        type: UT.USER_REQUEST
    };
};

const userFailure = error => {
    return {
        type: UT.USER_FAILURE,
        payload: error
    };
};
