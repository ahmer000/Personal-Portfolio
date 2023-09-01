import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

const App =()=>{
const [data, setData]=useState([]);
console.log('sssss',data);
  useEffect(()=>{
         fetch('https://jsonplaceholder.org/comments')
    .then((res) => res.json())
    .then((dar)=>{
      setData(dar)

    })},[]);

    return(
      <>
   <div className="Main">
    
      <div className="mini">
       {
        data.map((item)=>{
          return (<div className="Data">
            <p className="para">
            ID =  {item.id}
            </p>
           
          </div>)
        })
       }
        </div>
 
   </div>
    
      </>
    )
   }   ;
export default App;

