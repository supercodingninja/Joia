// // import React from 'react';
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import { Input, FormBtn, FormBtnOutline } from '../components/Form/Form'
import {useAuthenticatedUser, useLogout} from '../utils/auth';
import './Profile';
import './Signup';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import { useHistory } from 'react-router';


const Profile = () => {

  const history = useHistory();

  const user = useAuthenticatedUser();

  console.log("authUser = ", user);
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    history.push('/post');
  }

  // const useLogout = (): logout = (e) => {
  //   e.preventDefault();
  //   localStorage.clear();
  //   history.push('/login');
  // }

  const logout = useLogout;
  

  function handleFormClear(e) {
    e.preventDefault();
    history.push('/account'); // USE MODAL INSTEAD, using the functionality to Pass the User's data from Sign.tsx to Profile.tsx;and then history.push('/account')
  };
  
  return (
    <Container py="-4">
      <div className="container">
        <h1 className="text-center">Welcome, {user.name}</h1>
        <Row py="-3">
          <Col size="md-4 sm-12">
            <img
              className="img-fluid pr-4 mt-3"
              src="./assets/img/profile.jpg"
              alt="Uploaded artwork"
            />
          </Col>
            
          <form onSubmit={handleFormSubmit} className='py-2 mx-1 px-4'>
            <div className='row align-items-center justify-content-center'>
              <div>
                {/* <div><h5><b>Name:</b>&nbsp;&nbsp;&nbsp;{user.name}</h5></div><br></br> */}
            
                <div><h5><b>Location:</b>&nbsp;&nbsp;&nbsp;{user.location}</h5></div><br></br> {/* @Conner, {user.location}, here, is just a placeholder for your <Link> */}
                
                <div><h5><b>Email:</b>&nbsp;&nbsp;&nbsp;{user.email}</h5></div><br></br> {/* @Conner, {user.location}, here, is just a placeholder for your <Link> */}

                <div></div><h5><b>Phone:</b>&nbsp;&nbsp;&nbsp;{user.phone}</h5></div>
            </div>

            <br></br>

            <div className='align-items-center justify-content-center'>
              <div className='row align-items-center justify-content-center'><h5><b>Artwork:</b>&nbsp;&nbsp;&nbsp;{user.location}</h5>&nbsp;&nbsp;&nbsp;<FormBtnOutline onClick={handleFormClear}>Update Artwork</FormBtnOutline></div><br></br>
              
              <div className='row align-items-center justify-content-center'><h5><b>Artwork:</b>&nbsp;&nbsp;&nbsp;{user.location}</h5>&nbsp;&nbsp;&nbsp;<FormBtnOutline onClick={handleFormClear}>Update Artwork</FormBtnOutline></div><br></br>
              
              <div className='row align-items-center justify-content-center'><h5><b>Artwork:</b>&nbsp;&nbsp;&nbsp;{user.location}</h5>&nbsp;&nbsp;&nbsp;<FormBtnOutline onClick={handleFormClear}>Update Artwork</FormBtnOutline></div><br></br>
            </div>
            
            <div className='row align-items-center justify-content-center'>
              <FormBtn onClick={handleFormClear}>
                Update Profile
              </FormBtn>

              &nbsp;&nbsp;&nbsp;

              <FormBtnOutline onClick={handleFormSubmit}>
                Sell Artwork
              </FormBtnOutline>

              &nbsp;&nbsp;&nbsp;
             
              <FormBtn onClick={logout}>
                Logout
              </FormBtn>
            </div>
            </form>
        </Row>
      </div>
    </Container>
  )
}

export default Profile;