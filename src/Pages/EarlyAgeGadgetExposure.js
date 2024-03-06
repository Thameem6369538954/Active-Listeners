import React from 'react'
import Navbar from '../Components/Navbar'
import GetinTouch from '../Components/GetinTouch'
import Footer from '../Components/Footer'
import Therapycategories from '../Components/Therapycategories'
import earlyAgeright from "../Images/Earlyageright2.png"
import earlyAgeleft from '../Images/earlyAgeleft.png'
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import earlyAgeBoxImg from "../Images/earlyAgeBoxImg.png";
import '../Css/EarlyAgeGadgetExposure.css'
import Group119 from '../Images/Group 119.png'
import Maskgroup from '../Images/Mask group.png'
const EarlyAgeGadgetExposure = () => {
  return (
    <div className="home-main">
      <Navbar />
      <div className="header">
        <div className="header-container">
          <img
            src={earlyAgeleft}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
          />
          <div className="hdr-text">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Early Age{" "}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="2000">
              Gadget
            </h2>
            <h3 data-aos="fade-up" data-aos-duration="3000">
              Exposure
            </h3>
          </div>
          <img
            src={earlyAgeright}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
          />
        </div>
        <div className="hdr-btm-text">
          {/* <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p> */}
          <button>Talk to us</button>
        </div>
        
        {/* <div className="hdr-btm-text">
          <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p>
          <button>Why Active Listeners?</button>
        </div> */}
      </div>
      <div className="green-bourd-grief">
          <div class="card-grif">
            <div class="circle">
              <img src={Roundb} alt="" />
            </div>
            <div class="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div class="card-inneR">
              <div>
                
                {/* <h1>Impact of</h1>
                <h1>Gadgts on</h1>
                <p>children</p> */}
              </div>

              <img src={earlyAgeBoxImg} alt="" />
            </div>
          </div>
        </div>

        <div className="goalvision-headrer-box">
          
          <div className="goal-box">
            <div className="inside-box">
              <h1>Get to know How Much You are Attracted to Gadgets</h1>
              {/* <img src={Yellowline} alt="" /> */}
              {/* <p>
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p> */}
               <div className="buttonss">
          {/* <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p> */}
          <button>Take Test</button>
        </div>
            </div>
            <div>
              <img
                src={Maskgroup}
                style={{
                  // backgroundColor: "red",
                  zIndex: 1,
                  marginTop: 100,
                  marginLeft: -250,
                  width: 330,
                }}
                alt=""
              />
            </div>
          </div>
          <div className="goal-box">
            <div className="inside-box">
              <h1>Our Goals</h1>
              {/* <img src={Yellowline} alt="" /> */}
              {/* <p>
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p> */}
            </div>
            <div>
              <img
                // src={Flag}
                style={{
                  // backgroundColor: "red",
                  zIndex: 1,
                  marginTop: 100,
                  width: 330,
                  marginLeft: -240,
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      <Therapycategories/>
      <GetinTouch />
      <Footer />
    </div>
    
  )
}

export default EarlyAgeGadgetExposure