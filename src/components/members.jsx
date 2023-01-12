import React, { Component } from 'react'
import '../App.css'; 

import Footer from './shared/footer.jsx';

// Seniors
import Angela from './shared/angela_betz.jsx'; 
import Camille from './shared/camille_knott.jsx'; 
import Hana from './shared/hana_larkins.jsx'; 
import Lilly from './shared/lilly_olsick.jsx'; 
import Lizzie from './shared/lizzie_martin.jsx';
import Madi from './shared/madi_itzel.jsx';
import OliviaJ from './shared/olivia_johnson.jsx'; 
import Sara from './shared/sara_nelson.jsx'; 
import Sophia from './shared/sophia_michetti.jsx'; 
import Syd from './shared/syd_brooks.jsx'; 

// Juniors
import Allie from './shared/allie_obrien.jsx'; 
import Bia from './shared/bia_silva.jsx'; 
import Consuela from './shared/consuela_rivera.jsx'; 
import Delaney from './shared/delaney_clark.jsx'; 
import Emily from './shared/emily_odonoghue.jsx'; 
import Hannah from './shared/hannah_chartier.jsx'; 
import Maddie from './shared/maddie_schwatal.jsx';
import Megan from './shared/megan_kelleher.jsx'; 
import Melissa from './shared/melissa_perotin.jsx'; 
import Noor from './shared/noor_behnam.jsx'; 
import OliviaO from './shared/olivia_ortega.jsx'; 
import SarahW from './shared/sarah_watson.jsx'; 
import Tricia from './shared/tricia_mccormack.jsx'; 

// Sophomores
import Anna from './shared/anna_vanavermaete.jsx';
import Bridget from './shared/bridget_donovan.jsx'; 
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
import SarahC from './shared/sarah_clark.jsx';
import SarahF from './shared/sarah_fitzgerald.jsx'; 

// First Years
import Abby from './shared/abby_burns.jsx';
import Ashley from './shared/ashley_sims.jsx';
import Charlize from './shared/charlize_guerrero.jsx';
import Elizabeth from './shared/elizabeth_rhee.jsx';
import Ella from './shared/ella_flynn.jsx';
import Evan from './shared/evan_cox.jsx';
import Franki from './shared/franki_vacko.jsx';
import Janet from './shared/janet_federici.jsx';
import Kamele from './shared/kamele_detweiler.jsx';
import Kelsey from './shared/kelsey_mcgivern.jsx';
import Rachel from './shared/rachel_adornetto.jsx';
import Riley from './shared/riley_gambino.jsx';
import Rose from './shared/rose_mcguigan.jsx';
import Sonia from './shared/sonia_lumley.jsx';
import Ziyun from './shared/ziyun_ma.jsx';


import { Divider } from 'antd';
import 'antd/dist/antd.css';


