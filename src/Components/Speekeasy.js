import React from "react";
import "../Css/Speekeasy.css";
import Greenbg from "../Images/Greenbg.png";
import { TiArrowRightThick } from "react-icons/ti";
import Yellowline from "../Images/Yellowline.png";
const Speekeasy = () => {
  return (
    <div>
      <div className="therapy-heading">
        <p>Therapy for you!</p>
        <h1>Speak-Easy Therapy</h1>
        <h2>Session</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
      </div>
      <div class="container-speek">
        <img src={Greenbg} />

        <div class="centered">
          <div className="para">
            <p>
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p>
          </div>
        </div>
      </div>
      <div className="tele-buttons">
        <button>Get Appointment</button>
        <p>Book Your Complimentary 15-min Call</p>
        <TiArrowRightThick className="arrow-for-tele" />
      </div>
    </div>
  );
};

export default Speekeasy;
