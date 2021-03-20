import { Container } from '../LayoutComponents/Grid/Grid'
import { Input, FormBtnOutline, FormBtn } from '../components/shared/Form/Form'

function handleInputOnchange() {
  // function
}

function handleFormClear() {
  // clear form function
}

function handleFormSubmit() {
  // submit form function
}

const Signup = () => {
  return (
    <Container>
      <h1 className="text-center py-5">
        Ready to sign up to sell your artwork?
      </h1>

      <p className="text-center mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>

      <div className="container px-3 mb-5 pb-5">
        <form className="border border-warning py-5 mx-3 px-5">
          <h5 className="">First Name:</h5>
          <Input onChange={handleInputOnchange} name="firstName" />

          <h5>Last Name:</h5>
          <Input onChange={handleInputOnchange} name="lastName" />

          <h5>Email:</h5>
          <Input onChange={handleInputOnchange} name="email" />

          <h5>Phone:</h5>
          <Input onChange={handleInputOnchange} name="phone" />

          <h5>Password:</h5>
          <Input onChange={handleInputOnchange} name="password" />

          <FormBtnOutline onClick={handleFormClear}>
            Cancel
          </FormBtnOutline>

          <FormBtn onClick={handleFormSubmit}>
            Register
          </FormBtn>
        </form>
      </div>
    </Container>
  )
}

export default Signup
