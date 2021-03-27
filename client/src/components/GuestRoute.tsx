import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useIsAuthenticated } from "../utils/auth";

export default function GuestRoute ({ component: Component, children, redirectTo = "/", ...props }: {component: any, children: any, redirectTo: string}) {

    const isAuth = useIsAuthenticated();

    console.log(isAuth);

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