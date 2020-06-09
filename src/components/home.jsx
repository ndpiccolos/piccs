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
    </div>
  );
}

export default App;