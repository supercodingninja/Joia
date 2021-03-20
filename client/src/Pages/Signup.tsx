import React from 'react';
import './Signup.css';
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import {
  Input,
  TextArea,
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

            <form className="border border-warning py-3 px-5">
                <h4>First Name:</h4>
                <Input onChange={handleInputOnchange} name="firstName" />
                
                <h4>Last Name:</h4>
                <Input onChange={handleInputOnchange} name="lastName" />
                
                <h4>Phone:</h4>
                <Input onChange={handleInputOnchange} name="phone" />
                
                <h4>Email:</h4>
                <Input onChange={handleInputOnchange} name="email" />
                
                <h4>Password:</h4>
                <Input onChange={handleInputOnchange} name="password" />

                <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>
                
                <FormBtn onClick={handleFormSubmit}>Register</FormBtn>
            </form>
        </>
    )
}

export default Signup;