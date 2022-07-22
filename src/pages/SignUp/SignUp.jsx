import "./signup.css";
import {auth, provider} from '../../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import 
{
  //BrowserRouter as Router,
 // Routes,
  //Route,
  Link
} from "react-router-dom";
import { useState } from "react";

export default function Register() {
   const [registerEmail, setRegisterEmail] = useState("");
   const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => 
  {
    try
    {const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    console.log(user);}
    catch (error){console.log(error.message)};
  }


  return (
    <div className="register">
    
    <form  className="registerform" onSubmit={register}>
    <span className="registertitle">Register</span>
   {/* <label >First Name</label>
    <input className="registerinput" type="text" placeholder="John"/>
    <label >Last Name</label>
    <input className="registerinput" type="text" placeholder="Smith"/>
    <label >Username</label>
    <input className="registerinput" type="text" placeholder="j_appleseed"/>*/}
    <label >Email Address</label>
    <input className="registerinput" type="email" placeholder="example@jerryfromkenya.space"
     onChange={(event) => {setRegisterEmail(event.target.value)}}/>
    <label >Password</label>
    <input  className="registerinput" type="password" placeholder="Enter your password..."
    onChange={(event) => {setRegisterPassword(event.target.value)}}/>
     <button className="registersignupbutton" type="submit">
    Register
    </button>
    
    </form>
   <button className="loginsignupbutton">
    <Link className="link" to="/login">Sign In</Link>
    </button>
    </div>
  )
}
