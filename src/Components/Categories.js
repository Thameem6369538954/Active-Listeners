import React from "react";
import "../Css/Categories.css";
import emoji from "../Images/emoji.png";
import chat from "../Images/chat.png";
import weekly from "../Images/weekly.png";
import community from "../Images/community.png";
const Categories = () => {
  return (
    <div>
      <div className="categories-main">
        <div className="cate-yellow-box">
          <h1>Statisctics and data video</h1>
        </div>
        <div className="cate-left-box">
          <div className="box1">
            <img src={community} alt="" />
            <h2>Mobile Addiction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="box2">
            <img src={chat} alt="" />
            <h2>Social Media Addiction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="box3">
            <img src={weekly} alt="" />
            <h2>Gaming Addiction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="box4">
            <img src={emoji} alt="" />
            <h2>Entertainment & Performance Addiction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <button>Discover How?</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
