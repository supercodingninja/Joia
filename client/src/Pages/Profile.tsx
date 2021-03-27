// // import React from 'react';
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import { Input, FormBtn, FormBtnOutline } from '../components/Form/Form'
import {useLogin, useLogout} from '../utils/auth';
import './Profile';
import './Signup';
import { useEffect, useState } from 'react';
import api from '../utils/api';


const Profile = () => {

  const [thisUser, setThisUser] = useState();

  useEffect(() => {

    async function doAsyncStuff() {

      try {
        const currentUserAxiosResponse = await api.authenticated();

        setThisUser(currentUserAxiosResponse.data);

        console.log("user: ", currentUserAxiosResponse.data);

      } catch (e) {

        console.log("doAsyncStuff failed:", e);
      }
    }

    doAsyncStuff();  // no then or a catch because the function internally has 
    // a try/catch around its entire body.  And nothing needs to be done
    // immediately once this completes.  Even if the authenticated call was
    // abysmally slow, it would take a crazy fast user to fill out the form
    // and hit submit before the user information came asyncronously back to
    // this page.
  }, []);


  function doNothing() {
  }

  function handleInputChange() {
    // const { name, value } = event.target;
    // setFormObject({...formObject, [name]: value})
  }
  
  function handleFormClear(e) {
    e.preventDefault();
    // history.push('/'); // // USE MODAL INSTEAD, using the functionality to Pass the User's data from Sign.tsx to Profile.tsx;and then history.push('/account')
  };
  
  function handleFormSubmit() {
  // submit form function
  // include display aler
  // clearform after submitting
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
          </Col>

          
          <Col size="md-8 sm-12">
            <div className='py-2 mx-1 px-4' style={{width:'auto'}}>
              <div className='row align-items-center justify-content-center'>
                  <h5>Name:</h5>
                  {thisUser.name}
              </div>

              <div className='row align-items-center justify-content-center'>
                  <h5>Email:</h5>
                  {thisUser.email}
              </div>


              <div className='row align-items-center justify-content-center'>
                <h5>Phone:</h5>
                {thisUser.phone}
                
              </div>


              <div className='row align-items-center justify-content-center'>   
                <h5>Location:</h5>
                {thisUser.location}
              </div>
            </div>
          </Col>
            
            <form onSubmit={handleFormSubmit}>
              <h5>This the h5 tag that says Place holder for artwork for sale list</h5>
              <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" /> 
              <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" />
              <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" />

              <FormBtnOutline onClick={doNothing}>
                Sell Artwork
              </FormBtnOutline>

              <FormBtn onClick={doNothing}>
                Update Profile
              </FormBtn>
            </form>
        </Row>
      </div>
    </Container>
  )
}

export default Profile