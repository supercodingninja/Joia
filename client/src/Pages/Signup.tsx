import { Container } from '../LayoutComponents/Grid/Grid'
import { Input, FormBtnOutline, FormBtn } from '../components/shared/Form/Form'

const Signup = () => {
    // Set up ref objects (useRef hook) for each input.  Use API Map Directory server/src/routes/api; and use Ref. https://i.stack.imgur.com/fYFze.png //

    function RegistrationForm() {
        const firstNameRef = useRef();
        const lastNameRef = useRef();
        const emailRef = useRef();
        const phoneRef = useRef();
        const passwordRef = useRef();
    
        // Get the helper login function from the `useLogin` hook. //
        const login = useLogin();

        const handleInputOnchange = async e => {
            // Transfer Data to Profile.tsx //
        }

        // Unamious (3:1) Group Decision: funtion will clear all form input fields; and redirect user to Home.tsx //
        function handleFormClear() {
            // ... //
        };
    
        // This is the Submit Form Function, where an alert will display, "Welcome to <i>Joia</i>! Your profile has been generated!"  Once the user has select "Continue" (title of modal button), this will clear all form inputs; and redirect user to Profile.tsx //
        const handleFormSubmit = async e => {
            e.preventDefault();
    
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
    
            try {
    
                // Register the user. //
                await api.register({ email, password });
    
                // User has been successfully registered, now log them in with the same information. //
                await login({ email, password });
    
                
                // USE MODAL, HERE: User has been successfully registered, logged in and added to state. Additional actions will be performed, here, to redirect Profile.tsx, while transferring the data, also.  Use const handleInputOnchange; here. //
                
    
            } catch(err) {
    
                 // Handle error responses from the API. This will include
                 if( err.response && err.response.data ) console.log(err.response.data);
                 
            }
        }
    
        return (
            <Container>
                <h1 className='text-center py-5'>
                    Ready to sign up to sell your artwork?
                </h1>
    
                <p className='text-center mt-2 mb-5'>
                    <i>"We're the gem for your Jewel, or Jim!"</i>
                </p>
    
                <div className='container px-3 mb-5 pb-5'>
                    <form className='border border-warning py-5 mx-3 px-5'>
                        
                        <h5>First Name:</h5>
                        <Input onChange={handleInputOnchange} name='firstName' />
    
                        <h5>Last Name:</h5>
                        <Input onChange={handleInputOnchange} name='lastName' />
    
                        <h5>Email:</h5>
                        <Input onChange={handleInputOnchange} name='email' />
    
                        <h5>Phone:</h5>
                        <Input onChange={handleInputOnchange} name='phone' />
    
                        <h5>Password:</h5>
                        <Input onChange={handleInputOnchange} name='password' />

                        {/* Unamious Group Decision (3:1), this will clear all form inputs; and redirect user to Home.tsx */}
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

    RegistrationForm();
};

export default Signup;