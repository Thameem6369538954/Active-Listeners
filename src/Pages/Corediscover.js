import React from "react";
import "../Css/Corediscover.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hdrleft from "../Images/Hdrleft.png";
import Hdrright from "../Images/Hdrright.png";
import Yellowline from "../Images/Yellowline.png";
import Elements from "../Images/Elements.png";
import emoji from "../Images/emoji.png";
import Arrow from "../Images/Arrow.png";
import { TiArrowRightThick } from "react-icons/ti";
import Maskgroup from "../Images/Maskgroup.png";
import Net from "../Images/Net.png";
const Corediscover = () => {
  return (
    <div>
      <Navbar />
      <div className="dicover-header-container">
        {/* <img
          src={Hdrleft}
          data-aos="fade-right"
          data-aos-duration="1000"
          alt=""
        /> */}
        <div className="discover-hdr-text">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Contact us to get help
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="2000">
            Get Grief Support
          </h2>
          <h3 data-aos="fade-up" data-aos-duration="3000">
            with Active Listeners
          </h3>
          <img src={Yellowline} className="Yellowline" alt="" />
          <p>
            At Active Listeners, we have created a grief support group to extend
            our services to the needy you can join our grief support group and
            share your story with u. If you are addict of any of the given below
            .
          </p>
          <div className="dicover-top-btns">
            <div className="dicover-buttons">
              <button>Get Appointment</button>
              <p>Book Your Complimentary 15-min Call</p>
              <TiArrowRightThick className="discover-arrow-for-tele" />
            </div>
          </div>
        </div>
        <img src={Elements} alt="" />
        <img
          src={Hdrright}
          data-aos="fade-right"
          data-aos-duration="1000"
          alt=""
        />
      </div>
      <div className="discover-box-hole">
        <div className="discover-box-container">
          <div className="discover-box">
            <img src={emoji} alt="" />
            <h1>Cell Phone Addict</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="discover-box">
            <img src={emoji} alt="" />
            <h1>Social media addict</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="discover-box">
            <img src={emoji} alt="" />
            <h1>Gaming Addict</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
        </div>
        <button>Get Support</button>
      </div>
      <div className="discover-two-box-main">
        <div className="discover-tow-box">
          <div>
            <h1>Subscribe to Our Packages</h1>
            <img src={Arrow} style={{ marginTop: 60 }} alt="" />
          </div>
          <div>
            <img src={Maskgroup} alt="" />
          </div>
        </div>
        <div className="discover-tow-box">
          <div>
            <h1>Track your Progress</h1>
            <img src={Arrow} style={{ marginTop: 26 }} alt="" />
          </div>
          <div>
            <img src={Net} alt="" />
          </div>
        </div>
      </div>
      <div className="therapy-heading">
        <p>Contact us</p>
        <h1>Get in Touch</h1>
        <h2>With us!</h2>
      </div>
      <div className="dicover-text">
        <p>
          Transformative support for those seeking clarity and understanding
          through active listening.
        </p>
      </div>
      <div className="discover-contact-form">
        <form className="discover-form">
          <div class="input-container">
            <input required="" id="input" type="text" />
            <label class="label" for="input">
              Name:
            </label>
            <div class="underline"></div>
          </div>
          <div class="input-container">
            <input required="" id="input" type="text" />
            <label class="label" for="input">
              Email:
            </label>
            <div class="underline"></div>
          </div>
          <div class="input-container">
            <input required="" id="input" type="text" />
            <label class="label" for="input">
              Phone no.
            </label>
            <div class="underline"></div>
          </div>
          <div class="input-container">
            <select>
              <option value="0">Select Support:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
            <div className="label-sl" for="input"></div>
            <div class="underline"></div>
          </div>
          <div class="input-container">
            <input required="" id="input" type="text" />
            <label class="label" for="input">
              Message:
            </label>
            <div class="underline"></div>
          </div>
          <div className="agree-get">
            <input type="checkbox" />
            <p>
              By Submitting your details means you agree with Privacy Policy and
              Term & Conditions
            </p>
            <button>Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Corediscover;
