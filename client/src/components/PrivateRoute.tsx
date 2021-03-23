import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsAuthenticated } from "../utils/auth";

export default function PrivateRoute ({ component, children, redirectTo = "/", ...props }: {component: Component, children: any, redirectTo: string}) {

    const isAuth = useIsAuthenticated();

    const render = ({ location }) => (
        isAuth
        
            ? (Component ? <Component /> : children)
            
            : <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
    );

    return (
        <Route
          {...props}
          render={render}
        />
    );

}