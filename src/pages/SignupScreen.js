import React from 'react';
import SignupCard from '../components/Signup';
import { useNavigate } from 'react-router-dom';

function SignupScreen (){
    const navigate = useNavigate();
    return(
        <>
        <SignupCard
       FirstName={'First Name'}
           LastName={'Last Name'}
           EmailID={'Email ID:'}
           Gender={'Gender:'}
           Male={'Male'}
           Female={'Female'}
           Country={'Country:'}
           PhoneNumber={'Phone Number:'}
           Submit={'Submit'}
           Account={'Already have an Account?'}
           Signin={'Sign in'}
           gotoLogin={()=>{
            navigate('/')
           }}
      />
        </>
    )
}

export default SignupScreen;