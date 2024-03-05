import React from "react";
import "../Css/Login.css";
import EmojiA from "../Images/EmojiA.png";
import ALlogo from "../Images/ALlogo.png";
import Yellowline from "../Images/Yellowline.png";
import ElementB from "../Images/ElementB.png";
import Tbox from "../Images/Tbox.png";
import { LiaFacebookF } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import LoginG from "../Images/LoginG.png";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="signup-main">
          <div className="signup-top">
            <img src={EmojiA} alt="" />
            <img
              src={ALlogo}
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </div>
          <div className="sigin-heading">
            <div>
              <img src={ElementB} className="ElementB" alt="" />
            </div>
            <div>
              {/* <p>Our Goals</p> */}
              <h1 style={{ marginTop: "25%" }}>Log in</h1>
              <h2 style={{ marginTop: "-22%", marginLeft: "30%" }}>Now</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
            </div>
            <div>
              <img src={Tbox} className="GreenRound" alt="" />
            </div>
          </div>
        </div>
        <div className="signup-form">
          <form>
            <div className="inside-sigup-from">
              <div className="form-input-a">
                <label>
                  Email<span>*</span>
                </label>
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-input-b">
                {/* <input type="text" placeholder="Name" /> */}
                <label>
                  Password<span>*</span>
                </label>
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <div className="login-btm">
              <div className="signup-aggry-form">
                <button>Login</button>
              </div>
            </div>
          </form>
          <div className="other-signup">
            <p>or Login using </p>
            <div className="ggl-fc-athentication">
              <div className="fb">
                <LiaFacebookF />
              </div>
              <div className="ggl">
                <FcGoogle />
              </div>
            </div>
            <p>
              Don't have an account?{" "}
              <NavLink to="/Signup">
                <span style={{ color: "#256C55" }}>Sign up</span>
              </NavLink>
            </p>
            <img
              src={LoginG}
              style={{ marginTop: "-20%", marginLeft: "68%", width: "20%" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
