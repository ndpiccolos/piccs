import React, { Component } from 'react'
import '../../App.css'; 
import Footer from '../shared/footer.jsx';
import { FacebookProvider, Like, EmbeddedPost } from 'react-facebook';

var columnStyle = {
  "padding-bottom": "40px"
}

export default class Faq extends Component {
    render() {
      return (
        <div>
          <div className="text-container">
            <h1>Facebook</h1>
            <p>Like our facebook page <a href="https://www.facebook.com/NDPiccolos/">Notre Dame Piccolos</a> to keep up with the latest picc news!</p>
          </div>
          <div className="container" style={{"padding-top": "40px"}}>
            <div className="row">
              <div className="col-lg" align="center" style={columnStyle}>
                <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNotreDameBand%2Fvideos%2F253732865830320%2F&show_text=1&width=560" style={{"border":"none", "overflow":"hidden", "width": "560px", "height": "411px"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
              </div>
              <div className="col-lg" align="center" style={columnStyle}> 
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNDPiccolos%2Fposts%2F2396768033897400&width=500" style={{"border":"none", "overflow":"hidden", "width": "500px", "height": "651px"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      )
    }
  }