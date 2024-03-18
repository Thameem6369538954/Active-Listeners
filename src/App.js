import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Teletherapy from "./Pages/Teletherapy";
import GriefSupport from "./Pages/GriefSupport";
import Corediscover from "./Pages/Corediscover";
import Podcast from "./Pages/Podcast";
import GoalVision from "./Pages/GoalVision";
import Senses from "./Pages/Senses";
import OneOnOne from "./Pages/OneOnOne";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import EarlyAgeGadgetExposure from "./Pages/EarlyAgeGadgetExposure";
import AdaptationtoMobilePhones from "./Pages/AdaptationtoMobilePhones";
import CurrentTimes from "./Pages/CurrentTimes";
import LearningandFocus from "./Pages/LearningandFocus";
import MobileAddiction from "./Pages/MobileAddiction.js";
import GamingAddiction from "./Pages/GamingAddiction.js";
import SocialMediaAddiction from "./Pages/SocialMediaAddiction.js";
import EntertainmentandperformanceAddiction from "./Pages/EntertainmentandperformanceAddiction.js";
import Hiring from "./Pages/Hiring.js";
import TeamPage from "./Pages/TeamPage.js";
import HiringForm from "./Pages/HiringForm.js";
import Preppers from "./Pages/Preppers.js";
import SideBar from "./AdminPanel/SideBar.js";
import Adminpanel from "./AdminPanel/Adminpanel.js";
import GriefsupportGroup from "./Pages/GriefsupportGroup.js";
import loading from "./Anime/loading.json";
import Lottie from "lottie-react";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TeamPage" element={<TeamPage />} />
          <Route path="/GriefsupportGroup" element={<GriefsupportGroup />} />
          <Route path="/Adminpanel" element={<Adminpanel />} />
          <Route path="/Preppers" element={<Preppers />} />
          <Route path="/HiringForm" element={<HiringForm />} />
          <Route path="/Hiring" element={<Hiring />} />
          <Route
            path="/EntertainmentandperformanceAddiction"
            element={<EntertainmentandperformanceAddiction />}
          />
          <Route
            path="/SocialMediaAddiction"
            element={<SocialMediaAddiction />}
          />
          <Route path="/GamingAddiction" element={<GamingAddiction />} />

          <Route path="/MobileAddiction" element={<MobileAddiction />} />
          <Route path="/LearningandFocus" element={<LearningandFocus />} />
          <Route path="/CurrentTimes" element={<CurrentTimes />} />
          <Route
            path="/AdaptationtoMobilePhones"
            element={<AdaptationtoMobilePhones />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/OneOnOne" element={<OneOnOne />} />
          <Route path="/Senses" element={<Senses />} />
          <Route path="/GoalVision" element={<GoalVision />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Corediscover" element={<Corediscover />} />
          <Route path="/GriefSupport" element={<GriefSupport />} />
          <Route path="/Teletherapy" element={<Teletherapy />} />
          <Route
            path="/EarlyagegadgetExposure"
            element={<EarlyAgeGadgetExposure />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
