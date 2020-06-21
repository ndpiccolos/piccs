import React, { Component } from 'react'
import '../App.css'; 
import Footer from './shared/footer.jsx';

import { Card } from 'antd';
import OkGo from "../images/ok_go_piccolos.png";

const { Meta } = Card;

export default class Links extends Component {
    render() {
      return (
        <div>
            <div className="container" style={{"padding-top": "40px"}}>
              <div className="row">
                <div className="col-lg">
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
                <div className="col-lg">
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
                <div className="col-lg">
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
              </div>
            </div>


            <Footer/>
        </div>
      )
    }
  }