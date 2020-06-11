import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, HashRouter, BrowserRouter as Router } from 'react-router-dom';

import { Switch } from 'react-router-dom';

import Home from './components/home.jsx';
import Members from './components/members.jsx';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Links from './components/links.jsx';
import Faq from './components/faq.jsx';
import Contact from './components/contact.jsx';
import Instagram from './components/social/instagram.jsx';
import Facebook from './components/social/facebook.jsx';

const routing = (
  <Router basename={process.env.PUBLIC_URL}>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/members" component={Members} />
      <Route path="/links" component={Links} />
      <Route path="/faq" component={Faq} />
      <Route path="/instagram" component={Instagram} />
      <Route path="/facebook" component={Facebook} />
      <Route path="/contact" component={Contact} />
      </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
