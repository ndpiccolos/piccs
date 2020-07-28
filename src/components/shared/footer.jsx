import React, { Component } from 'react';

import { GrInstagram } from 'react-icons/gr';
import { FaFacebookSquare } from 'react-icons/fa'; 
import { FiMail } from 'react-icons/fi'; 

/* this component uses bootstrap's grid - see https://getbootstrap.com/docs/4.0/layout/grid/ */
/* react-icons: https://react-icons.github.io/react-icons/icons?name=fa */

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
            <div className="row">
              <div className="col-md" style={{"padding-bottom": 30}}>
                <div className="footer-header">THE PICCOLOS</div>
                <p><div className="footer-text">We are the piccolos of the Band of the Fighting Irish. Please feel free to contact us if you'd like
                    to get in touch or have any questions for us!</div>
                </p>
              </div>
              <div className="col-md" style={{"padding-bottom": 30}}>
                <h3 className="footer-header">ABOUT US</h3>
                <p><div className="footer-link">About (ADD LINKS)</div>
                <div className="footer-link">Members</div>
                <div className="footer-link">FAQ</div></p>
              </div>
              <div className="col-md" style={{"padding-bottom": 30}}>
                <h3 className="footer-header">LEARN MORE</h3>
                <p><a href="https://nd.edu" className="footer-link">The University of Notre Dame</a>
                <div><a href="https://www.ndband.com/" className="footer-link">ND Band</a></div>
                <div className="footer-text">Email: ndpiccolos@gmail.com</div></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md" style={{"padding-bottom": 30}}>
                <a href="https://www.instagram.com/ndpiccpics/" className="social-link">
                    <GrInstagram size={30}/>
                </a>
                <a href="https://www.facebook.com/NDPiccolos/" className="social-link">
                    <FaFacebookSquare size={30}/>
                </a>
                {/* still need to make this a link... */}
                <a href="https://www.instagram.com/ndpiccpics/" className="social-link">        
                    <FiMail size={30}/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md" style={{"padding-bottom": 30}}>
                <div className="footer-text">©2020 <a href="https://github.com/ndpiccolos/piccs" style={{"color": "black"}}>ndpiccolos</a>. Created with github pages and react.</div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}