import React from 'react';
import logo from '../images/super-narrow-home-banner-6.png';
import { Grid } from 'react-bootstrap';
import Footer from './shared/footer.jsx';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="home-banner"/>
      </header>
      <Footer/>
    
    </div>
  );
}

export default App;