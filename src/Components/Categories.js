import React from "react";
import "../Css/Categories.css";
import emoji from "../Images/emoji.png";
import chat from "../Images/chat.png";
import weekly from "../Images/weekly.png";
import community from "../Images/community.png";
import Hoodi from "../Images/Hoodi.png";
import Elements from "../Images/Elements.png";
const Categories = () => {
  return (
    <div className="categories-main-holecontainer">
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
        {/* <img
          src={Maskgroup}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          alt=""
        /> */}
      </div>
      <div className="categories-main">
        <div className="cate-yellow-box">
          <div className="Hoodi">
            <h1>Statistics and Data</h1>
            <img src={Hoodi} alt="" />
          </div>
        </div>
        <div className="cate-left-box">
          <div className="box1">
            <img src={community} alt="" />
            <h2>Mobile Addiction</h2>
            <p>
              Get professional help from a mobile addiction and mental health
              counselor from BetterHelp.Start receiving support via phone,
              video, or live-chat.
            </p>
          </div>
          <div className="box2">
            <img src={chat} alt="" />
            <h2>Social Media Addiction</h2>
            <p>
              Struggling With Social Media Addiction? Online therapy can help
              you make lasting change. Start getting support from a licensed
              therapist from BetterHelp.
            </p>
          </div>
          <div className="box3">
            <img src={weekly} alt="" />
            <h2>Gaming Addiction</h2>
            <p>
              If you are looking for a video game addiction treatment facility,
              we can help. Call to discuss treatment options
            </p>
          </div>
          <div className="box4">
            <img src={emoji} alt="" />
            <h2>Entertainment & Performance Addiction</h2>
            <p>
              You may break away from entertainment addiction with some simple
              tactics.
            </p>
          </div>
          <button>Discover How?</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
