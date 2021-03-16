import React from 'react'
// import { Header } from "./header"; // Speak to the team about this. //
import CSS from 'csstype';

const Signup = () => {
    return (
        <>
        <div>
            <h1>Ready to sell your artworks?</h1>
        </div>

        <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
        </div>
        </>
    )
}

// export default Signup

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

const h1Styles: CSS.Properties = {
  backgroundColor: '#E5E5E5',
  backgroundSize: 'cover'
};
