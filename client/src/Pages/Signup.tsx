// import React from 'react';

import { Container } from '../LayoutComponents/Grid/Grid'
import { Input, FormBtnOutline, FormBtn } from '../components/shared/Form/Form'


function handleInputOnchange() {
  // function
}

function handleFormClear() {
  // clear form function
}


const Signup = () => {

    // I need to set upan api folder...use AB'S starter code

    // Either
    // A. Set up ref objects (useRef hook) for each input
    // const firstNameRef = useRef();
    // B. Create a state (useState hook) and update the state from each input
    // const [newUser,setNewUser] = useState({
    //     first: "",
    //     last: "",
    //     email: "",
    //     phone: "",
    //     password: ""
    // });

    async function api_register(userData: any) {
        // pretend we do a post in here
        return;
    }

    async function handleFormSubmit(event:any) {

        // submit form function
        event.preventDefault();

        // Build `newUserData` from ref objects or state stores
        const newUserData = {
            firstName: "Bob",
            lastName: "Thorton",
            email: "whatever",
            phone: "123456789",
            password: "secret"
        };

        await api_register(newUserData);

        // const first = firstNameRef.current.value;

        // Pass `newUserData`
        // await api.register( /* newUserData */ );

        // login({ email, password });
    
    }

    return (
        <>
  
            <h1 className="text-center">Ready to sign up to sell your artwork?</h1>
            
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        
            <div className="container px-3">
                <form className="border border-warning py-5 mx-3 px-5" onSubmit= {handleFormSubmit}>
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

                    <a className="text-center" href="/">Cancel</a>
                
                    <FormBtn className="text-center" onClick={handleFormSubmit}>Register</FormBtn>
                </form>
            </div>
        </>
    )
};


export default Signup
