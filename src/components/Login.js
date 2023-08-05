import "./Login.css"
function LoginCard({Username,header,Password,RememberMe,gotoLogin,forget,buttontitle,SignUp,userMailchanges,UserPasswordChanges}) {
    return (
    <div className="container">
        <div className="cn">
        <div className="mini-container">
        <h1 className="login">{header}</h1>
        <div className="Username">
        <span>{Username}</span>
        <input 
        onChange={userMailchanges}
        type="Username" className="input" placeholder="Username"/>
        </div>
        <div className="Username">
        <span >{Password}</span>
        <input 
        onChange={UserPasswordChanges}
        type="password" className="password" placeholder="Password"/>
        </div>
        <div className="nono">
        <div className="me">
        <input type="checkbox" /> 
        <span className="remember">{RememberMe} </span>
            </div>
        <div className="forget">{forget}</div>
        </div>
        <div className="submit" >
        <button className="Submit" type="Submit" >{buttontitle} </button> 
        </div>
        </div>
       
        </div>
        <div className="Account">
 <p>Don't Have An Account? <span className="sign" onClick={gotoLogin}>{SignUp}</span></p>
 </div>
    </div>

    )

}
export default LoginCard;