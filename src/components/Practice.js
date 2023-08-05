import React from "react";

function Practice({Home}){
    return(
        <div className="Image">
<img className="img" src={require('../assets/Ima.jpg') }width={700}height={550}></img>
<p>{Home}</p>
</div>

    )
}
export default Practice;