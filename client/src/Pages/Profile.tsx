import React from 'react'
import CSS from 'csstype';

const Profile = () => {
    return (
        <>
            <nav></nav>

            <div>
                <h2>Profile</h2>
            </div>

            <form></form>

            <button className='update'>Update Profile</button>
            
            <button className='sell'>Sell Your Artwork</button>

            <footer></footer>
        </>
    )
}

export default Profile

const bodyStyles: CSS.Properties = {
    backgroundColor: '#E5E5E5',
    backgroundSize: 'cover'
};

const updateBtnStyle: CSS.Properties = {
    backgroundColor: '#F2C94C',
};

const sellBtnStyle: CSS.Properties = {
    borderColor: '#F2C94C',
    backgroundColor: '#E5E5E5'
};
  
export function Heading({ title } : { title: string} ) {
    return <body style={bodyStyles}>{title}</body>;
}

export function updateBtn({ title } : { title: string} ) {
    return <button style={updateBtnStyle}>{title}</button>;
}

export function sellBtn({ title } : { title: string} ) {
    return <button style={sellBtnStyle}>{title}</button>;
}