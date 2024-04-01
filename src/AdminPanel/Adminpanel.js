import React from "react";
import { Link } from "react-router-dom";

const Adminpanel = () => {
  return (
    <div>
      <Link to="/Adminpanel/SideBar">
        <h1>hellow world</h1>
      </Link>
      <h1>
        <Link to="/Adminpanel/CoreDiscoveries">Core</Link>
      </h1>
    </div>
  );
};

export default Adminpanel;
