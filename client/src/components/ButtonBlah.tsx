import React from 'react';

function ButtonBlah() {

    const myOnClick = (event: any) => {
        console.log("Hello");
    }

    return (
        <button onClick={myOnClick}>Blah</button>
    );
}

export default ButtonBlah;