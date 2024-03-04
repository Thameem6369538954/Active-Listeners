import React from "react";
import "../Css/GriefSupport.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import emoji from "../Images/emoji.png";
import joystick from "../Images/Joystick.png";
import Handsack from "../Images/Handsack.png";
import Clap from "../Images/Clap.png";
import { TiArrowRightThick } from "react-icons/ti";
const GriefSupport = () => {
  return (
    <div>
      <Navbar />
      <div className="grief-main">
        <div className="grief-main-heading">
          <span>Contact us to get help</span>
          <h1>Grief Support</h1>
          <p>Group</p>
          <img src={Yellowline} className="Yellowline" alt="" />
          <h2>
            A safe space to share experiences, connect with others, and receive
            support while navigating the challenges of grieving together.
          </h2>
        </div>

        <div className="green-bourd-grief">
          <div class="card-grif">
            <div class="circle">
              <img src={Roundb} alt="" />
            </div>
            <div class="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div class="card-inner">
              <div>
                <h1>Listening: the ultimate healer </h1>
                <p>With in</p>
              </div>

              <img src={Kadhoolu} alt="" />
            </div>
          </div>
        </div>
        <div className="therapy-heading">
          <p>Packages for you! </p>
          <h1>OFFLINE & ONLINE</h1>
          <h2>Weekly Meetup</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>

        <div className="weekly-meetup-box-container">
          <div className="weeekly-meetup-box">
            <img src={Clap} alt="" />
            <h2>Family, Relationships & Divorce</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="weeekly-meetup-box">
            <img src={emoji} alt="" />
            <h2>Loss of Loved Ones/ Relocation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="weeekly-meetup-box">
            <img src={emoji} alt="" />
            <h2>Identity and Gender crisis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="weeekly-meetup-box">
            <img src={emoji} alt="" />
            <h2>Substance abuse</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          {/* <div className="weeekly-meetup-box">
            <img src={Clap} alt="" />
            <h2>Family, Relationships & Divorce</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div> */}
          <div className="weeekly-meetup-box">
            <img src={joystick} alt="" />
            <h2>Gaming/ Social Media/ Mobile Addicts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="weeekly-meetup-box">
            <img src={Handsack} alt="" />

            <h2>Felderly Support Group</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
        </div>
        <div className="tele-buttons">
          <button>Get Support</button>
          <p>or Call us on +91 82793 83922</p>
          <TiArrowRightThick className="arrow-for-tele" />
        </div>

        <div className="grief-suppot-form">
          <h1>Enroll Now in </h1>
          <h2>Grief Support Group</h2>
          <div className="grif-form-inputs">
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
                        <label>Country </label>
                        <div class="custom-select">
                          <select>
                            <option value="0">Select Country :</option>
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
                        </div>
                      </div>
                      <div class="input-field">
                        <label>State </label>
                        <div class="custom-select">
                          <select>
                            <option value="0">Select State:</option>
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
                        </div>
                      </div>
                      <div class="input-field">
                        <label>Support in</label>
                        <div class="custom-select">
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
                        </div>
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

                  {/* <div class="details ID">
                    <span class="title">Identity Details</span>

                    <div class="fields">
                      <div class="input-field">
                        <label>ID Type</label>
                        <input
                          type="text"
                          placeholder="Enter ID type"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>ID Number</label>
                        <input
                          type="number"
                          placeholder="Enter ID number"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Issued Authority</label>
                        <input
                          type="text"
                          placeholder="Enter issued authority"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Issued State</label>
                        <input
                          type="text"
                          placeholder="Enter issued state"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Issued Date</label>
                        <input
                          type="date"
                          placeholder="Enter issued date"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Expiry Date</label>
                        <input
                          type="date"
                          placeholder="Enter expiry date"
                          required
                        />
                      </div>
                    </div>
                    <button class="nextBtn">
                      <span class="btnText">Next</span>
                      <i class="uil uil-navigator"></i>
                    </button>
                  </div> */}
                </div>

                {/* <div class="form second">
                  <div class="details address">
                    <span class="title">Address Details</span>

                    <div class="fields">
                      <div class="input-field">
                        <label>Address Type</label>
                        <input
                          type="text"
                          placeholder="Enter address type"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Nationality</label>
                        <input
                          type="date"
                          placeholder="Enter nationality"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>State</label>
                        <input
                          type="text"
                          placeholder="Enter your state"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>District</label>
                        <input
                          type="text"
                          placeholder="Enter your district"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Block Number</label>
                        <input
                          type="number"
                          placeholder="Enter block number"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Ward Number</label>
                        <input
                          type="text"
                          placeholder="Enter ward number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="details family">
                    <span class="title">Family Details</span>

                    <div class="fields">
                      <div class="input-field">
                        <label>Father Name</label>
                        <input
                          type="text"
                          placeholder="Enter father name"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Mother Name</label>
                        <input
                          type="text"
                          placeholder="Enter mother name"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Grand Father</label>
                        <input
                          type="text"
                          placeholder="Enter grandfther name"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Spouse Name</label>
                        <input
                          type="text"
                          placeholder="Enter spouse name"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Father in Law</label>
                        <input
                          type="text"
                          placeholder="Father in law name"
                          required
                        />
                      </div>

                      <div class="input-field">
                        <label>Mother in Law</label>
                        <input
                          type="text"
                          placeholder="Mother in law name"
                          required
                        />
                      </div>
                    </div>
                    <div class="buttons">
                      <div class="backBtn">
                        <i class="uil uil-navigator"></i>
                        <span class="btnText">Back</span>
                      </div>

                      <button class="submit">
                        <span class="submit">submit</span>
                        <i class="uil uil-navigator"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                <div className="agree-get">
                  <input type="checkbox" />
                  <p>
                    By Submitting your details means you agree with Privacy
                    Policy and Term & Conditions
                  </p>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
          {/* <form></form> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GriefSupport;
