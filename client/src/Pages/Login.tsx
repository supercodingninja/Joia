import React from 'react'
// import { Header } from "./header"; // Speak to the team about this. //
import CSS from 'csstype';

const Login = () => {
    return (
        <>
            <nav></nav>

            <div>
                <h1>Ready to login to sell your artworks?</h1>
            </div>

            <div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
            </div>

            <form></form>

            <footer></footer>
        </>
    )
}

export default Login


const bodyStyles: CSS.Properties = {
  backgroundColor: '#E5E5E5',
  backgroundSize: 'cover'
};

export function Heading({ title } : { title: string} ) {
    return <body style={bodyStyles}>{title}</body>;
}
