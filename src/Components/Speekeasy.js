import React from "react";
import "../Css/Speekeasy.css";
import Greenbg from "../Images/Greenbg.png";
const Speekeasy = () => {
  return (
    <div>
      <div class="container-speek">
        <img src={Greenbg} />

        <div class="centered">
          <h1>Speak-Easy</h1>
          <h2>Therapy</h2>
          <div className="para">
            <p>
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speekeasy;
