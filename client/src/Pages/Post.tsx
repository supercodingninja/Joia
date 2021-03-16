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

            <button>Update Profile</button>
            
            <button>Sell Your Artwork</button>

            <footer></footer>
        </>
    )
}

export default Profile

const bodyStyles: CSS.Properties = {
    backgroundColor: '#E5E5E5',
    backgroundSize: 'cover'
};
  
export function Heading({ title } : { title: string} ) {
    return <body style={bodyStyles}>{title}</body>;
}