import React,{ createContext, useContext, useReducer } from "react";

import {
    LOGIN_USER,
    LOGOUT_USER
} from "./actions";

interface AppContextInterface {    
    store: any,
    dispatch: any
}

interface StoreObjectInterface {    
    userAuth: any,
}

const StoreContext = createContext<AppContextInterface | null>(null);

const ctxt = StoreContext;

export const StoreContentProvider = ctxt.Provider;
export const StoreContentConsumer = ctxt.Consumer;

// This frightening TypeScript syntax is decribed here:
//  https://mariusschulz.com/blog/typing-destructured-object-parameters-in-typescript

function reducer ( state:any, { type, payload }:{type: string, payload:any} ) {

    switch( type ) {
        case LOGIN_USER:

            return { ...state, userAuth: payload };

        case LOGOUT_USER:

            return { ...state, userAuth: {} };

        default:
            return state;
    }
}

export function StoreProvider ( { children } : {children: any} ) {

    const [ store, dispatch ] = useReducer( reducer, {
        userAuth: {}
    } );

    return <StoreContentProvider value={{store: store, dispatch: dispatch}}>{ children }</StoreContentProvider>

}

export function useStoreContext(): any {

    let retVal = useContext( StoreContext );
    return retVal as any;
}