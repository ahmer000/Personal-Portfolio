import React from 'react';
import {Routes,Route} from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import SignupScreen from '../pages/SignupScreen';


function Router(){
return(
    <React.Fragment>
    <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/signUp' element={<SignupScreen/>}/>
    </Routes>
    </React.Fragment>
)
}
export default Router