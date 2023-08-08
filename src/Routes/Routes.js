import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {StepperScreen} from '../StepperScreen';

import StepperScreen2 from '../pages/StepperScreen2';



function Router(){
return(
    <React.Fragment>
    <Routes>
        <Route path='/' element={<StepperScreen/>}/>
        <Route path='/StepperScreen' element={<StepperScreen2/>}/>
       
    </Routes>
    </React.Fragment>
)
}
export default Router