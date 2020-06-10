import React from 'react';
import logo from '../images/homepagebannerv2.png';
import '../App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="footer">
        <div className="footer-items">ND Piccolos 2020</div>
        <div className="footer-items">About</div>
        <div className="footer-items">Members</div>
        <div className="footer-items">Links</div>
        <div className="footer-items">Contact</div>
      </div>
    </div>
  );
}

export default App;