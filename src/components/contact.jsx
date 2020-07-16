import React, { Component } from 'react'
import '../App.css'; 
import Footer from './shared/footer.jsx';

import { Statistic } from 'antd';

export default class Contact extends Component {
    render() {
      return (
        <div>
          <div className="faq-style">
            <h1>Contact Us</h1>
          <div className="react-icons-box">
          <p>Please feel free to reach out with any questions about the piccolos or if you're an alumni you'd like to get in touch!</p>
              <div className="contact-stats">
              <p>email: ndpiccolos@gmail.com</p>
              </div>
              <div className="contact-stats">
              <a href="https://github.com/lbakke">
                <p>instagram: ndpiccpics</p>
              </a>
              </div>
              <div className="contact-stats">
              <a href="https://www.linkedin.com/in/lauren-b-aa4b84113/">
                <p>facebook: ND Piccolo</p>
                <Statistic title="twitter" style={{"font-family": "RalewayLight !important"}}value={"laurenjbakke"} />
              </a>
              </div>
              <div className="code-stats">
              <p>The code for this site can be found on <a href="https://github.com/ndpiccolos/piccs">github</a> and is maintained by 
              <a href="https://lbakke.github.io"> Lauren Bakke</a>, a 2020 section leader.</p>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      )
    }
  }