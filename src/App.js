import logo from './logo.svg';

import './App.css';
import LoginScreen from './components/Login';




function App() {
  return (
    <div className="css">
      <LoginScreen
        Username={'Username_tooo'}
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
      />
    </div>
   
    
  );
}
export default App;