export default class Members extends Component {
    render() {
      return (
        <div>
          <div className="text-container">
            <h1>About our members:</h1>
            <p>The piccolos are 52 members strong in the 2022 season and while we will miss our seniors greatly, 
              we are looking forward to welcoming new members into our family! 
              Click on each photo to learn more about us!</p>
          </div>
            <div className="container">
              <div className="text-container"><Divider orientation="left">Seniors</Divider></div>
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
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Hana/>
                  <div className="members-caption">
                    <div>Hana Larkins</div>
                    <div>Assistant Drum Major</div>
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
                    <div>Returning Band Member</div>
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
                  <OliviaJ/>
                  <div className="members-caption">
                    <div>Olivia Johnson</div>
                    <div>Section Leader, Librarian</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Sara/>
                  <div className="members-caption">
                    <div>Sara Nelson</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Sophia/>
                  <div className="members-caption">
                    <div>Sophia Michetti</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Syd/>
                  <div className="members-caption">
                    <div>Syd Brooks</div>
                    <div>Section Leader</div>
                  </div>
                </div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
              </div>
              <div className="text-container"><Divider orientation="left">Juniors</Divider></div>
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
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Consuela/>
                  <div className="members-caption">
                    <div>Consuela Rivera</div>
                    <div>Abroad</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Delaney/>
                  <div className="members-caption">
                    <div>Delaney Clark</div>
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
                  <Maddie/>
                  <div className="members-caption">
                    <div>Maddie Schwatal</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Megan/>
                  <div className="members-caption">
                    <div>Megan Kelleher</div>
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Melissa/>
                  <div className="members-caption">
                    <div>Melissa Perotin</div>
                    <div>Core Band Member, Social Chair</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Noor/>
                  <div className="members-caption">
                    <div>Noor Behnam</div>
                    <div>Core Band Member, BAC</div>
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
                    <div>Core Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Tricia/>
                  <div className="members-caption">
                    <div>Tricia McCormack</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
              </div>
              <div className="members-divider-text"><Divider orientation="left">Sophomores</Divider></div>
              <div className="row">
                <div className="col-lg">
                  <Anna/>
                  <div className="members-caption">
                    <div>Anna VanAvermaete</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Bridget/>
                  <div className="members-caption">
                    <div>Bridget Donovan</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Clara/>
                  <div className="members-caption">
                    <div>Clara Menninga</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Erin/>
                  <div className="members-caption">
                    <div>Erin O'Rourke</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Evelyn/>
                  <div className="members-caption">
                    <div>Evelyn Hemler</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <GraceW/>
                  <div className="members-caption">
                    <div>Grace Werling</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Gracie/>
                  <div className="members-caption">
                    <div>Gracie Dillon</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Jessica/>
                  <div className="members-caption">
                    <div>Jessica Williams</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Julia/>
                  <div className="members-caption">
                    <div>Julia Chen</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Katherine/>
                  <div className="members-caption">
                    <div>Katherine Huang</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Kevin/>
                  <div className="members-caption">
                    <div>Kevin Jun</div>
                    <div>Returning Band Member, Social Chair</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Lizbeth/>
                  <div className="members-caption">
                    <div>Lizbeth Cortez-Galindo</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <SarahC/>
                  <div className="members-caption">
                    <div>Sarah Clark</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <SarahF/>
                  <div className="members-caption">
                    <div>Sarah Fitzgerald</div>
                    <div>Returning Band Member</div>
                  </div>
                </div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
              </div>
              <div className="members-divider-text"><Divider orientation="left">First Years</Divider></div>
              <div className="row">
                <div className="col-lg">
                  <Abby/>
                  <div className="members-caption">
                    <div>Abby Burns</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Ashley/>
                  <div className="members-caption">
                    <div>Ashley Sims</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Charlize/>
                  <div className="members-caption">
                    <div>Charlize Guerrero</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Elizabeth/>
                  <div className="members-caption">
                    <div>Elizabeth Rhee</div>
                    <div>New Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Ella/>
                  <div className="members-caption">
                    <div>Ella Flynn</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Evan/>
                  <div className="members-caption">
                    <div>Evan Cox</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Franki/>
                  <div className="members-caption">
                    <div>Franki Vacko</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Janet/>
                  <div className="members-caption">
                    <div>Janet Federici</div>
                    <div>New Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Kamele/>
                  <div className="members-caption">
                    <div>Kamele Detweiler</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Kelsey/>
                  <div className="members-caption">
                    <div>Kelsey McGivern</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Rachel/>
                  <div className="members-caption">
                    <div>Rachel Adornetto</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Riley/>
                  <div className="members-caption">
                    <div>Riley Gambino</div>
                    <div> New Band Member</div>
                  </div>
                </div>
              </div>
              <div className="row" style={{"padding-bottom": "40px"}}>
                <div className="col-lg">
                  <Rose/>
                  <div className="members-caption">
                    <div>Rose McGuigan</div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Sonia/>
                  <div className="members-caption">
                    <div>Sonia Lumley </div>
                    <div>New Band Member</div>
                  </div>
                </div>
                <div className="col-lg">
                  <Ziyun/>
                  <div className="members-caption">
                    <div>Ziyun Ma </div>
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