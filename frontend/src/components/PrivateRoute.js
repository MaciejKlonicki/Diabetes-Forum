import React, { Component } from 'react'
import { authenticateUser } from './services/index';
import {connect} from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import BasicInformations from './AboutDiabetes/Basics';

class PrivateRoute extends Component {

render() {
    return (
        <Route>
            {!this.props.auth.isLoggedIn
            ?
            <Redirect to="/logowanie" />
            : <BasicInformations />}
        </Route>
    )
  }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);