// import React from 'react'
import './Login.css';

import {
    Input,
    FormBtnOutline,
    FormBtn,
} from '../components/shared/Form/Form'

function handleInputOnchange () {
    // function
};

function handleFormClear() {
    // clear form function
};

function handleFormSubmit() {
    // submit form function
};

const Login = () => {
    return (
        <>
            <nav></nav>

            
            <h1>Ready to login to sell your artwork?</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        

            <div className="container px-3">
                <form className="border border-warning py-5 mx-3 px-5">
                    <h5>Email:</h5>
                    <Input onChange={handleInputOnchange} name="email" />
                    
                    <h5>Password:</h5>
                    <Input onChange={handleInputOnchange} name="password" />

                    <FormBtnOutline className="text-center" onClick={handleFormClear}>Cancel</FormBtnOutline>
                
                    <FormBtn className="text-center" onClick={handleFormSubmit}>Register</FormBtn>
                </form>
            </div>
        </>
    )
}

export default Login;