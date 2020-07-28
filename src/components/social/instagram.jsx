import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import '../../App.css'; 
import Script from 'react-load-script';
import Footer from '../shared/footer.jsx';
import InstagramEmbed from 'react-instagram-embed';

var columnStyle = {
  "padding-bottom": "40px"
}

// let createdFeed = InstagramFeed({
//     'username': 'instagram',
//     'container': document.getElementById("instagram-feed1"),
//     'display_profile': true,
//     'display_biography': true,
//     'display_gallery': true,
//     'callback': null,
//     'styling': true,
//     'items': 8,
//     'items_per_row': 4,
//     'margin': 1 
// });

export default class Instagram extends Component {
    render() {
      return (
        <div>
        <div>
        <div className="text-container">
            <h1>Instagram</h1>
            <p>Follow us on instagram <a href="https://instagram.com/ndpiccpics">@ndpiccpics</a> to see more photos and learn more about the piccs!</p>
          </div>
          <div className="container" style={{"padding-top": "40px"}}>
            <div className="row">
              <div className="col-lg" align="center" style={columnStyle}>
                <InstagramEmbed
                  url='https://www.instagram.com/p/B60iEtiplcC/'
                  maxWidth={50}
                  hideCaption={false}
                  containerTagName='div'
                  protocol=''
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </div>
              <div className="col-lg" align="center" style={columnStyle}>
                <InstagramEmbed
                  url='https://www.instagram.com/p/B6Byif6J4q6/'
                  maxWidth={50}
                  hideCaption={false}
                  containerTagName='div'
                  protocol=''
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </div>
              <div className="col-lg" align="center" style={columnStyle}>
                <InstagramEmbed
                  url='https://www.instagram.com/p/B5BRo1DpqRL/'
                  maxWidth={300}
                  hideCaption={false}
                  containerTagName='div'
                  protocol=''
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </div>
              </div>
              </div>
            <Footer/>
            {/* <div>{{createdFeed}}</div> */}
        </div>        
        </div>
      )
    }

    // handleScriptCreate() {
    //     this.setState({ scriptLoaded: false })
    //   }
      
    //   handleScriptError() {
    //     this.setState({ scriptError: true })
    //   }
      
    //   handleScriptLoad() {
    //     this.setState({ scriptLoaded: true })
    //   }
  }