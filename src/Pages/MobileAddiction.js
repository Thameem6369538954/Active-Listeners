import React from "react";
import "../Css/MobileAddiction.css";
import Navbar from "../Components/Navbar.js";
import MobileaddLeft from "../Images/MobileaddLeft.png";
import MobileaddRight from "../Images/MobileaddRight.png";
import Navarrow from "../Images/Navarrow.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import MoAddiction from "../Images/MoAddiction.png";
import Maskgroup from "../Images/Mask group.png";
import PodcastRed from "../Images/PodcastRed.png";
import cover from "../Images/cover.png";
import Therapycategories from "../Components/Therapycategories.js";
import Footer from "../Components/Footer.js";
import GetinTouch from "../Components/GetinTouch.js";
const MobileAddiction = () => {
  return (
    <div>
      <Navbar />
      <div className="mobile-addiction-main-container">
        <div className="mobile-addiction-header">
          <div className="header-container">
            <img
              src={MobileaddLeft}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
              width={"150px]"}
            />
            <div className="hdr-text">
              <h1 data-aos="fade-up" data-aos-duration="1000">
                For Kids{" "}
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="2000">
                Mobile
              </h2>
              <h3 data-aos="fade-up" data-aos-duration="3000">
                Addiction
              </h3>
            </div>
            <img
              src={MobileaddRight}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            />
          </div>
          <div className="btn-compo">
            <button>Get Support</button>
            <img src={Navarrow} alt="" />
          </div>
        </div>

        <div className="grean-box-mobile-addiction">
          <div className="mobile-addiction-box-green">
            <img
              src={Roundb}
              style={{
                marginTop: "-40%",
                marginLeft: "-10%",
                zIndex: "-1",
                width: "20%",
              }}
              alt=""
            />

            <div className="inside-mobile-addiction-txt">
              <h1>Are you Addicted to the Mobile phone?</h1>
              <img
                src={MoAddiction}
                style={{
                  width: "60%",
                }}
                alt=""
              />
            </div>
            <img
              src={Rounda}
              style={{
                marginRight: "-17%",
                marginTop: "35%",
                width: "30%",
                zIndex: "-1",
              }}
              alt=""
            />
          </div>
        </div>

        <div className="observed-result">
          <div className="observed-result-header">
            <div className="Subscribe-heading">
              <p>Outcome</p>
              <h1>Observed Results of</h1>
              <h2>Mobile Addiction</h2>
            </div>
          </div>
          {/* boxes */}
          <div className="observed-result-cate">
            <div className="observed-result-main">
              {/* Fist-box */}
              <div className="observed-result-box">
                <div className="observed-result-box-align">
                  <img src="" alt="" />
                  <h2>Health Issues</h2>
                  <p>
                    Overuse of mobile devices can cause eye strain, pain, and
                    sleep disruption.
                  </p>
                </div>

                <div className="observed-result-box-align">
                  <img src="" alt="" />
                  <h2>Decreased Productivity</h2>
                  <p>
                    Mobile addiction leads to distractions, procrastination,
                    hindering productivity, and performance.
                  </p>
                </div>
              </div>
              {/* second-box */}
              <div className="observed-result-box">
                <div className="observed-result-box-align">
                  <img src="" alt="" />
                  <h2>Neglected Responsibilities</h2>
                  <p>
                    Mobile addicts may neglect tasks, causing academic, work, or
                    familial problems.
                  </p>
                </div>

                <div className="observed-result-box-align">
                  <img src="" alt="" />
                  <h2>Unable to interact socially</h2>
                  <p>
                    Mobile addicts may struggle with in-person communication,
                    fostering isolation feelings.
                  </p>
                </div>
              </div>
              {/* therod-box */}
              <div className="observed-result-box">
                <div className="observed-result-box-align">
                  <img src="" alt="" />
                  <h2>Cyber Bullying</h2>
                  <p>
                    People may feel negative emotions due to social media
                    comparisons.
                  </p>
                </div>

                <div className="observed-result-box-align">
                  <img src="" alt="" />
                  <h2>Depression, Anxiety</h2>
                  <p>
                    Mobile addiction may elevate stress, anxiety, and depression
                    levels.
                  </p>
                </div>
              </div>
            </div>
            <div className="yellow-box-mobile-addiction">
              <div className="mobile-addiction-yellow-box">
                <h4>Get to know How much you are Addicted to Mobile Phones</h4>
                <button>Take Test</button>
                <img src={Maskgroup} alt="" />
              </div>

              <div className="mobile-addiction-yellow-box">
                <img
                  src={PodcastRed}
                  style={{
                    width: "100px",
                    position: "absolute",
                    marginLeft: "15%",
                    marginTop: "-16%",
                  }}
                  alt=""
                />
                <img
                  src={cover}
                  style={{
                    width: "200px",
                    marginLeft: "1%",
                    borderRadius: "30px",
                  }}
                  alt=""
                />
                <span>Recommended Podcast</span>
                <h4>Are you Addicted to Mobile phone?</h4>
                <button>Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Therapycategories />
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default MobileAddiction;