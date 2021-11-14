import React, { Component } from 'react'
import '../App.css'; 

import Footer from './shared/footer.jsx';

// Seniors
import Alena from './shared/alena_coleman.jsx'; 
import Anna from './shared/anna_quast.jsx'; 
import Elizabeth from './shared/elizabeth_zaczyk.jsx'; 
import Ella from './shared/ella_wisniewski.jsx'; 
import GraceS from './shared/grace_schiefelbein.jsx'; 
import Madi from './shared/madi_itzel.jsx'; 
import McKailey from './shared/mckailey_mbathurst.jsx'; 
import Meara from './shared/meara_mahoney.jsx'; 
import Michael from './shared/michael_lee.jsx'; 
import Moira from './shared/moira_bartlett.jsx'; 
import OliviaK from './shared/olivia_krumwiede.jsx'; 
import Searra from './shared/searra_bell.jsx'; 
import Shannon from './shared/shannon_may.jsx'; 

// Juniors
import Angela from './shared/angela_betz.jsx'; 
import Camille from './shared/camille_knott.jsx'; 
import Hana from './shared/hana_larkins.jsx'; 
import Lilly from './shared/lilly_olsick.jsx'; 
import Lizzie from './shared/lizzie_martin.jsx';
import OliviaJ from './shared/olivia_johnson.jsx'; 
import Sara from './shared/sara_nelson.jsx'; 
import Sophia from './shared/sophia_michetti.jsx'; 
import Syd from './shared/syd_brooks.jsx'; 

// Sophomores
import Allie from './shared/allie_obrien.jsx'; 
import Bia from './shared/bia_silva.jsx'; 
import Consuela from './shared/consuela_rivera.jsx'; 
import Delaney from './shared/delaney_clark.jsx'; 
import Emily from './shared/emily_odonoghue.jsx'; 
import Hannah from './shared/hannah_chartier.jsx'; 
import Megan from './shared/megan_kelleher.jsx'; 
import Melissa from './shared/melissa_perotin.jsx'; 
import Noor from './shared/noor_behnam.jsx'; 
import OliviaO from './shared/olivia_ortega.jsx'; 
import SarahW from './shared/sarah_watson.jsx'; 
import Tricia from './shared/tricia_mccormack.jsx'; 

// Freshman
import Bridget from './shared/bridget_donovan.jsx'; 
import Chloe from './shared/chloe_miller.jsx'; 
import Clara from './shared/clara_menninga.jsx'; 
import Erin from './shared/erin_orourke.jsx'; 
import Evelyn from './shared/evelyn_hemler.jsx'; 
import GraceW from './shared/grace_werling.jsx'; 
import Gracie from './shared/gracie_dillon.jsx'; 
import Jessica from './shared/jessica_williams.jsx'; 
import Julia from './shared/julia_chen.jsx'; 
import Katherine from './shared/katherine_huang.jsx'; 
import Kevin from './shared/kevin_jun.jsx'; 
import Lizbeth from './shared/lizbeth_cortezgalindo.jsx'; 
import Maggie from './shared/maggie_mcsweeney.jsx'; 
import OliviaL from './shared/olivia_lucero.jsx'; 
import SarahF from './shared/sarah_fitzgerald.jsx'; 

import { Divider } from 'antd';
import 'antd/dist/antd.css';


