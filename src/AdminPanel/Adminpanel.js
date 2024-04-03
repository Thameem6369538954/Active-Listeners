import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CoreDiscoveries from "./CoreDiscoveries/CoreDiscoveries.js";

const Adminpanel = () => {
  return (
    <div>
      <Link to="/Adminpanel/SideBar">
        <h1>hellow world</h1>
      </Link>
      <h1>
        <Link to="/Adminpanel/CoreDiscoveries">Core</Link>
      </h1>

      <Routes>
        <Route path="/CoreDiscoveries" element={<h1>hi</h1>} />
        <Route path="/SideBar" element={<h1>hwlloq</h1>} />
      </Routes>
    </div>
  );
};

export default Adminpanel;
