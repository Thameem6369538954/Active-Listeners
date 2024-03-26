import React, { useState } from "react";
import "../Css/UserProfile.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Settings from "../Pages/Settings";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaRegUser } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
const UserProfile = () => {
  const [username, setUsername] = useState("Ram Kumar");
  const [email, setEmail] = useState("example@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

  const [tempUsername, setTempUsername] = useState(username);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);

  const handleEditUsernameClick = () => {
    setIsEditingUsername(true);
    setTempUsername(username);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
    setTempEmail(email);
  };

  const handleEditPhoneNumberClick = () => {
    setIsEditingPhoneNumber(true);
    setTempPhoneNumber(phoneNumber);
  };

  const handleCancelUsernameClick = () => {
    setIsEditingUsername(false);
  };

  const handleCancelEmailClick = () => {
    setIsEditingEmail(false);
  };

  const handleCancelPhoneNumberClick = () => {
    setIsEditingPhoneNumber(false);
  };

  const handleSaveUsernameClick = () => {
    setUsername(tempUsername);
    setIsEditingUsername(false);
  };

  const handleSaveEmailClick = () => {
    setEmail(tempEmail);
    setIsEditingEmail(false);
  };

  const handleSavePhoneNumberClick = () => {
    setPhoneNumber(tempPhoneNumber);
    setIsEditingPhoneNumber(false);
  };

  const handleUsernameChange = (event) => {
    setTempUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setTempEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setTempPhoneNumber(event.target.value);
  };
  const handlesubmit = () => {
    toast.success("profile updated successfully!!");
  };
  return (
    <div>
      <Navbar />
      <div className="userprofile-main-conatiner">
        <div className="userprofile-hdr">
          <h1>
            {" "}
            <FaRegUser className="navarrow" />
            My Account
          </h1>
          <p>Manage your Account</p>
        </div>

        <div className="editable-details">
          <div>
            <div className="user-detailes">
              <h3>Username :</h3>
              {isEditingUsername ? (
                <>
                  <input
                    type="text"
                    value={tempUsername}
                    onChange={handleUsernameChange}
                  />
                  <button
                    onClick={handleSaveUsernameClick}
                    style={{
                      color: "green",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "25px",
                    }}
                  >
                    <FiSave />
                  </button>
                  <button
                    onClick={handleCancelUsernameClick}
                    style={{
                      color: "red",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "25px",
                    }}
                  >
                    <IoCloseCircleOutline />
                  </button>
                </>
              ) : (
                <>
                  <p>{username}</p>
                  <button
                    style={{
                      color: "Blue",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "20px",
                    }}
                    onClick={handleEditUsernameClick}
                  >
                    <FiEdit />
                  </button>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="user-detailes">
              <h3>Email :</h3>
              {isEditingEmail ? (
                <>
                  <input
                    type="text"
                    value={tempEmail}
                    onChange={handleEmailChange}
                  />
                  <button
                    onClick={handleSaveEmailClick}
                    style={{
                      color: "green",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "25px",
                    }}
                  >
                    <FiSave />
                  </button>
                  <button
                    onClick={handleCancelEmailClick}
                    style={{
                      color: "red",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "25px",
                    }}
                  >
                    <IoCloseCircleOutline />
                  </button>
                </>
              ) : (
                <>
                  <p>{email}</p>
                  <button
                    style={{
                      color: "Blue",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "20px",
                    }}
                    onClick={handleEditEmailClick}
                  >
                    <FiEdit />
                  </button>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="user-detailes">
              <h3>Phone Number :</h3>
              {isEditingPhoneNumber ? (
                <>
                  <input
                    type="text"
                    value={tempPhoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                  <button
                    onClick={handleSavePhoneNumberClick}
                    style={{
                      color: "green",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "25px",
                    }}
                  >
                    <FiSave />
                  </button>
                  <button
                    onClick={handleCancelPhoneNumberClick}
                    style={{
                      color: "red",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "25px",
                    }}
                  >
                    <IoCloseCircleOutline />
                  </button>
                </>
              ) : (
                <>
                  <p>{phoneNumber}</p>
                  <button
                    style={{
                      color: "Blue",
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "20px",
                    }}
                    onClick={handleEditPhoneNumberClick}
                  >
                    <FiEdit />
                  </button>
                </>
              )}
            </div>
            <div className="save-cancel">
              <button
                style={{
                  color: "White",
                  border: "none",
                  backgroundColor: "LightGreen",
                  borderRadius: "20px",
                  fontSize: "20px",
                  padding: "10px 40px",
                }}
                onClick={handlesubmit}
              >
                Save
              </button>
              <button
                style={{
                  color: "White",
                  border: "none",
                  backgroundColor: "Red",
                  borderRadius: "20px",
                  fontSize: "20px",
                  padding: "10px 40px",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="log-out">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
