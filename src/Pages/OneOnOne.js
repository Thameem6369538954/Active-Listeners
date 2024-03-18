import React from "react";
import "../Css/OneOnOne.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import Greenbg from "../Images/Greenbg.png";
import emoji from "../Images/emoji.png";
const OneOnOne = () => {
  return (
    <div>
      <Navbar />
      <div className="oneonone-main">
        <div className="therapy-heading">
          <p>Therapy for you!</p>
          <h1>One-on- one Session</h1>
          <h2>Preppers</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <button className="get-support">Schedule Now</button>
        </div>
        <div className="green-bourd-grief">
          <div className="card-grif">
            {/* <div className="circle">
              <img src={Roundb} alt="" />
            </div>
            <div className="circle-b">
              <img src={Rounda} alt="" />
            </div> */}

            <div className="container-speek-a">
              <img src={Greenbg} />

              <div className="centered">
                <div className="para">
                  <p>
                    Transformative support for those seeking clarity and
                    understanding through active listening.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="therapy-heading">
        <p>Therapies in senses Resurrecction</p>
        <h1>We offer</h1>
        <h2>Multiple therapies</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
        {/* <button>Schedule Now</button> */}
      </div>
      <div className="weekly-meetup-box-container">
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>Body essential salts & oils</h2>
          <p>
            Experience our unique approach to therapy through the incorporation
            of essential oils and salts into your diet. Discover the
            transformative power of these enriching ingredients, carefully
            selected to nourish your body and elevate your well-being from
            within
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>Music</h2>
          <p>
            Immerse yourself in the healing power of music. Our therapy sessions
            offer carefully curated playlists designed to soothe the soul and
            promote relaxation. Let the melodies guide you on a journey of
            self-discovery and emotional healing
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>recommended Diets</h2>
          <p>
            Discover personalised dietary plans tailored to your unique needs
            and goals. Our expert nutritionists will guide you towards a
            healthier lifestyle through balanced and nourishing meal
            recommendations. Say goodbye to guesswork and hello to optimal
            health with our customised diet plans.
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />
          <h2>mandala art books</h2>
          <p>
            Explore the world of mandala art with our collection of inspiring
            books. Discover a treasure trove of intricate designs, step-by-step
            tutorials, and creative insights to help you unleash your inner
            artist and create stunning mandalas. Whether you're a beginner or an
            experienced artist, our mandala art books are the perfect companion
            on your creative journey
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
          <img src={emoji} alt="" />
          <h2>DIYs</h2>
          <p>
            Experience the joy of creating and crafting with our DIY projects.
            From handmade gifts to home decor and beyond, discover endless
            possibilities for expressing your creativity and making something
            uniquely yours. Dive into the world of DIY and unleash your
            imagination today!
          </p>
        </div>
        <div className="weeekly-meetup-box">
          <img src={emoji} alt="" />

          <h2>Aroma Therapy</h2>
          <p>
            Relax with our aromatherapy sessions. Enjoy the pleasant scents of
            natural oils to help you feel calm and balanced. Stress will melt
            away, and you'll feel refreshed and rejuvenated.
          </p>
        </div>
      </div>
      <button className="get-support">Schedule Now</button>
      <div className="oneonone-form">
        <div className="get-form">
          <form>
            <h1>Get in Touch</h1>
            <p>With us</p>
            <div className="form-inputs">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Message" />
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

      <Footer />
    </div>
  );
};

export default OneOnOne;
