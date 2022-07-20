import "./login.css";
import {auth, provider} from '../../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import 
{
  //BrowserRouter as Router,
  //Routes,
  //Route,
  Link
} from "react-router-dom";

export default function Login({setIsAuth}) {

  let navigate = useNavigate();

  const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/');


    })

  };

  return (
    <div className="login">
    <button className="registerbutton" onClick={signInWithGoogle}> SIGN IN WITH <i class="fa-brands fa-google"></i></button>
    
    <form  className="loginform">
    <span className="logintitle">LOGIN</span>
    <label >Email Address</label>
    <input className="logininput" type="email" placeholder="Enter your Email..."/>
    <label >Password</label>
    <input  className="logininput" type="password" placeholder="Enter your password..."/>
     <button className="loginbutton">
    Login
    </button> 
   
    </form>
    <button className="registerbutton">
    <Link className="link" to="/signup">Register</Link>
    </button>
    </div>
  )
}