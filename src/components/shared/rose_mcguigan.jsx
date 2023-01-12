import React, { Component } from 'react'
import '../../App.css'; 
import Flippy, { FrontSide, BackSide } from 'react-flippy';

// change file name if not using default image
// Ex: import headshot from "../../images/profile_images/OliviaJ.JPG"
import headshot from "../../images/profile_images/Rose.png"; 

var photoStyle = {
    "display": "flex",
    "align-items": "center",
    "text-align": "center",
    "justify-content": "center"
}

export default class About extends Component {
    render() {
      return (
        <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
        >
            <FrontSide style={photoStyle}>
              <img src={headshot} style={{"height": "200px", "width": "200px"}}/>
            </FrontSide>
            <BackSide style={{"font-size": "15px", "font-family": "RalewayLight"}}>
                <div>
                Rose is currently a freshman majoring in math. While she is originally from Seattle, Washington, she now calls Welsh Family Hall home. She has loved being part of the piccolo section and picc dinner is always the highlight of her night!
                </div>
            </BackSide>
        </Flippy>
      )
    }
}