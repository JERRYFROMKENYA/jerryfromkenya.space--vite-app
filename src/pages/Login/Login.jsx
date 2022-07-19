import "./login.css";
import 
{
  //BrowserRouter as Router,
  //Routes,
  //Route,
  Link
} from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
    
    <form  className="loginform">
    <span className="logintitle">LOGIN</span>
    <label >Email Address</label>
    <input className="logininput" type="email" placeholder="Enter your Email..."/>
    <label >Password</label>
    <input  className="logininput" type="password" placeholder="Enter your password..."/>
     <button className="loginbutton">
    Login
    </button> 
    <button className="registerbutton">
    <Link className="link" to="/signup">Register</Link>
    </button>
    </form>
   
    </div>
  )
}