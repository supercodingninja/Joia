import React, {useState} from 'react';
import {Container} from '../LayoutComponents/Grid/Grid'
import {useLogin} from '../utils/auth';
import {Input, FormBtnOutline, FormBtn} from '../components/Form/Form';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailNpasswordDontMix, setEmailNpasswordDontMix] = useState(false);
    
    const history = useHistory();

    function handleFormClear(e) {
        e.preventDefault();
        history.push('/');
    };

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleFormSubmit = async ( e ) => {
        e.preventDefault();
        console.log(`Alright, Joia, let's, GO!`);

        try {

            await login({ email, password });

            history.push("/account");

        } catch(err) {
            
            // Handle error responses from the API. //
            if(err.response && err.response.data) {
                console.log(err.response.data);

                if(err.response.data.email && err.response.data.email === 'It appears that your email/password may not be correct.  Please try, again.') {
                   setEmailNpasswordDontMix(true);
                }
            }        
        }

        history.push('/account');
    }

    return (
        <Container>               
            <h1 className='text-center py-2' style={{font:'Milkshake'}}>Hey, Joia!</h1>

            <p className='text-center mt-2 mb-2' style={{font:'Mission Script'}}>Time to show the multi-verses how rare you really are.</p>

            <div className='container px-1 mb-1 pb-5'>
                <form onSubmit={handleFormSubmit} name='signupForm' className='py-2 mx-1 px-4' style={{width:'auto'}}>

                <div className='row align-items-center justify-content-center'>
                    <h5>Email:</h5>
                    {/* { && (<h1 style={{color:'red'}}>Try a different email.  That one is taken</h1>)} */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Input 
                    type='text' 
                    onChange={(e)=>setEmail(e.target.value)} 
                    name='email' 
                    style={{width:'auto'}}/>
                </div>
                        
                <div className='row align-items-center justify-content-center'>
                <h5>Password:</h5>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Input 
                type='password' 
                onChange={(e)=>setPassword(e.target.value)} 
                name='password'/>
            </div>

                <FormBtnOutline onClick={handleFormClear}>Cancel</FormBtnOutline>
            
                <FormBtn>Login, and get started!</FormBtn>
            </form>
            </div>
        </Container>
    )
}

export default Login;