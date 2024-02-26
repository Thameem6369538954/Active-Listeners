import React from "react";
import "../Css/GoalVision.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Element from "../Images/Elements.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import note from "../Images/note.png";
import Doc from "../Images/Doc.png";
import emoji from "../Images/emoji.png";
import chat from "../Images/chat.png";
import weekly from "../Images/weekly.png";
import community from "../Images/community.png";
const GoalVision = () => {
  return (
    <div>
      <div className="goalvision">
        <Navbar />
        <div className="therapy-heading">
          <p>Our Goals</p>
          <h1>Engage, understand, improve with</h1>
          <h2>Active Listening</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>
        <div className="goal-header-text">
          <img src={Element} alt="" />
          <p>
            Transformative support for those seeking clarity and understanding
            through active listening.
          </p>
        </div>
        <div className="goalvision-headrer-box">
          <img src={Roundb} alt="" />
          <div className="goal-box">
            <div className="inside-box">
              <h1>Our Vision</h1>
              <img src={Yellowline} alt="" />
              <p>
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p>
            </div>
            <div>
              <img
                src={Doc}
                style={{
                  // backgroundColor: "red",
                  zIndex: 1,
                  marginTop: 114,
                  marginLeft: -150,
                  width: 230,
                }}
                alt=""
              />
            </div>
          </div>
          <div className="goal-box">
            <div className="inside-box">
              <h1>Our Mission</h1>
              <img src={Yellowline} alt="" />
              <p>
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p>
            </div>
            <div>
              <img
                src={note}
                style={{
                  // backgroundColor: "red",
                  zIndex: 1,
                  marginTop: 130,
                  width: 230,
                  marginLeft: -120,
                }}
                alt=""
              />
            </div>
          </div>
          <img src={Rounda} alt="" />
        </div>
        <div className="therapy-heading">
          <p>Packages for you!</p>
          <h1>EGet best</h1>
          <h2>Services & Offerings!</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>
        <div className="goal-box-container-hole">
          <div className="goal-box-container">
            <div className="goalvision-box">
              <img src={emoji} alt="" />
              <h2>Parents</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod{" "}
              </p>
              <span>01</span>
            </div>
            <div className="goalvision-box">
              <img src={emoji} alt="" />
              <h2>Parents</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod{" "}
              </p>
              <span>02</span>
            </div>
            <div className="goalvision-box">
              <img src={emoji} alt="" />
              <h2>Parents</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod{" "}
              </p>
              <span>03</span>
            </div>
            <div className="goalvision-box">
              <img src={emoji} alt="" />
              <h2>Parents</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod{" "}
              </p>
              <span>04</span>
            </div>
          </div>
          <button>Discover How ?</button>
        </div>
        <div className="gaol-vision-last-box">
          <div className="gv-left">
            <div className="therapy-heading">
              <p>Services we Offer</p>
              <h1>Area of </h1>
              <h2>Focus</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
              <button className="gv-btn">Discover How?</button>
            </div>
          </div>
          <div className="categories-main">
            {/* <div className="cate-yellow-box">
              <h1>Statisctics and data video</h1>
            </div> */}
            <div className="cate-left-box">
              <div className="box1">
                <img src={community} alt="" />
                <h2>Mobile Addiction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
              <div className="box2">
                <img src={chat} alt="" />
                <h2>Social Media Addiction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
              <div className="box3">
                <img src={weekly} alt="" />
                <h2>Gaming Addiction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
              <div className="box4">
                <img src={emoji} alt="" />
                <h2>Entertainment & Performance Addiction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="potcaste-form">
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
    </div>
  );
};

export default GoalVision;
