import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute ({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render= {props => 
            localStorage.getItem('jwtToken') !== null ? (
                <Component {...props} />
            ) : (
                <Redirect
                to={{
                    pathname: "/logowanie",
                    state: {from: props.location}
                }} />
            )}
            />
    );
}




export default PrivateRoute;