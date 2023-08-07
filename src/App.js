import React,{ useState } from 'react';
import './App.css';
// import React, { useState } from 'react';

         
function App() {
 const [isOn ,setIsOn]= useState(true);

 return (
<>
<p>{isOn? 'on':'off'}</p>
<img  className="img"src={isOn? require('./assets/on.jpg')
:require('./assets/off.jpg') }
width={500}height={400}></img> <br/>
<button    
onClick={() =>setIsOn(!isOn)}>
  Click me
</button>
</>

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
    