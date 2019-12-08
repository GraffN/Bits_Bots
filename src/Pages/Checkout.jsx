import React from 'react';
import '../App.css';
import Navigation from '../components/Navigation';
import Cart from '../components/shopcart';
import Footer from '../components/Footer'

function Checkout() {
  


  return (
      <>
    <div>
      <Navigation />
    </div>
    <div>
        <Cart/>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default Checkout;
