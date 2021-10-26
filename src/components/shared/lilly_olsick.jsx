import React, { Component } from 'react'
import '../../App.css'; 
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import headshot from "../../images/LillyO.jpeg";

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
                Hi! My name is Lilly Olsick, and I am a junior majoring in biology with a minor in compassionate care in medicine! I live in Flaherty Hall, and I like working out, hanging out with friends, and visiting the Grotto. My favorite part about marching band is of course trotting out of the tunnel 😤
                </div>
            </BackSide>
        </Flippy>
      )
    }
}