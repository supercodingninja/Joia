import React, { useState } from 'react';
import { Container } from '../LayoutComponents/Grid/Grid';
import { Input, FormBtnOutline, FormBtn } from '../components/Form/Form';
import { useLogin } from '../utils/auth';
import API from '../utils/api';
import { useHistory } from 'react-router-dom';
import '../assets/mission-script-cufonfonts-webfont/style.css';

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

    function handleFormClear(e) {
        e.preventDefault();
        history.push('/');
    };

    const handleFormSubmit = async (e) => {
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
            await login({ email, password });

        } catch (err) {

            // Handle error responses from the API. //
            if (err.response && err.response.data) {
                console.log(err.response.data);

                if (err.response.data.email && err.response.data.email === 'Email already exists.') {
                    setEmailAlreadyTaken(true);
                }
            }
        }
    }

    return (
        <Container>
            <h1 className='text-center py-2' style={{ font: 'Milkshake' }}>
                Discover <i><b>Joia</b></i>
            </h1>

            <p className='text-center mt-2 mb-2' style={{ font: 'Mission Script' }}>
                <i>Joia</i> is your jewel eCommerce website for local art,
                </p>

            <p className='text-center mt-2 mb-2' style={{ font: 'Mission Script' }}>
                Where you can find/sell your gem, for your Jewel or Jim!
                </p>

            <div className='container px-1 mb-1 pb-5'>
                <form onSubmit={handleFormSubmit} name='signupForm' className='py-2 mx-1 px-4' style={{ width: 'auto' }}>

                    <div className='row align-items-center justify-content-center'>
                        <h5>First Name:</h5>
                            &nbsp;&nbsp;&nbsp;
                            <Input
                            type='text'
                            onChange={(e) => setFirstName(e.target.value)}
                            name='firstName' 
                            placeholder="First name"/>
                    </div>


                    <div className='row align-items-center justify-content-center'>
                        <h5>Last Name:</h5>
                            &nbsp;&nbsp;&nbsp;
                            <Input
                            type='text'
                            onChange={(e) => setLastName(e.target.value)}
                            name='lastName' 
                            placeholder="Last name"/>
                    </div>


                    <div className='row align-items-center justify-content-center'>
                        <h5>Email:</h5>
                        {emailAlreadyTaken && (<h1 style={{ color: 'red' }}>Try a different email.  That one is taken</h1>)}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input type='text'
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            placeholder="email@email.com"
                            style={{ width: 'auto' }} />
                    </div>


                    <div className='row align-items-center justify-content-center'>
                        <h5>Phone:</h5>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input
                            type='text'
                            onChange={(e) => setPhone(e.target.value)}
                            name='phone' 
                            placeholder="555-555-5555"/>
                    </div>


                    <div className='row align-items-center justify-content-center'>
                        <h5>Password:</h5>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            name='password' 
                            />
                    </div>


                    <div className='row align-items-center justify-content-center'>
                        <h5>Location:</h5>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Input
                            type='text'
                            onChange={(e) => setLocation(e.target.value)}
                            name='location' 
                            placeholder="City name"/>
                    </div>

                    <FormBtnOutline onClick={handleFormClear}>
                        Cancel
                        </FormBtnOutline>

                    <FormBtn onClick={handleFormSubmit}>
                        Complete Sign-Up
                    </FormBtn>

                    {/* This button triggers the "Privacy Policy" modal */}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                    Privacy Policy
                    </button>

                    {/* The Privacy Policy Modal */}
                    <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                

                                <div className="modal-body">
                                    {/* MODAL BODY GOES HERE */}
                                </div>
      
      
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default Signup;