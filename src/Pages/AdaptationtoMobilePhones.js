import React from "react";

const AdaptationtoMobilePhones = () => {
  return (
    <div>
      <div className="home-main">
        <Navbar />
        <div className="header">
          <div className="header-container">
            <img
              src={earlyAgeleft}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            />
            <div className="hdr-text">
              <h1 data-aos="fade-up" data-aos-duration="1000">
                Early Age{" "}
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="2000">
                Gadget
              </h2>
              <h3 data-aos="fade-up" data-aos-duration="3000">
                Exposure
              </h3>
            </div>
            <img
              src={earlyAgeright2}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            />
          </div>
          <div className="hdr-btm-text">
            {/* <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p> */}
            <button>Talk to us</button>
          </div>

          {/* <div className="hdr-btm-text">
          <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p>
          <button>Why Active Listeners?</button>
        </div> */}
        </div>
        <div className="green-bourd-Earlyage">
          <div class="card-grif">
            <div class="circle">
              <img src={Roundb} alt="" />
            </div>
            <div class="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div class="card-inneR">
              <div className="card-inneR-text">
                <h1>Impact of</h1>
                <h1>Gadgts on</h1>
                <p>children</p>
              </div>
              <img src={earlyAgeBoxImg} alt="" />
            </div>
          </div>
        </div>
        <div className="getyoukow-main-container">
          <div className="getyoukow-container">
            <div className="getyouknow-txt">
              <h1>Get to know How much you are Attracted to Gadgets</h1>
              <button>Take Rest </button>
            </div>
            <div className="getyouknow-image">
              <img src={Maskgroup} alt="" />
            </div>
          </div>
          <div className="getyoukow-container">
            <div className="getyouknow-image">
              <img
                src={cover}
                style={{
                  width: "80%",
                  marginLeft: "10%",
                  borderRadius: "20px",
                }}
                alt=""
              />
            </div>
            <div className="getyouknow-txt">
              <h1>Get to know How much you are Attracted to Gadgets</h1>
              <button>Take Rest </button>
            </div>
            <img src={PodcastRed} className="getyoukow-image-red" alt="" />
          </div>
        </div>
        <Therapycategories />
        <GetinTouch />
        <Footer />
      </div>
    </div>
  );
};

export default AdaptationtoMobilePhones;
