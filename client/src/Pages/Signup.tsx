// import React from 'react';
import './Signup.css';
// import {container } from '../LayoutComponents/Grid/Grid'
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

const Signup = () => {
    return (
        <>
  
            <h1 className="text-center">Ready to sign up to sell your artwork?</h1>
            
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        
            <div className="container px-3">
                <form className="border border-warning py-5 mx-3 px-5">
                    <h5 className="">First Name:</h5>
                    <Input onChange={handleInputOnchange} name="firstName" />
                    
                    <h5>Last Name:</h5>
                    <Input onChange={handleInputOnchange} name="lastName" />
                    
                    <h5>Email:</h5>
                    <Input onChange={handleInputOnchange} name="email" />
                    
                    <h5>Phone:</h5>
                    <Input onChange={handleInputOnchange} name="phone" />
                    
                    <h5>Password:</h5>
                    <Input onChange={handleInputOnchange} name="password" />

                    <FormBtnOutline className="text-center" onClick={handleFormClear}>Cancel</FormBtnOutline>
                
                    <FormBtn className="text-center" onClick={handleFormSubmit}>Register</FormBtn>
                </form>
            </div>
        </>
    )
}

export default Signup;