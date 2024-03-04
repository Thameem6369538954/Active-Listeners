import React from "react";
import "../Css/Header.css";
import Hdrleft from "../Images/Hdrleft.png";
import Hdrright from "../Images/Hdrright.png";
import Maskgroup from "../Images/Maskgroup.png";
import Elements from "../Images/Elements.png";
import Arrow from "../Images/Arrow.png";
const Header = () => {
  return (
    <div className="header-main">
      {/* <div className="yellow-box" data-aos="fade-down" data-aos-duration="1500">
        <ul className="yellow-box-ul">
          <li>
            Developed by <span>Psychologists</span> |
          </li>
          <li>Zero - Medication |</li>
          <li>Music, Aroma & Mandala Art Therapy |</li>
          <li>100% Safe for Kids |</li>
        </ul>
      </div> */}
      <div className="header">
        <div className="header-container">
          <img
            src={Hdrleft}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
          />
          <div className="hdr-text">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Helping you{" "}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="2000">
              Find
            </h2>
            <h3 data-aos="fade-up" data-aos-duration="3000">
              Balance
            </h3>
          </div>
          <img
            src={Hdrright}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
          />
        </div>
        {/* <div className="categoreis haeder">
          <div className="categoreis-grid-boxs">
            <div className="categoreis-grid-box">
              <span>Ages: 6-12</span>
              <p>
                Early age gadget exposure{" "}
                <img src={Arrow} className="arrow-for-header" alt="" />
              </p>
            </div>
            <div className="categoreis-grid-box">
              <span>Ages: 13-19</span>
              <p>
                Adaptation to mobile{" "}
                <img src={Arrow} className="arrow-for-header" alt="" />
              </p>
            </div>
            <div className="categoreis-grid-box">
              <span>Post Covid</span>
              <p>
                Current Times{" "}
                <img src={Arrow} className="arrow-for-header" alt="" />
              </p>
            </div>
            <div className="categoreis-grid-box">
              <span>Our Solutions</span>
              <p>
                Learning and Focus{" "}
                <img src={Arrow} className="arrow-for-header" alt="" />
              </p>
            </div>
          </div>
          <div></div>
        </div> */}
        <div className="hdr-btm-text">
          <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p>
          <button>Why Active Listeners?</button>
        </div>
      </div>
      <div className="puzzle-boy">
        <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
          <span>Services we Offer</span>
          <p>Our Core</p>
          <h1>Discoveries</h1>
        </div>
        <div className="element">
          <img
            src={Elements}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            alt=""
          />
          <h4
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Transformative support for those seeking clarity and understanding
            through active listening.
          </h4>
        </div>
        <img
          src={Maskgroup}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
