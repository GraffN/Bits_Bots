import React from 'react';
import '../App.css';
import Navigation from '../components/Navigation';
import CharacterList from '../components/apiFetch';
import Footer from '../components/Footer'

function Store() {
  
  return (
    <div>
      <Navigation />
      <CharacterList/>
      <Footer />
    </div>
  );
}

export default Store;
