// // import React from 'react';
// /* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import { Input, FormBtn, FormBtnOutline } from '../components/Form/Form'
import {useLogout} from '../utils/auth';
import './Profile';
import './Signup';

function handleInputChange() {
  // const { name, value } = event.target;
  // setFormObject({...formObject, [name]: value})
}

function handleFormClear(e) {
  e.preventDefault();
  // history.push('/'); // // USE MODAL INSTEAD, using the functionality to Pass the User's data from Sign.tsx to Profile.tsx;and then history.push('/account')
};




const Profile = () => {
    const handleFormSubmit = async ( e ) => {
        e.preventDefault();
    // submit form function
    // include display aler
    // clearform after submitting
    
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
    
        history.push('/account')
    }

    return (
        <Container py="-5">
            <div className="container">
                <h1 className="text-center"> Profile </h1>
                
                <Row py="-5">
                    <Col size="md-4 sm-12">
                        <img
                        className="img-fluid pr-4 mt-3"
                        src="./assets/img/profile.jpg"
                        />
                    

                        {/* Passing the User's data from Sign.tsx to Profile.tsx */}
                        <Link to={{pathname: "/Signup", state: data}}>
                            this.props.history.push(
                                {
                                    pathname: '/Signup',
                                    state: data // Data is the array of {handleFormSubmit} //
                                }
                            )

                            render() {
                
                                const { state } = this.props.Name;
                                const { state } = this.props.email;
                                const { state } = this.props.phone;
                                const { state } = this.props.location;
                                
                                return (
                                    <Col size="md-8 sm-12">
                                        <div className='py-2 mx-1 px-4' style={{width:'auto'}}>
                                        <div className='row align-items-center justify-content-center'>
                                            <h5>First Name:</h5>
                                            &nbsp;&nbsp;&nbsp;
                                            <p>TBD</p>
                                        </div>


                                        <div className='row align-items-center justify-content-center'>
                                            <h5>Last Name:</h5>
                                            &nbsp;&nbsp;&nbsp;
                                            <p>TBD</p>
                                        </div>


                                        <div className='row align-items-center justify-content-center'>
                                            <h5>Email:</h5>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <p>TBD</p>
                                        </div>


                                        <div className='row align-items-center justify-content-center'>
                                            <h5>Phone:</h5>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <p>TBD</p>
                                        </div>


                                        <div className='row align-items-center justify-content-center'>   
                                            <h5>Location:</h5>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <p>TBD</p>
                                        </div>
                                    </div>
                                    </Col>
                                )
                            }
                        </Link>
                        
                
                        <form>
                    <h5>This the h5 tag that says Place holder for artwork for sale list</h5>
                
                    <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" /> 
                    <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" />
                    <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" />

                    <FormBtnOutline onClick={handleFormClear}>
                        Sell Artwork
                    </FormBtnOutline>

                    <FormBtn onClick={handleFormSubmit}>
                        Update Profile
                    </FormBtn>
                </form>
                    </Col>
                </Row>
            </div>
        </Container>
    )
};

export default Profile