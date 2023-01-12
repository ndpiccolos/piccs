import React, { Component } from 'react'
import '../../App.css'; 
import Flippy, { FrontSide, BackSide } from 'react-flippy';

// change file name if not using default image
// Ex: import headshot from "../../images/profile_images/OliviaJ.JPG"
import headshot from "../../images/profile_images/Evan.jpg"; 

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
                Hailing from Chesterfield, Missouri, Evan Cox is a Freshman Aerospace Engineering major living in Keenan Hall. He enjoys reading, mischievous activities with friends, and of course being a member of the greatest of all university marching bands. 
                </div>
            </BackSide>
        </Flippy>
      )
    }
}