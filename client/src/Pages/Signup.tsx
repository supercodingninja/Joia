import React, {useState} from 'react';
import {Container} from '../LayoutComponents/Grid/Grid'
import {Input, FormBtnOutline, FormBtn} from '../components/Form/Form'
import {useAuthTokenStore, useIsAuthenticated, useAuthenticatedUser, useLogin, useLogout} from '../utils/auth';
import API from '../utils/api';
import { useHistory } from 'react-router-dom'


const Signup = () => {

    // Get the helper login function from the `useLogin` hook. //
    const login = useLogin();

    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [location, setLocation] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [emailAlreadyTaken, setEmailAlreadyTaken] = useState(false);

    function handleOnClickByDoingNothing() {

    }

    function handleFormClear(e) {
        e.preventDefault();
        history.push('/');
    };

    const handleFormSubmit = async ( e ) => {
        e.preventDefault();

        try {

            // Register the user. //
            await API.register({
                location,
                email,
                phone,
                name: firstName + ' ' + lastName,
                password
            });

            // User has been successfully registered, now log them in with the same information. //
            await login({email, password});

            
            // USE MODAL, HERE: User has been successfully registered, logged in and added to state. Additional actions will be performed, here, to redirect Profile.tsx, while transferring the data, also.  Use history.push('./account');; here. //

            

        } catch(err) {

             // Handle error responses from the API. This will include
             if(err.response && err.response.data) {
                 console.log(err.response.data);

                 if(err.response.data.email && err.response.data.email === 'Email already exists.')
                 {
                    setEmailAlreadyTaken(true);
                 }
             }
             
        }

        history.push('./account');
    }

    return (
        <Container>
                <h1 className='text-center py-5'>
                    Ready to sign up to sell your artwork?
                </h1>
    
                <p className='text-center mt-2 mb-5'>
                    <i>Joia</i> is your jewel eCommerce website for local art, where you can find your gem for your Jewel or Jim!
                </p>
    
                <div className='container px-3 mb-5 pb-5'>
                    <form onSubmit={handleFormSubmit} name='signupForm' className='border border-warning py-5 mx-3 px-5'>
                        
                        <h5>First Name:</h5>
                        <Input type='text' onChange={(e)=>setFirstName(e.target.value)} name='firstName'/>
    
                        <h5>Last Name:</h5>
                        <Input type='text' onChange={(e)=>setLastName(e.target.value)} name='lastName'/>
    
                        <h5>Email:</h5>
                        {emailAlreadyTaken && (<h1 style={{color:'red'}}>Try a different email.  That one is taken</h1>)}
                        <Input type='text' onChange={(e)=>setEmail(e.target.value)} name='email'/>
    
                        <h5>Phone:</h5>
                        <Input type='text' onChange={(e)=>setPhone(e.target.value)} name='phone'/>
    
                        <h5>Password:</h5>
                        <Input type='text' onChange={(e)=>setPassword(e.target.value)} name='password'/>
                        
                        <h5>Location:</h5>
                        <Input type='text' onChange={(e)=>setLocation(e.target.value)} name='location'/>

                        <FormBtnOutline onClick={handleOnClickByDoingNothing}>
                            Cancel
                        </FormBtnOutline>
    
                        <FormBtn onClick={handleOnClickByDoingNothing}>
                            Register
                        </FormBtn>
                    </form>
                </div>
            </Container>
    );
}

export default Signup;