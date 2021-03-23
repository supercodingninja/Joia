import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsAuthenticated } from "../utils/auth";

export default function GuestRoute ({ component, children, redirectTo = "/", ...props }: {component: Component, children: any, redirectTo: string}) {

    const isAuth = useIsAuthenticated();

    const render = ({ location }:{location:any}) => (
        isAuth
        
            ? <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
            
            : (Component ? <Component /> : children)
    );

    return (
        <Route
          {...props}
          render={render}
        />
    );

}