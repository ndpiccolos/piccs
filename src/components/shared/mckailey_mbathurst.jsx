import React, { Component } from 'react'
import '../../App.css'; 
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import headshot from "../../images/McKaileyB.jpg";

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
                McKailey is a senior at Saint Mary's studying Music Education living in Le Mans Hall, originally from Grand Rapids, Michigan. She is a band ambassador and returning member! She loves riding horses, crafting, spending time with family, and, of course, the high energy and spirit of the Piccolo Section!
                </div>
            </BackSide>
        </Flippy>
      )
    }
}