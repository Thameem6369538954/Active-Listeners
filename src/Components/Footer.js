import React from "react";
import "../Css/Footer.css";
import ALlogo from "../Images/ALlogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import FlowerL from "../Images/FlowerL.png";
import FlowerR from "../Images/FlowerR.png";
const Footer = () => {
  return (
    <div>
      <div className="two-flower">
        <img src={FlowerL} alt="" />
        <img src={FlowerR} alt="" />
      </div>
      <div className="footer-main">
        <div className="footer-list">
          <ul className="logo">
            <li>
              <img src={ALlogo} alt="" />
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br></br>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br></br>
                enim ad minimuat.{" "}
              </p>
            </li>
            <li>Copyright © 2024 • Active Listeners.</li>
          </ul>
          <ul className="navigation">
            <li>
              <label>Navigation</label>
            </li>
            <li>Home</li>
            <li>Blog</li>
            <li>Engage</li>
            <li>podcast</li>
            <li>Login/Signup</li>
          </ul>
          {/* <ul className="legal">
            <li>
              <label>legal</label>
            </li>
            <li>Get in Touch</li>
            <li>Testimonials</li>
            <li>FAQ’S</li>
            <li>Help</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul> */}
          <ul className="contact">
            <li>
              <label>Contact Us</label>
            </li>
            <li>+91 7892858593</li>
            <li>
              399, 2nd Cross Rd, opposite the Paul hotel, HBCS Colony, <br></br>
              Amarjyoti Layout, Domlur, Bengaluru,<br></br> Karnataka 560071
            </li>
            <div className="footer-icons">
              <li>
                <FaFacebookF className="footer-icon" />
              </li>
              <li>
                <IoLogoYoutube className="footer-icon" />
              </li>
              <li>{/* <BsTwitterX className="footer-icon" /> */}</li>
            </div>
          </ul>
        </div>
        <div className="news-letter-main">
          <div className="news-letter">
            <p>Newsletter Sign Up</p>
            <input type="text" placeholder="Enter your email here..." />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
