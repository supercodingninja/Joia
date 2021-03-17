import React from 'react'
import { Input, FormBtn, FormBtnOutline } from '../shared/Form/Form'
import { Container, Col } from '../../LayoutComponents/Grid/Grid'

// Handles updating component state when the user types into the input field
function handleInputChange() {
  // const { name, value } = event.target;
  // setFormObject({...formObject, [name]: value})
}

function handleFormSubmit() {
  // submit form
}

function handleFormClear() {
  // clear form function
}

const HomePageMain = () => {
  return (
    <>
      <div className="m-0 bg-light pt-5">
        <h2 className="text-center">Location</h2>
        <div className="row d-flex flex-wrap justify-content-center">
          <Col size="md-6 sm-12">
            <form>
              <Input
                onChange={handleInputChange}
                name="State Name"
                placeholder="State Name"
              />

              <p className="font-weight-bold">Search by artist</p>
              <Input
                onChange={handleInputChange}
                name="Artist Name"
                placeholder="Artist Name"
              />

              <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>

              <FormBtn onClick={handleFormSubmit}>Submit</FormBtn>
            </form>
          </Col>
        </div>
      </div>

      <Container>
        <h2 className="text-center pt-5"> Artwork in Seattle</h2>

        <h4 className="text-center my-5">Place holder for card components</h4>
      </Container>
    </>
  )
}

export default HomePageMain
