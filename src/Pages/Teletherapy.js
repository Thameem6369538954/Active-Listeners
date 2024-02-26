import React from "react";
import "../Css/TeleTherapy.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { TiArrowRightThick } from "react-icons/ti";
import Plan from "../Images/Plan.png";
import Planb from "../Images/Planb.png";
import Speekeasy from "../Components/Speekeasy";
import { TiTick } from "react-icons/ti";
import FlowerL from "../Images/FlowerL.png";
import FlowerR from "../Images/FlowerR.png";
import Doc from "../Images/Doc.png";
import Telegroup from "../Images/Telegroup.png";
import Arrow from "../Images/Arrow.png";
const Teletherapy = () => {
  return (
    <div>
      <Navbar />
      <div className="teletheropy">
        <div className="tele-buttons">
          <button>Get Appointment</button>
          <p>Book Your Complimentary 15-min Call</p>
          <TiArrowRightThick className="arrow-for-tele" />
        </div>
        <Speekeasy />
      </div>

      <div className="teletheropy-plans">
        <div className="top-baner">
          <p>Packages for you!</p>
          <h1>Subscribe to our</h1>
          <h2>Packages</h2>
        </div>
        <div className="card-container">
          <div class="card">
            <div className="card-text">
              <div>
                <img src={Plan} alt="" />
              </div>
              <div>
                <p>7 Days</p>
                <h1>Basic</h1>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>

            <h1>
              ₹ 199 <span>// 7 days</span>
            </h1>
            <p>What’s included</p>
            <ul className="plan-list">
              <li>
                <TiTick className="tick" />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick className="tick" />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick className="tick" />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick className="tick" />
                Lorem ipsum dolor conse ctetur
              </li>
            </ul>
            <button>Get Started</button>
          </div>

          <div class="card">
            <div className="card-text">
              <div>
                <img src={Planb} alt="" />
              </div>
              <div>
                <p style={{ color: "white" }}>15 Days</p>
                <h1 style={{ color: "#ffdd7e" }}>Premium</h1>
              </div>
            </div>

            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>

            <h1 style={{ color: "#ffdd7e" }}>
              ₹ 299<span style={{ color: "white" }}>// 15 days</span>
            </h1>
            <p>What’s included</p>
            <ul className="plan-list" style={{ color: "white" }}>
              <li>
                <TiTick
                  className="tick"
                  style={{ backgroundColor: "#ffdd7e", color: "black" }}
                />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick
                  className="tick"
                  style={{ backgroundColor: "#ffdd7e", color: "black" }}
                />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick
                  className="tick"
                  style={{ backgroundColor: "#ffdd7e", color: "black" }}
                />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick
                  className="tick"
                  style={{ backgroundColor: "#ffdd7e", color: "black" }}
                />
                Lorem ipsum dolor conse ctetur
              </li>
            </ul>
            <button>Get Started</button>
          </div>

          <div class="card">
            <div className="card-text">
              <div>
                <img src={Plan} alt="" />
              </div>
              <div>
                <p>7 Days</p>
                <h1>Basic</h1>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.{" "}
            </p>

            <h1>
              ₹ 399<span>// 7 days</span>
            </h1>
            <p>What’s included</p>
            <ul className="plan-list">
              <li>
                <TiTick className="tick" />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick className="tick" />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick className="tick" />
                Lorem ipsum dolor conse ctetur
              </li>
              <li>
                <TiTick className="tick" />
                Lorem ipsum dolor conse ctetur
              </li>
            </ul>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      <div className="bottom-tele-image">
        {/* <img src={FlowerL} alt="" /> */}
        <div className="tele-bottom-box-main">
          <div className="tele-bottom-box">
            <h1>Psychologists available via Phone consultation !</h1>
            <ul className="tele-bottom-txt">
              <li>Bullying, Body Shaming, Cyber Trolling</li>
              <li>Low Self Esteem / Suicidal Tendencies </li>
              <li>Introverts</li>
              <div className="tele-bottom-image">
                <button>Know More</button>
                <img src={Doc} alt="" />
              </div>
            </ul>
          </div>
          <div className="tele-bottom-box">
            <h1>Introducing  Personality Assessment Test </h1>
            <ul className="tele-bottom-txt">
              <p>
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p>

              {/* <img src={Arrow} width={1} alt="" /> */}
              <div className="tele-bottom-image">
                <img src={Telegroup} alt="" />
              </div>
            </ul>
          </div>
        </div>
        {/* <img src={FlowerR} alt="" /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Teletherapy;
