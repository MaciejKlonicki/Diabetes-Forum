import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute =  ({component: Component, ...rest}) => {
    let auth = localStorage.getItem('jwtToken')
    return(
        <Route {...rest}>
        {auth === null
        ?
        <Redirect to="/logowanie"/>
            :
            <Component {...rest} />}
        </Route>
    );
}




export default PrivateRoute;