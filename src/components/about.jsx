import React, { Component } from 'react'
import '../App.css'; 

import Footer from './shared/footer.jsx';
import official from '../images/2019official.jpg';
import jokes from '../images/2019jokes.jpg';

export default class About extends Component {
    render() {
      return (
        <div>
            <div className="container" style={{"padding-top": "40px"}}>
              <div className="row" style={{"min-height": "100%"}}>
                <div className="col-lg about-style" align="left">
                  <h1>Meet the Piccolos.</h1>
                  <p style={{"margin-top": "4%"}}>The piccolos... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl condimentum id venenatis a condimentum vitae. Laoreet sit amet cursus sit amet. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Purus non enim praesent elementum facilisis leo. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Nunc sed velit dignissim sodales ut eu sem integer. Mauris commodo quis imperdiet massa. Malesuada fames ac turpis egestas sed tempus. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Rutrum quisque non tellus orci. 
                  </p>
                </div>
                <div className="col-lg" align="center">
                  <img src={official} className="about-images"/>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
      )
    }
  }