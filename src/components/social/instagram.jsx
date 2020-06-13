import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import '../../App.css'; 
import Script from 'react-load-script';
import Footer from '../shared/footer.jsx';


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
            <div className="container-w1">Coming soon: instagram feed page</div>
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