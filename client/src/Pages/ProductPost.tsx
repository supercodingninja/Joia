import React from 'react'
import CSS from 'csstype';

const ProductPost = () => {
    return (
        <>
            <nav></nav>

            <div>
                <h2>Artworks Information </h2>
            </div>

            <form></form>

            <button className='submit'>Submit</button>
            
            <button className='cancel'>Cancel</button>

            <footer></footer>
        </>
    )
}

export default ProductPost

const bodyStyles: CSS.Properties = {
    backgroundColor: '#E5E5E5',
    backgroundSize: 'cover'
};
  
const updateBtnStyle: CSS.Properties = {
    backgroundColor: '#F2C94C',
};

const cancelBtnStyle: CSS.Properties = {
    borderColor: '#F2C94C',
    backgroundColor: '#E5E5E5'
};
  
export function Heading({ title } : { title: string} ) {
    return <body style={bodyStyles}>{title}</body>;
}

export function updateBtn({ title } : { title: string} ) {
    return <button style={updateBtnStyle}>{title}</button>;
}

export function cancelBtn({ title } : { title: string} ) {
    return <button style={cancelBtnStyle}>{title}</button>;
}