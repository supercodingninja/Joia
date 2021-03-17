import React from 'react'
import CSS from 'csstype';

const About = () => {
    return (
        <>
            <nav></nav>

            <div className='upperDiv'>
                <div>
                    <h2>About Us</h2>
                </div>

                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>

                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>

                <br></br>

                <p></p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.

                <br></br>

                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                
                <br></br>
                
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                
                <br></br>
                
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
            </div>
           
           
            <div className='bottomDiv'>
                <div>
                    <h2>How to post your artwork </h2>
                </div>

                <ol>
                    <li>1- Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</li>
                    
                    <li>2- Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</li>
                    
                    <li>3- Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</li>
                    
                    <li>4- Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</li>
                </ol>
            </div>

            <form></form>

            <footer></footer>
        </>
    )
}

export default About

const bodyStyles: CSS.Properties = {
    backgroundColor: '#E5E5E5',
    backgroundSize: 'cover'
};

const bottomDivStyleRule: CSS.Properties = {
    backgroundColor: '#F2C94C'
};
  
export function Heading({ title } : { title: string} ) {
    return <body style={bodyStyles}>{title}</body>;
}

export function bottomDivStyle({ title } : { title: string} ) {
    return <div className='bottomDiv' style={bottomDivStyleRule}>{title}</div>;
}