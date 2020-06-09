import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/home.jsx';
import Members from './components/members.jsx';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Faq from './components/faq.jsx';
import Contact from './components/contact.jsx';
import Instagram from './components/social/instagram.jsx';
import Facebook from './components/social/facebook.jsx';

const routing = (
  <Router>
    <Navbar/>
    <div>
      <Route exact path="/piccs" component={Home} />
      <Route exact path="/piccs/about" component={About} />
      <Route exact path="/piccs/members" component={Members} />
      <Route exact path="/piccs/faq" component={Faq} />
      <Route exact path="/piccs/instagram" component={Instagram} />
      <Route exact path="/piccs/facebook" component={Facebook} />
      <Route exact path="/piccs/contact" component={Contact} />
    </div>
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
