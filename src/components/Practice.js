import React from "react";

function Practice({Home}){
    return(
        
        <div className="Image">
            <p>{Home}</p>
<img className="img" src={require('../assets/Ima.jpg') }width={500}height={400}></img>

</div>

    )
}
export default Practice;