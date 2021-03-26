// import React from 'react';

/* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import { Input, FormBtn, FormBtnOutline } from '../components/Form/Form'
import './Profile';

function handleInputChange() {
  // const { name, value } = event.target;
  // setFormObject({...formObject, [name]: value})
}

function handleFormClear(e) {
  e.preventDefault();
  // history.push('/');
};

function handleFormSubmit() {
// submit form function
// include display aler
// clearform after submitting
}

const Profile = () => {
  return (
    <Container py="-5">
      <div className="container">
        <h1>This Page will be re-done, per group decision [Frederick will take care of it.]
        </h1>
        <h1 className="text-center"> Profile </h1>
        <Row py="-5">
          <Col size="md-4 sm-12">
            <img
              className="img-fluid pr-4 mt-3"
              src="./assets/img/profile.jpg"
            />
          </Col>

          <Col size="md-8 sm-12">
            <form>
              <h5>Name</h5>
              <Input
                onChange={handleInputChange}
                name="Name"
              />

              <h5>Email</h5>
              <Input
                onChange={handleInputChange}
                name="type"
              />

              <h5>Location</h5>
              <Input
                onChange={handleInputChange}
                name="location"
                />

              <h5>Phone</h5>
              <Input onChange={handleInputChange} name="phone" />

              <h5>Place holder for artwork for sale list</h5>
              <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" /> 
              <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" />
              <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" /> 

              <FormBtnOutline onClick={handleFormClear}>Sell Artwork</FormBtnOutline>

              <FormBtn onClick={handleFormSubmit}>Update Profile</FormBtn>
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Profile

