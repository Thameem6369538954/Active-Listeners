import React from "react";
import "../Css/Therapycategories.css";
import Yellowline from "../Images/Yellowline.png";
const Therapycategories = () => {
  return (
    <div>
      <div className="therapy-cate">
        <div className="therapy-heading">
          <p>One Platform, Multiple touchpoints</p>
          <h1>We are here to</h1>
          <h2>Help</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>

        <div className="theropy-box-main">
          <div className="therapy-box"></div>
          <div className="therapy-box"></div>
          <div className="therapy-box"></div>
          <div className="therapy-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Therapycategories;
