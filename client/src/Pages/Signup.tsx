import React, {useRef} from 'react';
import {Container} from '../LayoutComponents/Grid/Grid'
import {Input, FormBtnOutline, FormBtn} from '../components/shared/Form/Form'
import {useAuthTokenStore, useIsAuthenticated, useAuthenticatedUser, useLogin, useLogout} from '../utils/auth'

// Ref. https://github.com/supercodingninja/mern-jwt-auth-setup#prerequisites forked from ac524/mern-jwt-auth-setup //
const Signup = () => {
    
    // Set up ref objects (useRef hook) for each input.  Use API Map Directory server/src/routes/api; and use Ref. https://i.stack.imgur.com/fYFze.png //
    function RegistrationForm() {
        
        const CustomTextInput = () => {
            const firstNameRef = useRef();
            const lastNameRef = useRef();
            const emailRef = useRef();
            const phoneRef = useRef();
            const passwordRef = useRef();

            // `useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.`- Ref. https://reactjs.org/docs/hooks-reference.html#useref; and Ref. https://medium.com/trabe/react-useref-hook-b6c9d39e2022 //
            const textInput = useRef(handleInputOnchange);
          
            // `current` points to the mounted text input element; and the focus(); method `sets focus on the specified element, if it can be focused. The focused element is the element which will receive keyboard and similar events by default`- Ref. https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus //
            handleFormSubmit = () => textInput.current.focus(// modal function: alerts user 'Profile is generated.', and redirects user to Profile.tsx 'onClick'. //
            );
        };
    
        // Get the helper login function from the `useLogin` hook. //
        const login = useLogin();

        let handleInputOnchange = async e => {
            // Transfer Data to Profile.tsx //
            // Use const CustomTextInput; here. //

        }
    
        // This is the Submit Form Function, where an alert will display, 'Welcome to <i>Joia</i>! Your profile has been generated!'  Once the user has select 'Continue' (title of modal button), this will clear all form inputs; and redirect user to Profile.tsx  Ref. https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage/506004#506004 //
        let handleFormSubmit = async e => {
            e.preventDefault();
    
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
    
            try {
    
                // Register the user. //
                await api.register({email, password});
    
                // User has been successfully registered, now log them in with the same information. //
                await login({email, password});
    
                
                // USE MODAL, HERE: User has been successfully registered, logged in and added to state. Additional actions will be performed, here, to redirect Profile.tsx, while transferring the data, also.  Use const handleInputOnchange; here. //
                
    
            } catch(err) {
    
                 // Handle error responses from the API. This will include
                 if(err.response && err.response.data) console.log(err.response.data);
                 
            }
        }
    
        // ... //
        return (
            <Container>
                <h1 className='text-center py-5'>
                    Ready to sign up to sell your artwork?
                </h1>
    
                <p className='text-center mt-2 mb-5'>
                    <i>'We're the gem for your Jewel, or Jim!'</i>
                </p>
    
                <div className='container px-3 mb-5 pb-5'>
                    <form name='signupForm' className='border border-warning py-5 mx-3 px-5'>
                        
                        <h5>First Name:</h5>
                        <Input type='button' value='Submit' ref={textInput} onChange={handleInputOnchange} name='firstName'/>
    
                        <h5>Last Name:</h5>
                        <Input type='button' value='Submit' ref={textInput} onChange={handleInputOnchange} name='lastName'/>
    
                        <h5>Email:</h5>
                        <Input type='button' value='Submit' ref={textInput} onChange={handleInputOnchange} name='email'/>
    
                        <h5>Phone:</h5>
                        <Input type='button' value='Submit' ref={textInput} onChange={handleInputOnchange} name='phone'/>
    
                        <h5>Password:</h5>
                        <Input type='button' value='Submit' ref={textInput} onChange={handleInputOnchange} name='password'/>

                        {/* Unamious Group Decision (3:1), this will clear all form inputs; and redirect user to Home.tsx */}
                        <FormBtnOutline id='goHome' onClick={handleFormClear}>
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


    // Function will clear all form input fields; and redirect user to Home.tsx Ref. https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission; Ref. https://stackoverflow.com/questions/1655065/redirecting-to-a-relative-url-in-javascript; Ref. https://www.w3schools.com/jsref/met_form_submit.asp; and Ref. https://www.javatpoint.com/javascript-reset#:~:text=In%20JavaScript%2C%20the%20reset(),does%20not%20return%20any%20value. //
    function handleFormClear() {

        let clearForm = document.getElementsByName('signupForm')[0];

        let userCancels = document.getElementById('goHome').submit();

        clearForm.submit();
        
        clearForm.reset(userCancels);  // Resets all input fields. //
        
        return false;  // This will prevent the page from refreshing. //
    };

    if (handleFormClear) {
        // Redirects user to Home.tsx //
        function redirectToHome() {

            // Redirects user to Home.tsx  "window.location.replace(...) is better than using window.location.href, because replace() does not keep the originating page in the session history..." - see Ref. https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage/506004#506004 //
        
            window.location.replace('/');
        }

        redirectToHome();

    } // Continue executing application.  Omitting the else is like leaving an empty else statement; however, this approach prevents possible error of accidently providing a value the else condition.  Ref. https://stackoverflow.com/questions/6397250/if-else-statement-how-to-say-donothing-or-continue // 

    RegistrationForm();
};

export default Signup;