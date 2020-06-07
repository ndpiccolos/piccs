import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
