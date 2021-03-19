/* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import {
  Input,
  TextArea,
  FormBtn,
  FormBtnOutline,
} from '../components/shared/Form/Form'

function handleInputChange() {
  // const { name, value } = event.target;
  // setFormObject({...formObject, [name]: value})
}

function handleFormClear() {
  // clear form function
}

const ProductPost = () => {
  return (
    <Container py="-5">
      <div className="container">
        <h1 className="text-center"> Artworks Information </h1>
        <Row py="-5">
          <Col size="md-6 sm-12">
            <img
              className="img-fluid pr-4 mt-3"
              src="./assets/img/enzo-tommasi-wlxJ4idMTUk-unsplash.jpg"
            />
          </Col>

          <Col size="md-6 sm-12">
            <form>
              <h5>Artwork title</h5>
              <Input
                onChange={handleInputChange}
                name="title"
                placeHolder="Artwork title"
              />

              <h5>Description</h5>
              <TextArea
                onChange={handleInputChange}
                name="description"
                placeHolder="Description"
              />

              <h5>Type</h5>
              <Input
                onChange={handleInputChange}
                name="type"
                placeHolder="Type"
              />

              <h5>Category</h5>
              <Input
                onChange={handleInputChange}
                name="category"
                placeHolder="Select Category"
              />

              <h5>Size</h5>
              <Input onChange={handleInputChange} name="size" />

              <h5>Price</h5>
              <Input onChange={handleInputChange} name="price" />

              <h5>Location</h5>
              <Input
                onChange={handleInputChange}
                name="location"
                placeHolder="Select location"
              />

              <h5>Artist Name</h5>
              <Input onChange={handleInputChange} name="location" />

              <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>

              <FormBtn onClick={handleFormClear}>Submit</FormBtn>
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default ProductPost
