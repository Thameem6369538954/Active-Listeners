import React from "react";
import "../Css/OneOnOne.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import emoji from "../Images/emoji.png";
const OneOnOne = () => {
  return (
    <div>
      <Navbar />
      <div className="oneonone-main">
        <div className="therapy-heading">
          <p>Therapy for you!</p>
          <h1>One-on- one Session</h1>
          <h2>Preppers</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <button className="get-support">Schedule Now</button>
        </div>
        <div className="green-bourd-grief">
          <div class="card-grif">
            <div class="circle">
              <img src={Roundb} alt="" />
            </div>
            <div class="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div class="card-inner">
              <div>
                <h1>Listening: the ultimate healer </h1>
                <p>With in</p>
              </div>

              {/* <img src={Kadhoolu} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="therapy-heading">
        <p>Therapies in senses Resurrecction</p>
        <h1>We offer</h1>
        <h2>Multiple therapies</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
        {/* <button>Schedule Now</button> */}
      </div>
      <div className="weekly-meetup-box-container">
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>Body essential salts & oils</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>Music</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>recommended diets</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>mandala art books</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
        </div>
        {/* <div className="weeekly-meetup-box">
            <img src={Clap} alt="" />
            <h2>Family, Relationships & Divorce</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div> */}
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>DIYs</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />

          <h2>Aroma Therapy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
        </div>
      </div>
      <button className="get-support">Schedule Now</button>
      <div className="oneonone-form">
        <div className="get-form">
          <form>
            <h1>Get in Touch</h1>
            <p>With us</p>
            <div className="form-inputs">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Message" />
            </div>
            <div className="agree-get">
              <input type="checkbox" />
              <p>
                By Submitting your details means you agree with Privacy Policy
                and Term & Conditions
              </p>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OneOnOne;
