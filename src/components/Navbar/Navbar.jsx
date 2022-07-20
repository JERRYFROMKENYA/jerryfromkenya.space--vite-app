import React, {useState, useEffect, useRef} from 'react'
import "./navbar.css"
import { BrowserRouter as Router, Route, Routes ,Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button';
import {signOut} from 'firebase/auth';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const header = useRef("JFK.SPC");
  
  

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
  let isAuth = localStorage.getItem('isAuth');
  let navigate = useNavigate();
  const signUserOut = () =>{
    signOut(auth).then(() =>{
      localStorage.clear();
      isAuth = false;
      navigate("/login")
    }
    )
  }


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div id="header"> {/*PROPRER HEADER*/} </div>
            <i className='fab fa-typo3' />
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
            <li className='nav-item'>
              <Link
                to='/shop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SHOP
              </Link>
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
           {button && <Button  link={isAuth ?'/settings' : '/login'}> {isAuth ? <i className="fa-solid fa-user-gear"></i> : <i className="fa-solid fa-user"></i>} </Button>}
        </div>
      </nav>
    </>
  );
  

}


export default Navbar;
