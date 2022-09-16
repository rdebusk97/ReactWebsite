import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button'

function Navbar() {
  const [click , setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  RYAN D<i class="fa-regular fa-code-merge"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                      HOME
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                      RÉSUMÉ
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                      PROJECTS
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>TEST</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar
