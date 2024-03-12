import React from "react";
import "../Css/HiringForm.css";
import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Downarrow from "../Images/Downarrow.png";
const HiringForm = () => {
  return (
    <div>
      <Navbar />
      <div className="hiring-form-main">
        <div className="therapy-heading">
          <p>Our Goals</p>
          <h1>Join our Amazing</h1>
          <h2>Team</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <h4>
            <img src={Downarrow} className="down-arrow" alt="" /> Transformative
            support for those seeking clarity and understanding through active
            listening.
          </h4>
          <span className="form-position">
            Position Applied For : Psychologist
          </span>
        </div>
        <div className="hiring-form-holeconatiner">
          <div class="container-form">
            <form action="submit">
              <div class="form first">
                <div class="details personal">
                  <div class="fields">
                    <div class="input-field">
                      <label>Full Name</label>
                      <input
                        type="email"
                        placeholder="Enter your name"
                        id="email"
                        required
                      />
                    </div>

                    <div class="input-field">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        required
                      />
                    </div>

                    <div class="input-field">
                      <label>Mobile Number</label>
                      <input
                        type="number"
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>
                    <div class="input-field">
                      <label>Add Resume</label>
                      <input
                        type="file"
                        placeholder="Enter mobile number"
                        required
                        style={{ marginTop: "0px" }}
                      />
                      {/* <p>Resume</p> */}
                    </div>
                    <div class="input-field">
                      <label>Message</label>
                      <input
                        type="text"
                        placeholder="Enter mobile Message"
                        required
                        style={{ width: 800, height: 90 }}
                      />
                    </div>
                  </div>
                </div>
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
      <Footer />
    </div>
  );
};

export default HiringForm;
