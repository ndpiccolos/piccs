import React, { Component } from 'react'
import '../App.css'; 

import Footer from './shared/footer.jsx';
import FlippingCard from './shared/flipping-card.jsx';

import Lauren from './shared/lauren_bakke.jsx'; 
import Malia from './shared/malia_marshall.jsx'; 
import Megan from './shared/megan_mccabe.jsx'; 
import Mairead from './shared/mairead_dillon.jsx'; 
import Erin from './shared/erin_glendon.jsx'; 
import Sarah from './shared/sarah_holtz.jsx'; 
import Shannon from './shared/shannon_may.jsx'; 
import Lily from './shared/lily_rodriguez.jsx'; 
import Chloe from './shared/chloe_spang.jsx'; 
import Julaine from './shared/julaine_zenk.jsx'; 

import Moira from './shared/moira_bartlett.jsx'; 
import Alena from './shared/alena_coleman.jsx'; 
import Anna from './shared/anna_quast.jsx'; 
import Ella from './shared/ella_wisniewski.jsx'; 
import McKailey from './shared/mckailey_mbathurst.jsx'; 
import Searra from './shared/searra_bell.jsx'; 
import Madi from './shared/madi_itzel.jsx'; 
import Olivia from './shared/olivia_krumwiede.jsx'; 
import Michael from './shared/michael_lee.jsx'; 
import Kiera from './shared/kiera_mallinson.jsx'; 
import Meara from './shared/meara_mahoney.jsx'; 
import Grace from './shared/grace_schiefelbein.jsx'; 
import Elizabeth from './shared/elizabeth_zaczyk.jsx'; 

import Angela from './shared/angela_betz.jsx'; 
import Syd from './shared/syd_brooks.jsx'; 
import Camille from './shared/camille_knott.jsx'; 
import OliviaJ from './shared/olivia_johnson.jsx'; 
import Hana from './shared/hana_larkins.jsx'; 
import Sophia from './shared/sophia_michetti.jsx'; 
import Sara from './shared/sara_nelson.jsx'; 
import Lilly from './shared/lilly_olsick.jsx'; 

import { Divider } from 'antd';
import 'antd/dist/antd.css';

export default class Members extends Component {
    render() {
      return (
        <div>
          <div className="text-container">
            <h1>About our members:</h1>
            <p>The piccolos were 46 members strong in the 2019 season and while we will miss our seniors greatly, 
              we are looking forward to welcoming new members into our family! 
              Click on each photo to learn more about us!</p>
          </div>
            <div className="container">
            <div className="members-divider-text"><Divider orientation="right">Seniors and Graduate Students</Divider></div>
              <div className="row">
                <div className="col-lg">
                  <Lauren/>
                  <div className="members-caption">
                    <div>Lauren Bakke</div>
                    <div>Section Leader</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Malia/>
                  <div className="members-caption">
                    <div>Malia Marshall</div>
                    <div>Section Leader</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Megan/>
                  <div className="members-caption">
                    <div>Megan McCabe</div>
                    <div>Section Leader</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Mairead/>
                  <div className="members-caption">
                    <div>Mairead Dillon</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Erin/>
                  <div className="members-caption">
                    <div>Erin Glendon</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Sarah/>
                  <div className="members-caption">
                    <div>Sarah Holtz</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Shannon/>
                  <div className="members-caption">
                    <div>Shannon May</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Lily/>
                  <div className="members-caption">
                    <div>Lily Rodriguez</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Chloe/>
                  <div className="members-caption">
                    <div>Chloe Spang</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Julaine/>
                  <div className="members-caption">
                    <div>Julaine Zenk</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                </div>
                <div className="col-lg">
                </div>
              </div>
              <div className="text-container"><Divider orientation="right">Juniors</Divider></div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Moira/>
                  <div className="members-caption">
                    <div>Moira Bartlett</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Alena/>
                  <div className="members-caption">
                    <div>Alena Coleman</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Anna/>
                  <div className="members-caption">
                    <div>Anna Quast</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Ella/>
                  <div className="members-caption">
                    <div>Ella Wisniewski</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <McKailey/>
                  <div className="members-caption">
                    <div>McKailey Bathurst</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Searra/>
                  <div className="members-caption">
                    <div>Searra Bell</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Madi/>
                  <div className="members-caption">
                    <div>Madi Itzel</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Olivia/>
                  <div className="members-caption">
                    <div>Olivia Krumwiede</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Michael/>
                  <div className="members-caption">
                    <div>Michael Lee</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Meara/>
                  <div className="members-caption">
                    <div>Meara Mahoney</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Kiera/>
                  <div className="members-caption">
                    <div>Kiera Mallinson</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Grace/>
                  <div className="members-caption">
                    <div>Grace Shiefelbein</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Elizabeth/>
                  <div className="members-caption">
                    <div>Elizabeth Zaczyk</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
                </div>
              <div className="text-container"><Divider orientation="right">Sophomores</Divider></div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Angela/>
                  <div className="members-caption">
                    <div>Angela Betz</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Syd/>
                  <div className="members-caption">
                    <div>Syd Brooks</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Camille/>
                  <div className="members-caption">
                    <div>Camille Knott</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <OliviaJ/>
                  <div className="members-caption">
                    <div>Olivia Johnson</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Hana/>
                  <div className="members-caption">
                    <div>Hana Larkins</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Sophia/>
                  <div className="members-caption">
                    <div>Sophia Michetti</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Sara/>
                  <div className="members-caption">
                    <div>Sara Nelson</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Lilly/>
                  <div className="members-caption">
                    <div>Lilly Olsick</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
      )
    }
  }