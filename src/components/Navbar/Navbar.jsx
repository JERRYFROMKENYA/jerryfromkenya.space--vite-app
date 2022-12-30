import React, {useState, useEffect, useRef} from 'react'
import "./navbar.css"
import { BrowserRouter as Router, Route, Routes ,Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button';


function Navbar() {
 
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButtonHeader = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      document.getElementById('header').innerHTML="JFK.SPC";
    } else {
      setButton(true);
      document.getElementById('header').innerHTML="jerryfromkenya.space";
    }
  };

  useEffect(() => {
    showButtonHeader();
  }, []);


  window.addEventListener('resize', showButtonHeader);


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
         {/* {   <li className='nav-item'>
              <Link to='/blog/' className='nav-links' onClick={closeMobileMenu}>
              BLOG
              </Link>
            </li>} */}
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
           {button && <Button  link="/contact"> <i className="fa-solid fa-user"></i> </Button>}
        </div>
      </nav>
    </>
  );
  

}


export default Navbar;
