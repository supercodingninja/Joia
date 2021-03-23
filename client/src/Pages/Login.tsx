import { Container } from "../LayoutComponents/Grid/Grid"
import {
    Input,
    FormBtnOutline,
    FormBtn,
} from '../components/shared/Form/Form'
import { useRef } from "react";
import { useLogin } from "../utils/auth";

function handleInputOnchange () {
    // function
};

function handleFormClear() {
    // clear form function
};

function unusedHandleFormSubmit() {
    // submit form function
};

const Login = () => {
    const emailRef = useRef<HTMLInputElement>();
    console.log("emailRef = ", emailRef);
    
    const passwordRef = useRef<HTMLInputElement>();
    console.log("passwordRef = ", passwordRef);

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async (e:any) => {
        // This fails and it seems explained here:
        // https://deepscan.io/docs/rules/react-func-component-invalid-ref-prop
        e.preventDefault();
        console.log("you submitted the form so handleSubmit fired off.");

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {

            await login({ email, password });

            // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
            // Fredrick, where do we go after the login page?
            // We worked on the flow of the site, but I forget if we ever actually arrived at the decision.


        } catch(err) {
             // Handle error responses from the API
             if( err.response && err.response.data ) console.log(err.response.data);
        }
    }

    const handleSubmitButtonClick = async () => {
        // Note where this is used in the form inside a FormBtn's onClick handler.
        // It is NOT a form submit event because that is registered as the form element's onSubmit handler
        // hence there is no incoming event and it is impossible to do a .preventDefault which is okay here because it is inaplicable.
        console.log("you clicked on the submit button so handleSubmitButtonClick fired off.");
    }

    return (
        <Container>                
            <h1 className="text-center py-5">Ready to login to sell your artwork?</h1>

            <p className="text-center mb-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

            <div className="container px-3 pb-5">
                <form className="border border-warning py-5 mx-3 my-5 px-5" onSubmit={handleSubmit}>
                    <h5>Email:</h5>
                    <Input ref={emailRef} onChange={handleInputOnchange} placeHolder="enter your email" name="email" />
                    
                    <h5>Password:</h5>
                    <Input ref={passwordRef} onChange={handleInputOnchange} placeholder="qwerty" name="password" />

                    <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>
                
                    <FormBtn onClick={handleSubmitButtonClick}>Register</FormBtn>
                </form>
            </div>
        </Container>
    )
}

export default Login;