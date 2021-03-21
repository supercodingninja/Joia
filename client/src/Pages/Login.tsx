import { Container } from "../LayoutComponents/Grid/Grid"
import {
    Input,
    FormBtnOutline,
    FormBtn,
} from '../components/shared/Form/Form'

function handleInputOnchange () {
    // function
};

function handleFormClear() {
    // clear form function
};

function handleFormSubmit() {
    // submit form function
};

const Login = () => {
    return (
        <Container>                
            <h1 className="text-center py-5">Ready to login to sell your artwork?</h1>

            <p className="text-center mb-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

            <div className="container px-3 pb-5">
                <form className="border border-warning py-5 mx-3 my-5 px-5">
                    <h5>Email:</h5>
                    <Input onChange={handleInputOnchange} name="email" />
                    
                    <h5>Password:</h5>
                    <Input onChange={handleInputOnchange} name="password" />

                    <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>
                
                    <FormBtn onClick={handleFormSubmit}>Register</FormBtn>
                </form>
            </div>
        </Container>
    )
}

export default Login;