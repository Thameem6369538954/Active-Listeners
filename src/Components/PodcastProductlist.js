import React, { useState } from "react";
import "../Css/navforpotcaste.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emoji from "../Images/emoji.png";
const PodcastProductlist = () => {
  const [productlist, setProductlist] = useState([
    {
      id: 1,
      episode: 1,
      name: "Social Media de-addiction Tips",
      EpiImage: require("../Images/Adiction.png"),
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Social Media",
      cateB: "Mental health",
      // cateC: "",
      // cateD: "",
    },
    {
      id: 2,
      episode: 2,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "Loneliness due to Gaming",
      EpiImage: require("../Images/Lonely .png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Loneliness",
      cateB: "health",
      cateC: "Gaming",
      // cateD: "",
    },
    {
      id: 3,
      episode: 3,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "How to handle your  Teenage Children",
      EpiImage: require("../Images/GamingAddiction.png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "teenange",
      cateB: "health",
      cateC: "parents",
      // cateD: "",
    },
    {
      id: 4,
      episode: 4,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "Are you perplexed mind Person?",
      EpiImage: require("../Images/Untitled_Artwork 22.png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Mental Guide",
      cateB: "health",
      // cateC: "",
      // cateD: "",
    },
    {
      id: 5,
      episode: 5,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "Why WFH is preffered?",
      EpiImage: require("../Images/Untitled_Artwork 16.png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Healthy Life",
      cateB: "health",
      // cateC: "",
      // cateD: "",
    },
    {
      id: 6,
      episode: 6,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "Disconnect to Reconnect",
      EpiImage: require("../Images/Disconnect to reconnect .png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Relocation",
      cateB: "health",
      // cateC: "",
      // cateD: "",
    },
  ]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <div>
      <div className="product-list-nav">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>All</h3>
            </div>
            <div>
              <h3>Relocation </h3>
            </div>
            <div>
              <h3>Teenage</h3>
            </div>
            <div>
              <h3>Parenting</h3>
            </div>
            <div>
              <h3>Social media- de addiction</h3>
            </div>
            <div>
              <h3>Gaming- de addiction</h3>
            </div>
          </Slider>
        </div>
      </div>
      <div className="searchubar-for-podcast">
        <div class="searchBox">
          <input
            class="searchInput"
            type="text"
            name=""
            placeholder="Search something"
          />
          <button class="searchButton" href="#">
            Search
          </button>
        </div>
      </div>
      <div className="product-list">
        {productlist.map((list) => {
          return (
            <div>
              <div className="podcast-box">
                <div className="boxtop-tems">
                  <div>
                    <img src={list.EpiImage} alt="" />
                  </div>
                  <div>
                    <p>
                      Episode
                      <span>{list.episode}</span>
                    </p>
                    <h1>{list.name}</h1>
                    <p>{list.discribtions}</p>
                  </div>
                </div>
                <div className="potcast-category">
                  <div>
                    <button>{list.cateA}</button>
                    <button>{list.cateB}</button>
                    <button>{list.cateC}</button>
                    {/* <button>{list.cateD}</button> */}
                  </div>
                  <div class="card___wrapper-acounts">
                    <p>Hosted by: </p>
                    <div class="card__acounts">
                      <img src={list.fravatara} alt="" />
                      <img src={list.fravatarb} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="potcaste-bottom-btn">
        <button>Learn More</button>
      </div>
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
    </div>
  );
};

export default PodcastProductlist;
