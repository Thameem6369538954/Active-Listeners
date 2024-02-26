import React from "react";
import "../Css/GetinTouch.css";
import FlowerL from "../Images/FlowerL.png";
import FlowerR from "../Images/FlowerR.png";
const GetinTouch = () => {
  return (
    <div>
      <div className="getintouch-container">
        {/* <img src={FlowerL} alt="" /> */}
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
        {/* <img src={FlowerR} alt="" /> */}
      </div>
    </div>
  );
};

export default GetinTouch;
