import React, { Component } from 'react'
import '../App.css'; 
import Footer from './shared/footer.jsx';

import { Card } from 'antd';
import OkGo from "../images/ok_go_piccolos.png";
import OneSec from "../images/one_second_2018.png";
import NYC from "../images/nyc_piccs.png";

const { Meta } = Card;

var columnStyle = {
  "padding-bottom": "40px"
}

export default class Links extends Component {
    render() {
      return (
        <div>
            <div className="container" style={{"padding-top": "40px"}}>
              <div className="row">
                <div className="col-md" align="center" style={columnStyle}>
                <a href="https://www.youtube.com/watch?v=4wRw9chUmu8" className="links-href">
                  <Card
                  hoverable
                  cover={<img src={OkGo} />}
                  style={{"width": "270px"}}
                  >
                  <Meta title="Piccolos dance with OK Go" description="Watch the 2009 piccolos do the iconic 'Techno' 
                  dance with the band OK Go." />
                </Card>
                </a>
                </div>
                <div className="col-md" align="center" style={columnStyle}>
                <a href="https://www.youtube.com/watch?v=SgzGGy4GoJc&feature=youtu.be&fbclid=IwAR2C7fu8Sr9EbV7FVLCNrmnPvzidLNmsF00bHcRamJh2agX7wA_wEQBFKzM" className="links-href">
                  <Card
                  hoverable
                  cover={<img src={OneSec} />}
                  style={{"width": "270px"}}
                  >
                  <Meta title="2018 Piccolos" description="One second a day of piccolos during the 2018 season, captured
                  by 2018 section leader Kelly McCabe." />
                </Card>
                </a>
                </div>
                <div className="col-md" align="center" style={columnStyle}>
                <a href="https://www.facebook.com/NotreDameBand/videos/1968307943473525/UzpfSTIxMTAyMDU4MzU4ODY5NTY6MjE0ODg3MDY2NTM1MzgwNg/" className="links-href">
                  <Card
                  hoverable
                  cover={<img src={NYC} />}
                  style={{"width": "270px"}}
                  >
                  <Meta title="ND Band Travels to NYC" description="Highlights from the 2018 Shamrock Series Game at Yankee Stadium
                  in NYC." />
                </Card>
                </a>
                </div>
              </div>
              <div className="row">
              <div className="col-md" align="center" style={columnStyle}>
                <a href="https://www.facebook.com/NotreDameBand/videos/1968307943473525/UzpfSTIxMTAyMDU4MzU4ODY5NTY6MjE0ODg3MDY2NTM1MzgwNg/" className="links-href">
                  <Card
                  hoverable
                  cover={<img src={NYC} />}
                  style={{"width": "270px"}}
                  >
                  <Meta title="ND Band Travels to NYC" description="Highlights from the 2018 Shamrock Series Game at Yankee Stadium
                  in NYC." />
                </Card>
                </a>
                </div>
                <div className="col-md" align="center" style={columnStyle}>
                <a href="https://www.facebook.com/NotreDameBand/videos/1968307943473525/UzpfSTIxMTAyMDU4MzU4ODY5NTY6MjE0ODg3MDY2NTM1MzgwNg/" className="links-href">
                  <Card
                  hoverable
                  cover={<img src={NYC} />}
                  style={{"width": "270px"}}
                  >
                  <Meta title="ND Band Travels to NYC" description="Highlights from the 2018 Shamrock Series Game at Yankee Stadium
                  in NYC." />
                </Card>
                </a>
                </div>
                <div className="col-md" align="center" style={columnStyle}>
                <a href="https://www.facebook.com/NotreDameBand/videos/1968307943473525/UzpfSTIxMTAyMDU4MzU4ODY5NTY6MjE0ODg3MDY2NTM1MzgwNg/" className="links-href">
                  <Card
                  hoverable
                  cover={<img src={NYC} />}
                  style={{"width": "270px"}}
                  >
                  <Meta title="ND Band Travels to NYC" description="Highlights from the 2018 Shamrock Series Game at Yankee Stadium
                  in NYC." />
                </Card>
                </a>
                </div>
              </div>
            </div>


            <Footer/>
        </div>
      )
    }
  }