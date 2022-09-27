import React from 'react'
import { success } from './services/index';
import {connect} from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute =  ({children, ...rest}) => {
    let auth = success();
    return(
        <Route {...rest}>
            {auth.isLoggedIn
            ?
            children
            :
            <Redirect to="/logowanie"/>}
        </Route>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        success: (isLoggedIn) => dispatch(success(isLoggedIn))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);