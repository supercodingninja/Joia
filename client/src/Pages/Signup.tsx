import React, {useState} from 'react';
import {Container} from '../LayoutComponents/Grid/Grid'
import {Input, FormBtnOutline, FormBtn} from '../components/Form/Form'
import {useAuthTokenStore, useIsAuthenticated, useAuthenticatedUser, useLogin, useLogout} from '../utils/auth';

import API from '../utils/api';
import { useHistory } from 'react-router-dom'
import '../assets/mission-script-cufonfonts-webfont/style.css'

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

        } catch(err) {

             // Handle error responses from the API. //
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
                <h1 className='text-center py-2' style={{font:'Milkshake'}}>
                    Discover <i><b>Joia</b></i>
                </h1>
    
                <p className='text-center mt-2 mb-2' style={{font:'Mission Script'}}>
                    <i>Joia</i> is your jewel eCommerce website for local art,
                </p>
                
                <p className='text-center mt-2 mb-2' style={{font:'Mission Script'}}>
                    Where you can find/sell your gem, for your Jewel or Jim!
                </p>
    
                <div className='container px-1 mb-1 pb-5'>
                    <form onSubmit={handleFormSubmit} name='signupForm' className='py-2 mx-1 px-4' style={{width:'auto'}}>
                        
                        <div className='row align-items-center justify-content-center'>
                            <h5>First Name:</h5>
                            &nbsp;&nbsp;&nbsp;
                            <Input type='text' onChange={(e)=>setFirstName(e.target.value)} name='firstName'/>
                        </div>

    
                        <div className='row align-items-center justify-content-center'>
                            <h5>Last Name:</h5>
                            &nbsp;&nbsp;&nbsp;
                            <Input type='text' onChange={(e)=>setLastName(e.target.value)} name='lastName'/>
                        </div>


                        <div className='row align-items-center justify-content-center'>
                            <h5>Email:</h5>
                            {emailAlreadyTaken && (<h1 style={{color:'red'}}>Try a different email.  That one is taken</h1>)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input type='text' onChange={(e)=>setEmail(e.target.value)} name='email' style={{width:'auto'}}/>
                        </div>


                        <div className='row align-items-center justify-content-center'>
                            <h5>Phone:</h5>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input type='text' onChange={(e)=>setPhone(e.target.value)} name='phone'/>
                        </div>


                        <div className='row align-items-center justify-content-center'>
                            <h5>Password:</h5>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input type='text' onChange={(e)=>setPassword(e.target.value)} name='password'/>
                        </div>
                            

                        <div className='row align-items-center justify-content-center'>   
                            <h5>Location:</h5>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input type='text' onChange={(e)=>setLocation(e.target.value)} name='location'/>
                        </div>

                        <FormBtnOutline onClick={handleOnClickByDoingNothing}>
                            Cancel
                        </FormBtnOutline>
    
                        <FormBtn>
                            Complete Sign-Up
                        </FormBtn>
                    </form>
                </div>
            </Container>
    );
}

export default Signup;