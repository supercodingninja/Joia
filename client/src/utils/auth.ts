import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import api from "./api"
import { useStoreContext } from "../store";
import { LOGIN_USER, LOGOUT_USER } from "../store/actions";

function setAuthToken(token:any){

    storeAuthToken( token );
    applyAuthToken( token );

    return token ? jwt_decode<string>(token) : undefined;

}

function storeAuthToken(token:any) {

    token

        ? localStorage.setItem("jwtToken", token)
        
        : localStorage.removeItem( "jwtToken" );

}

function applyAuthToken(token:any) {

    token

        // Apply authorization token to every request if logged in
        ? api.setHeader( "Authorization", token )

        // Delete auth header
        : api.setHeader( "Authorization", false );

}

interface MyToken {
    name: string;
    exp: number;
    // whatever else is in the JWT.
  }

export function useAuthTokenStore()  {

    const [ isDone, setIsDone ] = useState(false);

    let storeContext:any = useStoreContext() || 5;

    let outerDispatch;

    useEffect(() => {
        //if(storeContext === null) { return };

        const { dispatch } = storeContext;

        outerDispatch = dispatch;

        if( isDone ) return;

        // Check for token to keep user logged in
        if ( !localStorage.jwtToken ) {
            setIsDone( true );
            return;
        }
            
        // Set auth token header auth
        const tokenString = localStorage.jwtToken;
        
        // Decode token and get user info and exp
        const token = jwt_decode<MyToken>(tokenString);
        
        // Check for expired token
        const currentTime = Date.now() / 1000; // to get in milliseconds

        const invalidate = () => {

            // Logout user
            setAuthToken( false );
            dispatch({ type: LOGOUT_USER });

        }
        
        if (token.exp < currentTime) {
            
            invalidate();

        } else {

            applyAuthToken(tokenString);

            const authCheck = async () => {

                let user;

                try {

                    const { data } = await api.authenticated();

                    user = data;

                } catch(res) {
                    
                    invalidate();

                }

                if( user ) dispatch({ type: LOGIN_USER, payload: { token, user } });

                setIsDone( true );

            }

            authCheck();

        }

    }, [ outerDispatch, isDone ])

    return isDone;

}

export function useIsAuthenticated() {

    let sc = useStoreContext();
    if(sc === null) {return;}
    const {userAuth: {token}} = sc;

    return token && token.exp > Date.now() / 1000;

}

export function useAuthenticatedUser() {
    let sc = useStoreContext();
    if(sc === null) {return;}
    const {userAuth: {user}} = sc;

    return user;

}

export function useLogin() {

    let sc = useStoreContext();
    if(sc === null) {return;}
    const { dispatch } = sc;

    return async ( credentials: any ) => {
    
        const { data: { token: tokenString, user } } = await api.login( credentials );

        const token = setAuthToken( tokenString );

        dispatch({ type: LOGIN_USER, payload: { token, user } });

        return token;
    }
}

export const useLogout = () => {

    let sc = useStoreContext();
    if(sc === null) {return;}
    const { dispatch } = sc;

    return () => {

        setAuthToken( false );
        dispatch({ type: LOGOUT_USER });

    }
    
}