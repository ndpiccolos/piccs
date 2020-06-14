import React, { Component } from 'react'
import '../App.css'; 
import Footer from './shared/footer.jsx';
import FlippingCard from './shared/flipping-card.jsx';

export default class Members extends Component {
    render() {
      return (
        <div>
          <div className="members-text">
            <h1>About our members:</h1>
            <p>The piccolos were 46 members strong in the 2019 season and while we will miss our seniors greatly, 
              we are looking forward to welcoming new members into our family! 
              Click on each photo to learn more about us!</p>
          </div>
            <div className="container">
              <div className="row">
                <div className="col-lg">
                  <FlippingCard/>
                  <div className="members-caption">
                    <div>Lauren Bakke</div>
                    <div>Senior</div>
                    <div>Section Leader</div>
                  </div>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                  <div className="members-caption">
                    <div>Lauren Bakke</div>
                    <div>Junior</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                  <div className="members-caption">
                    <div>Lauren Bakke</div>
                    <div>Sophomore</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                  <div className="members-caption">
                    <div>Lauren Bakke</div>
                    <div>First Year Student</div>
                    <div>New Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <FlippingCard/>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <FlippingCard/>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                </div>
                <div className="col-lg">
                  <FlippingCard/>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
      )
    }
  }