import React, {useState} from 'react';
import {Container} from '../LayoutComponents/Grid/Grid'
import {Input, FormBtnOutline, FormBtn} from '../components/shared/Form/Form'
import {useAuthTokenStore, useIsAuthenticated, useAuthenticatedUser, useLogin, useLogout} from '../utils/auth';
import API from '../utils/api';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    function handleFormClear(e) {
        e.preventDefault();
        history.push("/");
    };  

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async (e:any) => {
        // This fails and it seems explained here:
        // https://deepscan.io/docs/rules/react-func-component-invalid-ref-prop
        e.preventDefault();
        console.log("you submitted the form so handleSubmit fired off.");

     

        try {

            await login({ email, password });

        } catch(err) {
             // Handle error responses from the API
             if( err.response && err.response.data ) console.log(err.response.data);
        }
    }

    return (
        <Container>                
            <h1 className="text-center py-5">Ready to login to sell your artwork?</h1>

            <p className="text-center mb-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

            <div className="container px-3 pb-5">
                <form className="border border-warning py-5 mx-3 my-5 px-5" onSubmit={handleSubmit}>
                    <h5>Email:</h5>
                    <Input type='text' onChange={(e)=>setEmail(e.target.value)} name='email'/>
                    
                    <h5>Password:</h5>
                    <Input type='text' onChange={(e)=>setPassword(e.target.value)} name='password'/>

                    <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>
                
                    <FormBtn>Login</FormBtn>
                </form>
            </div>
        </Container>
    )
}

export default Login;