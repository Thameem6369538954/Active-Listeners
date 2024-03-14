import React, { useEffect, useRef, useState } from "react";
import "../Css/GriefsupportGroup.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import SmallElements from "../Images/SmallElements.png";
import Grief from "../Images/Grief.png";
import Navarrow from "../Images/Navarrow.png";
import Elements from "../Images/Elements.png";
import THands from "../Images/THands.png";
import Think from "../Images/Think.svg";
import Reg from "../Images/Reg.png";
import Psyco from "../Images/Psyco.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GriefsupportGroup = () => {
  const [day, setDay] = useState("00");
  const [hours, setHours] = useState("00");
  const [minute, setMinute] = useState("00");
  const [sec, setSec] = useState("00");

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("April 16, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        setDay(days.toString().padStart(2, "0"));
        setHours(hours.toString().padStart(2, "0"));
        setMinute(minutes.toString().padStart(2, "0"));
        setSec(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  //   carsel

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // carosel

  const employees = [
    {
      id: 1,
      name: "Jennifer kale",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 2,
      name: "Anam Fatima",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 3,
      name: "Joice Lincy",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 4,
      name: "Ajay",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 5,
      name: "Aleeshya krishna",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 6,
      name: "Dhanasekar",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 7,
      name: "Dhinesh",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 8,
      name: "Harris",
      position: "Psychologist",
      image: Psyco,
    },
    {
      id: 9,
      name: "Sankar",
      position: "Psychologist",
      image: Psyco,
    },
  ];

  return (
    <div>
      <Navbar />
      {/* header */}
      <div className="gs-header-main">
        <div className="gs-header">
          <div className="gs-header-text">
            <p>
              Contact us to get help <img src={SmallElements} alt="" />
            </p>
            <h1>Grief Support</h1>
            <h2>Group</h2>
            <br></br>
            {/* <img src={Yellowline} className="Yellowline" alt="" /> */}
            <br></br>
            <div className="gs-header-inner-text">
              <h5>
                A safe space to share experiences, connect with others, and
                receive support while navigating the challenges of grieving
                together.
              </h5>
              <div className="button">
                <button>Get Support</button>
                {/* <img src={Navarrow} alt="" /> */}
              </div>
              <img src={Elements} alt="" />
            </div>
          </div>
          <img src={Grief} alt="" />
        </div>
      </div>
      {/* Green-box */}
      <div className="gsg-green-bar">
        <div className="gsg-box">
          <h1>April 16th, 2024</h1>
          <div className="black-round">
            <h3>Get Grief Support on</h3>
          </div>
          <h1>At 15:00 pm</h1>
        </div>
      </div>
      {/* Timer-box */}
      <div className="Time-box-container">
        <div className="time-box">
          <h1>{day}</h1>
          <p>Days</p>
        </div>
        <span>:</span>
        <div className="time-box">
          <h1>{hours}</h1>
          <p>Hours</p>
        </div>
        <span>:</span>
        <div className="time-box">
          <h1>{minute}</h1>
          <p>Min</p>
        </div>
        <span>:</span>
        <div className="time-box">
          <h1>{sec}</h1>
          <p>Sec</p>
        </div>
      </div>
      {/* color-boxes */}
      <div className="color-box-main">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="box-header">
          <div className="therapy-heading">
            <p>Meetup group</p>
            <h1>Topics to be</h1>
            <h2>Discussed</h2>
          </div>
          <div className="color-main-boxese">
            <div class="palette">
              <div class="color">
                <div className="colorbox-inside">
                  <img src={THands} alt="" />
                  <h1>
                    How to bring the<br></br> Self Confidence back
                  </h1>
                  <p>
                    A safe space to share experiences, connect with others, and
                    receive support while navigating the challenges of grieving
                    together.
                  </p>
                </div>
              </div>
              <div class="color">
                <div className="colorbox-inside">
                  <img src={THands} alt="" />
                  <h1>Tips to Get your de-addicted to social media</h1>
                  <p>
                    A safe space to share experiences, connect with others, and
                    receive support while navigating the challenges of grieving
                    together.
                  </p>
                </div>
              </div>
              <div class="color">
                <div className="colorbox-inside">
                  <img src={THands} alt="" />
                  <h1>Maintain you work life Balance</h1>
                  <p>
                    A safe space to share experiences, connect with others, and
                    receive support while navigating the challenges of grieving
                    together.
                  </p>
                </div>
              </div>

              <div class="color">
                <div className="colorbox-inside">
                  <img src={THands} alt="" />
                  <h1>How to bring the Self Confidence back</h1>
                  <p>
                    A safe space to share experiences, connect with others, and
                    receive support while navigating the challenges of grieving
                    together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* from-this-form */}
      <div className="benefit-boxes-main">
        <div className="therapy-heading">
          <p>Meetup groups developed and Delivered By Psychologists</p>
          <h1>What you will gain</h1>
          <h2>From this meeetup</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
        </div>
        <div>
          <div className="benefit-box-grid">
            <div className="benefit-inside-box">
              <img src="" alt="" />
              <h2>Deeper Family Connections</h2>
              <p>
                Build lasting bonds through improved communication and shared
                experiences.
              </p>
            </div>

            <div className="benefit-inside-box">
              <img src="" alt="" />
              <h2>Enhanced Learning and Focus</h2>
              <p>
                Propel your loved ones toward academic and personal success with
                sharpened focus and engagement.
              </p>
            </div>
            <div className="benefit-inside-box">
              <img src="" alt="" />
              <h2>Stress Reduction</h2>
              <p>
                Let the worries of the day melt away, creating a calm
                environment for all family members.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="benefit-box-grid">
            <div className="benefit-inside-box">
              <img src="" alt="" />
              <h2>Personal Growth</h2>
              <p>
                Empower every individual to explore their interests, overcome
                challenges, and achieve their goals.
              </p>
            </div>

            <div className="benefit-inside-box">
              <img src="" alt="" />
              <h2>Balanced Digital Life</h2>
              <p>
                Strike the perfect balance with technology, ensuring it enriches
                rather than detracts from your family's life.
              </p>
            </div>
            <div className="benefit-inside-box">
              <img src="" alt="" />
              <h2>Balanced Digital Life</h2>
              <p>
                Improved mental health through our therapeutic interventions is
                achievable
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Psychologists */}
      <div className="Psychologists-main">
        <div className="Psychologists-container">
          <div className="therapy-heading">
            <p>Meetup groups developed and Delivered By Psychologists</p>
            <h1>What you will gain</h1>
            <h2>From this meeetup</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
          </div>
          <div className="goal-box-container-hole">
            <Slider {...settings}>
              {employees.map((employee) => (
                <div>
                  <div className="goal-box-container">
                    <img src={employee.image} alt="" />
                    <div className="positon-name">
                      <p style={{ color: "green" }}>{employee.position}</p>
                      <h1>{employee.name}</h1>
                    </div>
                    <div className="caro-follw">
                      <div className="line-caro"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* price-heading */}
      <div className="price-heading">
        <div className="caro-heading-tag-a">
          <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
            <span>Meetup groups developed and Delivered By Psychologists</span>
            <p>Grab the opportunity</p>
            <h1>For this month</h1>
          </div>
          <div className="element">
            {/* <img
              src={Elements}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              alt=""
            /> */}
            {/* <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p> */}
          </div>
          <img
            src={Reg}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            alt=""
          />
        </div>
        <div className="buttom-txt-gs">
          <span>
            A safe space to share experiences, connect with others, and receive
            support while navigating.
          </span>
        </div>
      </div>
      {/* Booking-Seats */}
      <div className="booking-seats">
        <div className="seat-indecater">
          <div className="dis">
            <div className="indiecate-box"></div>
            <p>Available Seats</p>
          </div>
          <div className="dis">
            <div className="indiecate-box-b"></div>
            <p>Reserved Seats</p>
          </div>
        </div>
      </div>
      {/* seet-box */}
      <div className="seat-box-container">
        <main>
          <article class="orange">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </article>
          <article class="orange">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </article>
          <article class="orange">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </article>
          <article class="orange">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </article>
        </main>
      </div>
      {/* GriefSupport-form */}
      <div className="grief-suppot-form">
        <h1>Enroll Now in </h1>
        <h2>Grief Support Group</h2>
        <div className="grif-form-inputs">
          <div class="container-form">
            <form action="submit">
              <div class="form first">
                <div class="details personal">
                  <div class="fields">
                    <div class="radio-buttons-container">
                      <div class="radio-button">
                        <label>Enroll as: </label>
                        <input
                          name="radio-group"
                          id="radio2"
                          class="radio-button__input"
                          type="radio"
                        />
                        <label for="radio2" class="radio-button__label">
                          <span class="radio-button__custom"></span>
                          Parent
                        </label>
                      </div>
                      <div class="radio-button">
                        <input
                          name="radio-group"
                          id="radio1"
                          class="radio-button__input"
                          type="radio"
                        />
                        <label for="radio1" class="radio-button__label">
                          <span class="radio-button__custom"></span>
                          Carer
                        </label>
                      </div>
                      <div class="radio-button">
                        <input
                          name="radio-group"
                          id="radio3"
                          class="radio-button__input"
                          type="radio"
                        />
                        <label for="radio3" class="radio-button__label">
                          <span class="radio-button__custom"></span>
                          Mentor/ Educator
                        </label>
                      </div>
                    </div>
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
        {/* <form></form> */}
      </div>
      <Footer />
    </div>
  );
};

export default GriefsupportGroup;
