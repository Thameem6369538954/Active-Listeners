import React, { useState } from "react";
import "../Css/Navbar.css";
import ALlogo from "../Images/ALlogo.png";
import { GiBottomRight3DArrow } from "react-icons/gi";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const CloseMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="Navbar-main">
        <div onClick={handleClick} className="nav-icons">
          {isOpen ? (
            <IoCloseOutline className="nav-icon" onClick={CloseMenu} />
          ) : (
            <RiMenu5Fill className="nav-icon" onClick={handleClick} />
          )}
          {/* <RiMenu5Fill className="nav-icon" />
          <IoCloseOutline className="nav-icon" /> */}
        </div>
        <nav>
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Footer</li>
          </ul>

          <div className="nav-icons"></div>
          <img src={ALlogo} alt="" />
          <div className="Login-btns">
            <button class="full-rounded">
              <span>Login</span>
              <div class="border full-rounded"></div>
            </button>

            <button class="full-rounded">
              <span>Sign up</span>
              <div class="border full-rounded"></div>
            </button>
            <GiBottomRight3DArrow />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
