import React, { Component } from 'react'
import '../App.css'; 
import Footer from './shared/footer.jsx';

export default class Faq extends Component {
    render() {
      return (
        <div>
            <div className="faq-style">
              <h1>Questions? Start Here!</h1>
              <div className="faq-questions">
                <h2>Who are the piccolos?</h2>
                <div className="faq-answers">
                  <p>The piccolos of the Notre Dame Marching Band were 45 members strong in the 2019 season. See the about tab for more info!</p>
                </div>
                <h2>What is a piccolo?</h2>
                <div className="faq-answers">
                  <p>A piccolo is a small flute! Most of us started on the flute, and some play the oboe or other instruments. </p>
                </div>
                <h2>How can I join?</h2>
                <div className="faq-answers">
                  <p>Auditions for the band are in August before the start of the fall semester during band camp. Band camp usually lasts around 5 days and includes
                    both a marching and playing audition. Things will look a bit different this year but we are looking forward to the season nonetheless!
                    See <a href="https://www.ndband.com/join-the-band.cfm">the band website</a> for more info on signing up to audition.</p>
                </div>
                <h2>How often does the band practice?</h2>
                <div className="faq-answers">
                  <p>In the fall, we practice from 6:30-8pm on Mondays-Thursdays, and on game weekends we practice on Fridays and Saturdays before the game.</p>
                </div>
                <h2>I've never marched before. Should I audition?</h2>
                <div className="faq-answers">
                  <p>Absolutely! Many people in the band never marched before joining, it is much more common than you may think. Band camp and the audition process places
                    a much higher priority on effort and attitude than it does on past experience. 
                  </p>
                </div>
                <h2>What are some piccolo traditions?</h2>
                <div className="faq-answers">
                  <p>The piccolos have a ton of awesome traditions but some of our favorite are our iconic dances during midnight drummer
                    circle and after our gameday Concert on the Steps, as well as playing a piccolo arrangement of the Rudy theme on game day. 
                  </p>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
      )
    }
  }