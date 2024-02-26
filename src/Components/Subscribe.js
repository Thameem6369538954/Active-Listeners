import React, { Component, useState } from "react";
import Slider from "react-slick";
import "../Css/Subscribe.css";
import FreeMember from "../Images/FreeMember.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import Doc from "../Images/Doc.png";
import Think from "../Images/Think.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Subscribe = () => {
  const [caro, setCaro] = useState([
    {
      id: 1,
      name: "How Does it Feel to be a Teenager in 2024",
      img: require("../Images/Gadgets addiction .png"),
    },
    {
      id: 2,
      name: "Disconnect to Reconnect",
      img: require("../Images/Disconnect to reconnect .png"),
    },
    {
      id: 3,
      name: "Loneliness due to Gaming",
      img: require("../Images/Lonely .png"),
    },
    {
      id: 4,
      name: "Why WFH is preffered?",
      img: require("../Images/Untitled_Artwork 16.png"),
    },
    {
      id: 5,
      name: "Social Media de-addiction  Tips",
      img: require("../Images/Untitled_Artwork 1 6.png"),
    },
    {
      id: 6,
      name: "How to handle your Teenage Children",
      img: require("../Images/Untitled_Artwork 22.png"),
    },
  ]);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <div className="Subscribe-main">
        <div className="Subscribe-cate">
          <div className="Subscribe-heading">
            <p>One Platform, Multiple touchpoints</p>
            <h1>How Else we can</h1>
            <h2>Help</h2>
          </div>

          <div className="Subscribe-box-main">
            <div className="Subscribe-box">
              <div className="Subscribe-box-1">
                <div>
                  <h1>Grief Support Group</h1>
                  <p>Offline & Online weekly meetup</p>
                </div>
                <img src={FreeMember} style={{ width: 100 }} alt="" />
              </div>

              <ul className="Support-group">
                <li>Family, Relationships & Divorce</li>
                <li>Loss of Loved Ones/ Relocation</li>
                <li>Relocation</li>
                <li>Identity and Gender crisis</li>
                <li>Substance abuse</li>
                <li>Gaming/ Social Media/ Mobile Addicts</li>
                <li>Elderly Support Group</li>
              </ul>
              <div className="hdrsubs-butns">
                <button>Know More</button>
                <img src={Kadhoolu} alt="" />
              </div>
            </div>
            <div className="Subscribe-box">
              <div className="Subscribe-box-2">
                <div>
                  <h1>Psychologists available via Phone consultation !</h1>
                  {/* <p>Offline & Online weekly meetup</p> */}
                </div>
                {/* <img src={FreeMember} style={{ width: 100 }} alt="" /> */}
              </div>

              <ul className="Support-group">
                <li>Bullying, Body Shaming, Cyber Trolling</li>
                <li>Low Self Esteem / Suicidal Tendencies </li>
                <li>Introverts</li>
              </ul>
              <div className="hdrsubs-butns-a">
                <button>Know More</button>
                <img src={Doc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hdr-caro">
        <div className="caro-heading-tag">
          <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
            <span>One Platform, Multiple touchpoints</span>
            <p>Podcast</p>
            <h1>Everyone</h1>
          </div>
          <div className="element">
            {/* <img
              src={Elements}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              alt=""
            /> */}
            {/* <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p> */}
          </div>
          <img
            src={Think}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            alt=""
          />
        </div>
        <div className="subscribe-caro-container">
          <div className="slider-container">
            <Slider {...settings}>
              {caro.map((item) => {
                return (
                  <div>
                    <div className="caro-for-hdr">
                      <img src={item.img} alt="" />
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <button>Discover</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
