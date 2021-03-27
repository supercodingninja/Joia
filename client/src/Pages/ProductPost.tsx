/* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import {
  Input,
  TextArea,
  FormBtn,
  FormBtnOutline,
} from '../components/Form/Form'
import api from "../utils/api";

import { useState } from 'react'


const ProductPost = () => {

  let [imagePath, setImagePath] = useState("./assets/img/enzo-tommasi-wlxJ4idMTUk-unsplash.jpg")
  let [selectedFile, setSelectedFile] = useState()


  function handleInputChange() {
    // const { name, value } = event.target;
    // setFormObject({...formObject, [name]: value})
  }

  function handleFormClear() {
    // clear form function
  }

  function handleFormSubmit() {
    // submit form function
    // include display aler
    // clearform after submitting
  }

  async function onFileUpload() {

    if (!selectedFile) {
      console.log("file upload was attemped when no file has been selected yet");
      return;
    }
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myImage",
      selectedFile,
      selectedFile.name  // lint complains on this line that selectedFile is possibly undefined.  I beg to differ - look at line 37
    );

    // Details of the uploaded file
    console.log(selectedFile);

    let uploadPost = await api.axios.post("api/utils/imageUpload", formData);

    console.log("It was uploaded to:", uploadPost.data.uploadedTo);

    setImagePath(uploadPost.data.uploadedTo);

  };

  function onFileChange(event) {
    setSelectedFile(event.target.files[0]);
  };



  return (

    <Container py="-5">
      <div className="container">
        <h1 className="text-center"> Artworks Information </h1>
        <Row py="-5">
          <Col size="md-6 sm-12">
            <img
              className="img-fluid pr-4 mt-3"
              src={imagePath}
            />
            <div>
              <input type="file" onChange={onFileChange} />
              <button onClick={onFileUpload}>
                Upload!
            </button>
            </div>

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
              <Input onChange={handleInputChange} name="location"></Input>

              <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>

              <FormBtn onClick={handleFormSubmit}>Submit</FormBtn>
            </form>
          </Col>
        </Row>
      </div>
    </Container>

  )
}

export default ProductPost
