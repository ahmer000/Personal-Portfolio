import './App.css';
import React from 'react';
import Router from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
<React.Fragment>
  <BrowserRouter>
<Router/>
  </BrowserRouter>
</React.Fragment>
     
  );
}

export default App;


    
    //     <Signup 
    //     FirstName={'First Name'}
    //     LastName={'Last Name'}
    //     EmailID={'Email ID:'}
    //     Gender={'Gender:'}
    //     Male={'Male'}
    //     Female={'Female'}
    //     Country={'Country:'}
    //     PhoneNumber={'Phone Number:'}
    //     Submit={'Submit'}
    //     Account={'Already have an Account?'}
    //     Signin={'Sign in'}
    //     />
        
      //  <LoginScreen
        // Username={'Username_tooo'}
        // header={'LOGIN'}
        // Password={'Password'}
        // RememberMe={'Remember Me'}
        // forget='Forget Password?'
        // buttontitle={'Login'}
        // SignUp={'Sign Up'}
        // userMailchanges={(e)=>{console.log(
        // e.target.value
        // );}}
        //   UserPasswordChanges={(f)=>{console.log(
        //     f.target.value
        //   );}}
      // /> 
    