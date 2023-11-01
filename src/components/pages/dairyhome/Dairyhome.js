import React, { useState } from "react";

import "../../css/style.css";
import dairytitle from "../../images/dairytitle.png";
import skyoverlay from "../../images/dairyhomeskyoverlay.png";
import background from "../../images/dairyhomebackground.png";
import dairyhils from "../../images/dairyhils.png";
import dairysword from "../../images/dairysword.png";
import swordshadow from "../../images/swordshaddow.png";
import swordelipse from "../../images/swordelipse.png";
import backbtn from "../../images/btn-back.png";
import skyoverflow2 from "../../images/dairyskyoverflow2.png";
import dairyhomeground from "../../images/dairyhomeground.png";
import dairyhomeground2 from "../../images/dairyhomegrond2.png";
const Dairyhome = () => {
  const [getStarted, setGetStarted] = useState(false);
const headeclass  =  getStarted?"headerdiv headershow" :"headerdiv"
const dairyhomeGround = getStarted?"display-none-ground" :"dairyhome-ground"
const dairyhomeGround2 = getStarted?"dairyhome-groun2 dairyhome-groun2-1" :"dairyhome-groun2"
const talwarbox =  getStarted?"talwar-box talwar-box-started":"talwar-box"
const talwar  =getStarted?"talwar talwar2":"talwar" 
const hils  =getStarted?"dairyhome-hils dairyhome-hils-getstarted":"dairyhome-hils" 
const sky2 =  getStarted?"skyoverlay-dairy2 skyoverlay-dairy2-1":"skyoverlay-dairy2"
const overlaybottom = getStarted?"bottom-overlay bottom-overlay2":"bottom-overlay"
const sky = getStarted?"skyoverlay-dairy skyoverlay-dairy-1":"skyoverlay-dairy"

  function handlegetStarted() {
    setGetStarted(true);
  }

  return (
     
    <div className="dairy-home-box">
 
      
        <div className={getStarted?"title-box-hide":"title-box"}>
          <img src={dairytitle} alt="" width="450px" height="216px" />
          <div className="get-started-box" onClick={handlegetStarted}>
            <p className="get-started-text">{"GET STARTED"}</p>
          </div>
        </div>
      
        <div className={headeclass}>
          <div className="header">
            <div className="headerback2">

<div className="textbox">

        <div>
           <p>HOME</p>
           <p>INVEST</p>
           <p>PLAY</p>
        </div>
        
        <div>
        <p>MARKETPLACE</p>
        <p>UNLOCK WALLET</p>

        </div>

</div>



            </div>
            <div className="headerback1"></div>
                 
     
          </div>
          <div className="headertitle">

              </div>
       
  
        </div>
      
        {/* <div className="infobox">

</div>
  */}


      <div className={overlaybottom}>
        <img
          src={skyoverlay}
          alt=""
         
          className={sky}
        />

        <img
          src={skyoverflow2}
          
         
          className={sky2}
        />

 <div className="leaves1"></div>
        <div className="leaves2"></div> 
      </div> 
       <div className="dairyhilground">

          <img src={dairyhils} alt="" className={hils}/>
          
          <img src={dairyhomeground2} alt="" className={dairyhomeGround2}/>
          <img src={dairyhomeground} alt="" className={dairyhomeGround}/>
        
        </div>

      <div className={talwarbox}>
          <div className="talwarack3"></div>

          <div className="talwarack4"></div>
          <div className="talwarack5"></div>
          <div className="talwarShadow"></div>
          <div className={talwar}></div>

          <div className="talwarack1"></div>

          <div className="talwarack2"></div>
          <div className="talwarfront1"></div>
          <div className="talwarfront2"></div>
          <div className="talwarfront3"></div>
          <div className="talwarshadowtop"></div>
          <div className="talwarfront4"></div>
        </div>
    </div>
    
  );
};

export default Dairyhome;
