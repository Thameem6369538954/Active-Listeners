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
          <div className="card-grif">
            <div className="circle">
              <img src={Roundb} alt="" />
            </div>
            <div className="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div className="card-inner">
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
          <p>or Call us on +91 90360 33300</p>
          <TiArrowRightThick className="arrow-for-tele" />
        </div>

        <div className="grief-suppot-form">
          <h1>Enroll Now in </h1>
          <h2>Grief Support Group</h2>
          <div className="grif-form-inputs">
            <div className="container-form">
              <form action="submit">
                <div className="form first">
                  <div className="details personal">
                    <div className="fields">
                      <div className="radio-buttons-container">
                        <div className="radio-button">
                          <label>Enroll as: </label>
                          <input
                            name="radio-group"
                            id="radio2"
                            className="radio-button__input"
                            type="radio"
                          />
                          <label for="radio2" className="radio-button__label">
                            <span className="radio-button__custom"></span>
                            Parent
                          </label>
                        </div>
                        <div className="radio-button">
                          <input
                            name="radio-group"
                            id="radio1"
                            className="radio-button__input"
                            type="radio"
                          />
                          <label for="radio1" className="radio-button__label">
                            <span className="radio-button__custom"></span>
                            Carer
                          </label>
                        </div>
                        <div className="radio-button">
                          <input
                            name="radio-group"
                            id="radio3"
                            className="radio-button__input"
                            type="radio"
                          />
                          <label for="radio3" className="radio-button__label">
                            <span className="radio-button__custom"></span>
                            Mentor/ Educator
                          </label>
                        </div>
                      </div>
                      <div className="input-field">
                        <label>Full Name</label>
                        <input
                          type="email"
                          placeholder="Enter your name"
                          id="email"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Mobile Number</label>
                        <input
                          type="number"
                          placeholder="Enter mobile number"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Country </label>
                        <div className="custom-select">
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
                      <div className="input-field">
                        <label>State </label>
                        <div className="custom-select">
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
                      <div className="input-field">
                        <label>Support in</label>
                        <div className="custom-select">
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

                      <div className="input-field">
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

                  {/* <div className="details ID">
                    <span className="title">Identity Details</span>

                    <div className="fields">
                      <div className="input-field">
                        <label>ID Type</label>
                        <input
                          type="text"
                          placeholder="Enter ID type"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>ID Number</label>
                        <input
                          type="number"
                          placeholder="Enter ID number"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Issued Authority</label>
                        <input
                          type="text"
                          placeholder="Enter issued authority"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Issued State</label>
                        <input
                          type="text"
                          placeholder="Enter issued state"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Issued Date</label>
                        <input
                          type="date"
                          placeholder="Enter issued date"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Expiry Date</label>
                        <input
                          type="date"
                          placeholder="Enter expiry date"
                          required
                        />
                      </div>
                    </div>
                    <button className="nextBtn">
                      <span className="btnText">Next</span>
                      <i className="uil uil-navigator"></i>
                    </button>
                  </div> */}
                </div>

                {/* <div className="form second">
                  <div className="details address">
                    <span className="title">Address Details</span>

                    <div className="fields">
                      <div className="input-field">
                        <label>Address Type</label>
                        <input
                          type="text"
                          placeholder="Enter address type"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Nationality</label>
                        <input
                          type="date"
                          placeholder="Enter nationality"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>State</label>
                        <input
                          type="text"
                          placeholder="Enter your state"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>District</label>
                        <input
                          type="text"
                          placeholder="Enter your district"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Block Number</label>
                        <input
                          type="number"
                          placeholder="Enter block number"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Ward Number</label>
                        <input
                          type="text"
                          placeholder="Enter ward number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="details family">
                    <span className="title">Family Details</span>

                    <div className="fields">
                      <div className="input-field">
                        <label>Father Name</label>
                        <input
                          type="text"
                          placeholder="Enter father name"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Mother Name</label>
                        <input
                          type="text"
                          placeholder="Enter mother name"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Grand Father</label>
                        <input
                          type="text"
                          placeholder="Enter grandfther name"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Spouse Name</label>
                        <input
                          type="text"
                          placeholder="Enter spouse name"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Father in Law</label>
                        <input
                          type="text"
                          placeholder="Father in law name"
                          required
                        />
                      </div>

                      <div className="input-field">
                        <label>Mother in Law</label>
                        <input
                          type="text"
                          placeholder="Mother in law name"
                          required
                        />
                      </div>
                    </div>
                    <div className="buttons">
                      <div className="backBtn">
                        <i className="uil uil-navigator"></i>
                        <span className="btnText">Back</span>
                      </div>

                      <button className="submit">
                        <span className="submit">submit</span>
                        <i className="uil uil-navigator"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                <div className="agree-get">
                  {/* <input type="checkbox" />
                  <p>
                    By Submitting your details means you agree with Privacy
                    Policy and Term & Conditions
                  </p> */}
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
