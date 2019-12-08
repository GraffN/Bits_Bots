import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <nav className="navigation">
      
      <Link to='/store'>
      <div className='logo__wrapper'>
        <div className="logo logo__navigation" alt='bits&bots'></div>
      </div>
      </Link>
      
        <div className="link">
            <Link to="./Store">
              <p className='link__title'>Shop</p>
            </Link>
            <Link to="./checkout">
              <p className='link__title'>Cart</p>            
            </Link>
            <Link to='./' >
              <p className='link__title link__title--logout'>Logout</p>
            </Link>
        </div>
          
    </nav>
  );
}

export default Navigation;
