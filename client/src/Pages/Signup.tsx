import React from 'react'
// import { Header } from "./header"; // Speak to the team about this. //
import CSS from 'csstype';

const Signup = () => {
    return (
        <>
            <nav></nav>

            <div>
                <h1>Ready to sign up to sell your artwork?</h1>
            </div>

            <div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
            </div>

            <form></form>

            <footer></footer>
        </>
    )
}

export default Signup

// // Ref. https://stackoverflow.com/questions/41628247/how-to-include-css-file-in-tsx-typescript //
// export class Home extends React.Component<{}, {}> {
//     render() {
//         const Signup: { scss: React.ReactNode; }.scss = `
//         .Signup-page {
//             background-color: #E5E5E5;
//         }
//         `
//         return (
//             <div>
//                 <style>
//                     {Signup.scss}
//                 </style>

//                 <div id="body" className="Signup-page">
//                     <Header />
//                 </div>
//             </div>  
//         );
//     }
// }

const bodyStyles: CSS.Properties = {
    backgroundColor: '#E5E5E5',
    backgroundSize: 'cover'
};
  
export function Heading({ title } : { title: string} ) {
    return <body style={bodyStyles}>{title}</body>;
}
