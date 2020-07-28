import React, { Component } from 'react'
import '../App.css'; 

import Footer from './shared/footer.jsx';
import official from '../images/2019official.jpg';
import fans from '../images/i-JbV3sJQ-X5.jpg'; 
import nd from '../images/i-qWNNdvS-X5.jpg'; 
import jokes from '../images/2019jokes.jpg';

export default class About extends Component {
    render() {
      return (
        <div>
            <div className="container" style={{"padding-top": "40px"}}>
              <div className="row" style={{"min-height": "100%"}}>
                <div className="col-lg about-style" align="left">
                  <h1>Meet the Piccolos.</h1>
                  <p style={{"margin-top": "4%", "text-align": "center"}}>
                  Hi! Welcome to our page. We are the Piccolos of the Band of the Fighting Irish, also often called the band’s most spirited section or the Warriors of the Back. 
                  </p>
                  <p style={{"text-align": "center"}}>
                    The Band of the Fighting Irish is the oldest college band in continuous existence in the United States. The Band dates back to 1846, with their first performance at a graduation ceremony. Back in the 1980s, there were only around 20 members of the piccolo section. Now, we are proud to have over 40 members each year. The spirit of the piccolo section has lived on for many years, with the traditions of our signature cheers passed down each year. The piccolos continue to cheer to every single drum cadence at drummer’s circles and football games and eat every dinner together after practice as they did in the 1900s.
                  </p>
                  <img src={nd} style={{"margin-top": "12%"}} className="about-images"/>
                  <p style={{"margin-top": "12%", "text-align": "center"}}>
                Many of the members of the Piccolo section are involved in not only marching band, but also concert band, hockey band, basketball band, orchestra, and flute choir. We typically have 2-3 section leaders, with about 12 members on the CORE leadership team each year. This past season, we had three members of the Piccolo section as members of the Irish Guard, one of whom is the first Saint Mary’s student to ever be on Irish Guard!
                </p>
                </div>
                <div className="col-lg about-style" align="center">
                  <img src={official} style={{"margin-top": "10%"}} className="about-images"/>
                  <p style={{"margin-top": "4%"}}>
                    The Piccolos are a group of dedicated, supportive and talented students from the University of Notre Dame, Saint Mary’s College, and Holy Cross College. There are students from all 5 academic colleges at Notre Dame, a wide variety of majors from Saint Mary’s College, and even a student in graduate school! The Piccolos contribute to tri-campus community in many ways outside of band, such as through serving as Resident Assistants in the dorms or participating in various volunteer or club activities.
                    </p><p>
                  Along with the rest of the marching band, we often play at halftime shows with famous bands and artists such as Chicago and Arturo Sandoval. We travel to various away games each year, most notably in the past few years at Yankee Stadium in New York City and at the University of Michigan in Ann Arbor. We also travel to a bowl game each year, with recent locations being the Camping World Bowl in Orlando, Florida and the Cotton Bowl in Dallas, Texas.
                  </p>
                  <img src={fans} style={{"margin-top": "6%"}} className="about-images"/>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
      )
    }
  }