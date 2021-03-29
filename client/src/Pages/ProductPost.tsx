/* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import {
  Input,
  TextArea,
  FormBtn,
  FormBtnOutline,
} from '../components/Form/Form'
import api from '../utils/api'

import { useState } from 'react'
import { useHistory } from 'react-router'
import { useAuthenticatedUser } from '../utils/auth'

const ProductPost = () => {
  const [imagePath, setImagePath] = useState(
    './assets/img/enzo-tommasi-wlxJ4idMTUk-unsplash.jpg'
  )
  const [selectedFile, setSelectedFile] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [artLocation, setArtLocation] = useState('')
  const [imgUpload, setImgUpload] = useState(false)

  const user = useAuthenticatedUser()
  // const history = useHistory()

  // function resetForm() {
  //   let formElement = document.getElementById('formid')
  //   console.log('form: ', formElement)
  //   //formElement.reset();
  // }

  function handleFormClear() {
    // clear form function
  }

  function doNothingOnClick() {
    // if (imgUpload === false) {
    //   return
    // }
  }

  function handleFormSubmit(ev) {
    ev.preventDefault()
    console.log('artlocation = ', artLocation)
    console.log('imagePath = ', imagePath)
    console.log('title =', title)
    console.log('description =', description)
    // console.log('type =', type)
    console.log('category =', category)
    console.log('size =', size)
    console.log('price =', price)
    console.log('user = ', user)

    if (!user) {
      console.log("user isn't set.   Why?????????")
      return
    }

    if (!imgUpload) {
      // the user screwed up.  That user being a demo user since again, an IRL
      // scenario would prevent the submit button from even being enabled until
      // all the requisite data was filled in.  So here, i'm just failing
      // silently and leaving a log.
      console.log('Not all the stuff was filled in.  You fail.')
      alert('Please upload an artwork image')
      return
    }

    api.postArt(
      artLocation,
      imagePath,
      title,
      description,
      category,
      size,
      price,
      user._id
    )

    // clearform after submitting
    // window.location.href = '/post'

    setTitle('')  
    // const [description, setDescription] = useState('')
    // const [type, setType] = useState('')
    // const [category, setCategory] = useState('')
    // const [size, setSize] = useState('')
    // const [price, setPrice] = useState('')
    // const [artLocation, setArtLocation] = useState('')
    // const [imgUpload, setImgUpload] = useState(false)
  }

  async function onFileUpload() {
    if (!selectedFile) {
      console.log('file upload was attemped when no file has been selected yet')
      return
    }

    // Create an object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append(
      'myImage',
      selectedFile,
      selectedFile.name // lint complains on this line that selectedFile is possibly undefined.  I beg to differ - look at the first line of this function
    )

    // Details of the uploaded file
    console.log(selectedFile)

    let uploadPost = await api.axios.post('api/utils/imageUpload', formData)

    console.log('It was uploaded to:', uploadPost.data.uploadedTo)

    setImagePath(uploadPost.data.uploadedTo)

    setImgUpload(true)
    console.log(imgUpload)
  }

  function onFileChange(event) {
    setSelectedFile(event.target.files[0])
  }

  return (
    <Container py="-5">
      <div className="container">
        <h1 className="text-center"> Artworks Information </h1>
        <Row py="-5">
          <Col size="md-6 sm-12">
            <img
              className="img-fluid pr-4 mt-3"
              src={
                imagePath ? imagePath : './assets/img/placeholder-portrait.png'
              }
            />
            <div>
              <input type="file" onChange={onFileChange} />
              <button className="btn btn-warning mt-2" onClick={onFileUpload}>
                Upload!
              </button>
            </div>
          </Col>

          <Col size="md-6 sm-12">
            <form id="formid" onSubmit={handleFormSubmit}>
              <h5>Artwork title</h5>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                placeholder="Artwork title"
                required
              />

              <h5>Description</h5>
              <TextArea
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                placeholder="Description"
                required
              />

              <h5>Category</h5>
              <Input
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                placeholder="Select Category"
                required
              />

              <h5>Size</h5>
              <Input
                onChange={(e) => setSize(e.target.value)}
                name="size"
                required
              />

              <h5>Price</h5>
              <Input
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                required
              />

              <h5>Location</h5>
              <Input
                onChange={(e) => setArtLocation(e.target.value)}
                name="location"
                placeholder="State Name"
                required
              />

              <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>

              {/* <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          /> */}
              <FormBtn onClick={doNothingOnClick}>Submit</FormBtn>
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default ProductPost

// !artLocation ||
//       !imagePath ||
//       !title ||
//       !description ||
//       !type ||
//       !category ||
//       !size ||
//       !price ||
