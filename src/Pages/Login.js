import React, { useState } from "react";
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
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log("Login Form submitted :", formData);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
          <form onSubmit={handleSubmit}>
            <div className="inside-sigup-from">
              <div className="form-input-a">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error-input" : ""} // Apply the error-input class if there's an error
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
              <div className="form-input-b">
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error-input" : ""} // Apply the error-input class if there's an error
                />
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>
            </div>
            <div className="login-btm">
              <div className="signup-aggry-form">
                <button type="submit">Login</button>
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
