import React, {useState, useEffect, useRef} from 'react'
import "./navbar.css"
import { BrowserRouter as Router, Route, Routes ,Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button';
import {signOut,onAuthStateChanged} from 'firebase/auth';
import  { auth } from '../../firebase-config'

function Navbar({ user }) {
  {/*const isAuth = props.isAuth*/}
  


{/*
console.log("Auth State is:"+" "+"props.isAuth")*/}
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const showHeader = () => {
    if (window.innerWidth <= 960) {
      document.getElementById('header').innerHTML="JFK.SPC";
    } else {
      document.getElementById('header').innerHTML="jerryfromkenya.space";
    }
  };
   
  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    showHeader();
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener('resize', showHeader);
  
  const navigate = useNavigate();//use navigation the react hook(react-router-dom);---
  const signUserOut = () =>
  {
    signOut(auth).then(() => 
    {
      localStorage.clear();//clearing storage
      navigate("/");//setting navigation
    })
  }
 


  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div id="header"> {/*PROPRER HEADER*/} </div>
            
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blog/' className='nav-links' onClick={closeMobileMenu}>
              BLOG
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PORTFOLIO
              </Link>
            </li>
            {/*<li className='nav-item'>
              <Link
                to='/shop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SHOP
              </Link>
            </li>*/}<li className='nav-item'>
              {user && <Link
                to='/login'
                className='nav-links'
                onClick={signUserOut}
              >
                SIGN OUT
              </Link>}
            </li>
            <li>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-user"></i>
              </Link>
              
            </li>
            
          </ul>
           {button && <Button  link={user ?'/settings' : '/login'}> {user ? <i className="fa-solid fa-user-gear">{/*user?.email*/}</i> : <i className="fa-solid fa-user"></i>} </Button>}
        </div>
      </nav>
    </>
  );
  

}


export default Navbar;
