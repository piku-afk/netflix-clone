import React, { useEffect, useState } from 'react';
import './css/Nav.css'
import { image_url } from './api';

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 150) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    })
  }, [show]);
  return(
    <nav className={`nav-bar ${show && 'nav__logo--black'}`}>
      <img className='nav__logo' src={`${image_url}/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`} alt='Netlfix logo' />
    </nav>
  );
}

export default Nav;