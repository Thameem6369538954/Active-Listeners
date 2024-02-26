import React from "react";
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/OneOnOne" element={<OneOnOne />} />
          <Route path="/Senses" element={<Senses />} />
          <Route path="/GoalVision" element={<GoalVision />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Corediscover" element={<Corediscover />} />
          <Route path="/GriefSupport" element={<GriefSupport />} />
          <Route path="/Teletherapy" element={<Teletherapy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
