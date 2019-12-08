import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo'></div>
      <div className='footer__pages'>
        <p>Pages:</p>
        <li><Link to='/Store'>Store</Link></li>
        <li><Link to='/checkout'>Cart</Link></li>

      </div>
      <div className='footer__contact'>
        <p>Contact:</p>
        <li>Email: contact@contact.com</li>
        <li>Phone: +47 456 98 345</li>
        <li>Facebook: facebook.com/ourfacebook</li>

      </div>
      
    </div>
  );
}

export default Footer;
