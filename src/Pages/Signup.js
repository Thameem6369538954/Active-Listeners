import React from "react";
import "../Css/Signup.css";
import EmojiA from "../Images/EmojiA.png"
import ALlogo from "../Images/ALlogo.png";
const Signup = () => {
  return (
    <div>
      <div className="signup-main">
        <div className="signup-top">
          <img src={EmojiA} alt="" />
          <img src={ALlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