export default class Members extends Component {
    render() {
      return (
        <div>
          <div className="text-container">
            <h1>About our members:</h1>
            <p>The piccolos are 47 members strong in the 2021 season and while we will miss our seniors greatly, 
              we are looking forward to welcoming new members into our family! 
              Click on each photo to learn more about us!</p>
          </div>
            <div className="container">
            <div className="members-divider-text"><Divider orientation="right">Seniors and Graduate Students</Divider></div>
              <div className="row">
                <div className="col-lg">
                  <Alena/>
                  <div className="members-caption">
                    <div>Alena Coleman</div>
                    <div>Section Leader</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Anna/>
                  <div className="members-caption">
                    <div>Anna Quast</div>
                    <div>Section Leader, Librarian</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Elizabeth/>
                  <div className="members-caption">
                    <div>Elizabeth Zaczyk</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Ella/>
                  <div className="members-caption">
                    <div>Ella Wisniewski</div>
                    <div>Head Drum Major</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <GraceS/>
                  <div className="members-caption">
                    <div>Grace Schiefelbein</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Madi/>
                  <div className="members-caption">
                    <div>Madi Itzel</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <McKailey/>
                  <div className="members-caption">
                    <div>McKailey Bathurst</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Meara/>
                  <div className="members-caption">
                    <div>Meara Mahoney</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Michael/>
                  <div className="members-caption">
                    <div>Micheal Lee</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Moira/>
                  <div className="members-caption">
                    <div>Moira Bartlett</div>
                    <div>Section Leader</div>
                  </div>
                </div>
                <div className="col-lg">
                  <OliviaK/>
                  <div className="members-caption">
                    <div>Olivia Krumwiede</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Searra/>
                  <div className="members-caption">
                    <div>Searra Bell</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Shannon/>
                  <div className="members-caption">
                    <div>Shannon May</div>
                    <div>Core Band Member, Irish Guard</div>
                  </div>
                </div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
              </div>
              <div className="text-container"><Divider orientation="right">Juniors</Divider></div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Angela/>
                  <div className="members-caption">
                    <div>Angela Betz</div>
                    <div>Core Band Member, FUIC</div>
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
                  <Hana/>
                  <div className="members-caption">
                    <div>Hana Larkins</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Lilly/>
                  <div className="members-caption">
                    <div>Lilly Olsick</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Lizzie/>
                  <div className="members-caption">
                    <div>Lizzie Martin</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <OliviaJ/>
                  <div className="members-caption">
                    <div>Olivia Johnson</div>
                    <div>Librarian</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Sara/>
                  <div className="members-caption">
                    <div>Sara Nelson</div>
                    <div>Abroad</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Sophia/>
                  <div className="members-caption">
                    <div>Sophia Michetti</div>
                    <div>Core Band Member, Social Chair</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Syd/>
                  <div className="members-caption">
                    <div>Syd Brooks</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
              </div>
              <div className="text-container"><Divider orientation="right">Sophomores</Divider></div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Allie/>
                  <div className="members-caption">
                    <div>Allie O'Brien</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Bia/>
                  <div className="members-caption">
                    <div>Bia Silva</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Consuela/>
                  <div className="members-caption">
                    <div>Consuela Rivera</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Delaney/>
                  <div className="members-caption">
                    <div>Delany Clark</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Emily/>
                  <div className="members-caption">
                    <div>Emily O'Donoghue</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Hannah/>
                  <div className="members-caption">
                    <div>Hannah Chartier</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Megan/>
                  <div className="members-caption">
                    <div>Megan Kelleher</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Melissa/>
                  <div className="members-caption">
                    <div>Melissa Perotin</div>
                    <div>Social Chair</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Noor/>
                  <div className="members-caption">
                    <div>Noor Behnam</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <OliviaO/>
                  <div className="members-caption">
                    <div>Olivia Ortega</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <SarahW/>
                  <div className="members-caption">
                    <div>Sarah Watson</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Tricia/>
                  <div className="members-caption">
                    <div>Tricia McCormack</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
              <div className="members-divider-text"><Divider orientation="right">First Years</Divider></div>
              <div className="row">
                <div className="col-lg">
                  <Bridget/>
                  <div className="members-caption">
                    <div>Bridget Donovan</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Chloe/>
                  <div className="members-caption">
                    <div>Chloe Miller</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Clara/>
                  <div className="members-caption">
                    <div>Clara Menninga</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Erin/>
                  <div className="members-caption">
                    <div>Erin O'Rourke</div>
                    <div>New Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Evelyn/>
                  <div className="members-caption">
                    <div>Evelyn Hemler</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <GraceW/>
                  <div className="members-caption">
                    <div>Grace Werling</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Gracie/>
                  <div className="members-caption">
                    <div>Gracie Dillon</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Jessica/>
                  <div className="members-caption">
                    <div>Jessica Williams</div>
                    <div>New Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Julia/>
                  <div className="members-caption">
                    <div>Julia Chen</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Katherine/>
                  <div className="members-caption">
                    <div>Katherine Huang</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Kevin/>
                  <div className="members-caption">
                    <div>Kevin Jun</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Lizbeth/>
                  <div className="members-caption">
                    <div>Lizbeth Cortez-Galindo</div>
                    <div>New Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
              <div className="col-lg">
                  <Maggie/>
                  <div className="members-caption">
                    <div>Maggie McSweeney</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <OliviaL/>
                  <div className="members-caption">
                    <div>Olivia Lucero</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <SarahF/>
                  <div className="members-caption">
                    <div>Sarah Fitzgerald</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg"></div>
              </div>
            </div>
            <Footer/>
        </div>
      )
    }
  }