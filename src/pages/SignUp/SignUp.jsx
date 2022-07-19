import "./signup.css";
import 
{
  //BrowserRouter as Router,
 // Routes,
  //Route,
  Link
} from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
    
    <form  className="registerform">
    <span className="registertitle">Register</span>
    <label >First Name</label>
    <input className="registerinput" type="text" placeholder="John"/>
    <label >Last Name</label>
    <input className="registerinput" type="text" placeholder="Smith"/>
    <label >Username</label>
    <input className="registerinput" type="text" placeholder="j_appleseed"/>
    <label >Email Address</label>
    <input className="registerinput" type="email" placeholder="example@jerryfromkenya.space"/>
    <label >Password</label>
    <input  className="registerinput" type="password" placeholder="Enter your password..."/>
     <button className="registersignupbutton">
    Register
    </button>
    <button className="loginsignupbutton">
    <Link className="link" to="/login">LOGIN</Link>
    </button>
    </form>
   
    </div>
  )
}
