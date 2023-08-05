import { useNavigate } from "react-router-dom";
import LoginCard from "../components/Login";
function LoginScreen(){
    const navigate = useNavigate();
    return(
        <>
        <LoginCard 
         Username={'Username'}
         header={'LOGIN'}
         Password={'Password'}
         RememberMe={'Remember Me'}
         forget='Forget Password?'
         buttontitle={'Login'}
         SignUp={'Sign Up'}
         userMailchanges={(e)=>{console.log(
         e.target.value
         );}}
        UserPasswordChanges={(f)=>{console.log(
             f.target.value
           );}}
           gotoLogin={()=>{
            navigate('/signUp')
           }}
        />
        </>
    )
}

export default LoginScreen