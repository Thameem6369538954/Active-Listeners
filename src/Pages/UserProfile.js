import React from "react";
import "../Css/UserProfile.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Settings from "../Pages/Settings";
const UserProfile = () => {
  return (
    <div>
      <Link to="/UserProfile/Settings">
        <p>Settins</p>
      </Link>
    </div>
  );
};

export default UserProfile;
