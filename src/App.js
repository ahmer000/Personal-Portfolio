import React, { useState } from 'react';
import './App.css'
import Step1 from './components/Step1';
import Step2 from './components/Step3';
import Step3 from './components/Step2';

function App() {
  const [counter, setCounter] = useState(1)

  return (
    <>
      {
        counter == 1 ?
          <Step1 onNext={() => { setCounter(2) }} />
          :
          counter == 2 ?
          <Step3 onNext1={() => { setCounter(3) }} />
          :
            counter == 3 ?
            <Step2 onsubmit={() => { setCounter(1) }} />
          :null
          
      }
    </>
  )
}
export default App;



