import React from "react";
import "../Css/Preppers.css";
import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import PreppersImage from "../Images/PreppersImage.png";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
import Greanline from "../Images/Greenline.png";
import SpeekAKka from "../Images/SpeekAKka.png";
import Gitarakka from "../Images/Gitarakka.png";
import Navarrow from "../Images/Navarrow.png";
const Preppers = () => {
  return (
    <div>
      <Navbar />
      <div className="preppers-main">
        <div className="preppers-header-image">
          <img src={PreppersImage} alt="" />
        </div>
        <div className="therapy-heading">
          <p>One Platform, Multiple touchpoints</p>
          <h1>Preppers Offer Multiple</h1>
          <h2>Therapies</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <h4>
            <img src={Downarrow} className="down-arrow" alt="" /> Our sessions
            are not just activities; they are gateways to improved mental
            health,<br></br> heightened focus and a balanced lifestyle for the
            children's, Parents & Carers..
          </h4>
        </div>
        <div className="preppers-yellow-box-container">
          <div className="preppers-box">
            <h2>Speak Easy</h2>
            <img src={Greanline} alt="" />
            <p>
              Our sessions are not just activities; they are gateways to
              improved mental health, heightened focus and a balanced lifestyle
              for the children's, Parents & Carers..
            </p>
            <div className="preppers-box-bottom-thinks">
              <img src={Navarrow} alt="" />
              <img src={SpeekAKka} alt="" />
            </div>
          </div>
          <div className="preppers-box">
            <h2>Senses Resurrection</h2>
            <img src={Greanline} alt="" />
            <p>
              Our sessions are not just activities; they are gateways to
              improved mental health, heightened focus and a balanced lifestyle
              for the children's, Parents & Carers..
            </p>
            <div className="preppers-box-bottom-thinks">
              <img src={Navarrow} alt="" />
              <img src={SpeekAKka} alt="" />
            </div>
          </div>
          <div className="preppers-box">
            <h2>One to One Session</h2>
            <img src={Greanline} alt="" />
            <p>
              Our sessions are not just activities; they are gateways to
              improved mental health, heightened focus and a balanced lifestyle
              for the children's, Parents & Carers..
            </p>
            <div className="preppers-box-bottom-thinks">
              <img src={Navarrow} alt="" />
              <img src={SpeekAKka} alt="" />
            </div>
          </div>
        </div>
        <div className="therapy-heading">
          <p>Workshops developed and Delivered By Psychologists</p>
          <h1>Learning & Focus </h1>
          <h2>Through Therapies</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>
      </div>
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Preppers;
