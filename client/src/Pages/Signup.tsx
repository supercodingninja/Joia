// import React from 'react';
import { Signup } from 'react-stormpath';

import './Signup.css';
// import {container } from '../LayoutComponents/Grid/Grid'
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

const Signup = () => {
    return (
        <>
  
            <h1 className="text-center">Ready to sign up to sell your artwork?</h1>
            
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        
            <div className="container px-3">
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

                    <FormBtnOutline className="text-center" onClick={handleFormClear}>Cancel</FormBtnOutline>
                
                    <FormBtn className="text-center" onClick={handleFormSubmit}>Register</FormBtn>
                </form>
            </div>
        </>
    )
};


Signup.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
    function writeError(message) {
      res.status(400);
      res.json({ message: message, status: 400 });
      res.end();
    }
  
    function saveAccount () {
      req.user.givenName = req.body.givenName;
      req.user.surname = req.body.surname;
      req.user.email = req.body.email;
  
      req.user.save(function (err) {
        if (err) {
          return writeError(err.userMessage || err.message);
        }
        res.end();
      });
    }
  
    if (req.body.password) {
      var application = req.app.get('stormpathApplication');
  
      application.authenticateAccount({
        username: req.user.username,
        password: req.body.existingPassword
      }, function (err) {
        if (err) {
          return writeError('The existing password that you entered was incorrect.');
        }
  
        req.user.password = req.body.password;
  
        saveAccount();
      });
    } else {
      saveAccount();
    }
  });

export default Signup;