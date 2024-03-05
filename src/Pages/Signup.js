import React from "react";
import "../Css/Signup.css";
import EmojiA from "../Images/EmojiA.png";
import ALlogo from "../Images/ALlogo.png";
import Yellowline from "../Images/Yellowline.png";
import ElementB from "../Images/ElementB.png";
import GreenRound from "../Images/GreenRound.png";
import { LiaFacebookF } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import CoffieCup from "../Images/CoffieCup.png";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="signup-main">
        <div className="signup-top">
          <img src={EmojiA} alt="" />
  
            <img src={ALlogo} onClick={()=>{navigate("/")}} style={{cursor:"pointer"}} alt="" />
          
        </div>
        <div className="sigin-heading">
          <div>
            <img src={ElementB} className="ElementB" alt="" />
          </div>
          <div>
            <p>Our Goals</p>
            <h1 style={{ marginTop: "-22%" }}>Signup</h1>
            <h2 style={{ marginTop: "-22%", marginLeft: "30%" }}>Now</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
          </div>
          <div>
            <img src={GreenRound} className="GreenRound" alt="" />
          </div>
        </div>
      </div>
      <div className="signup-form">
        <form>
          <div className="inside-sigup-from">
            <div className="form-input-a">
              <label>
                Name<span>*</span>
              </label>
              <input type="text" placeholder="Name" />
              <label>
                Email<span>*</span>
              </label>
              <input type="text" placeholder="Email" />
              <label>
                Phone Number<span>*</span>
              </label>
              <input type="Number" placeholder="Phone Number" />
            </div>
            <div className="form-input-b">
              {/* <input type="text" placeholder="Name" /> */}
              <label>
                Password<span>*</span>
              </label>
              <input type="password" placeholder="Password" />
              <label>
                Confirm Password<span>*</span>
              </label>
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="signup-aggry-form">
            <div>
              <input type="checkbox" />
              <p>
                By Submitting your details means you agree with Privacy Policy
                and Term & Conditions
              </p>
            </div>
            <button>Signup</button>
          </div>
        </form>
        <div className="other-signup">
          <p>or Sign up using </p>
          <div className="ggl-fc-athentication">
            <div className="fb">
              <LiaFacebookF />
            </div>
            <div className="ggl">
              <FcGoogle />
            </div>
          </div>
          <p>
            Already have an Account?{" "}
            <NavLink to="/Login">
              <span style={{ color: "#256C55" }}>Log in</span>
            </NavLink>
          </p>
          <img
            src={CoffieCup}
            style={{ marginTop: "-20%", marginLeft: "68%", width: "20%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
