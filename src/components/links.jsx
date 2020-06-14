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
                  className="links-href"
                  cover={<img alt="example" src={OkGo} />}
                  >
                  <Meta title="Piccolos dance with OK Go" description="Watch the 2009 piccolos do the iconic 'Techno' 
                  dance with the band OK Go." />
                </Card>
                </a>
                </div>
                <div className="col-lg">
                  <Card
                  hoverable
                  className="links-href"
                  cover={<img alt="example" src={OkGo} />}
                  >
                  <a href="https://www.youtube.com/watch?v=4wRw9chUmu8" className="links-href">
                  <Meta title="Piccolos dance with OK Go" description="Watch the 2009 piccolos do the iconic 'Techno' 
                  dance with the band OK Go." />
                </a></Card>
                </div>
                <div className="col-lg">
                  <Card
                  hoverable
                  className="links-href"
                  cover={<img alt="example" src={OkGo} />}
                  >
                  <a href="https://www.youtube.com/watch?v=4wRw9chUmu8" className="links-href">
                  <Meta title="Piccolos dance with OK Go" description="Watch the 2009 piccolos do the iconic 'Techno' 
                  dance with the band OK Go." />
                </a></Card>
                </div>
              </div>
            </div>


            <Footer/>
        </div>
      )
    }
  }