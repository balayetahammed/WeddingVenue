import React, { useState } from "react";
import "./navbar.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  // Sticky Navbar on Scroll
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <>
      <nav className={fix ? "navbar-area fixed" : "navbar-area"}>
        <div className="navbar container">
          <div className="logo">
            <img src="./logo.png" alt="Logo" />
          </div>
          <div className="nav-bar">
            <ul>
              <li>
                <a href="#" className=" font-switzer">
                  Browse
                </a>
              </li>
              <li>
                <a href="#" className=" font-switzer">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className=" font-switzer">
                  Contact us
                </a>
              </li>
              <li className="social-icons">
                <a href="#">
                  <FaFacebook className="icons" />
                </a>
                <a href="#">
                  <FaInstagram className="icons" />
                </a>
                <a href="#">
                  <FaTwitter className="icons" />
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <ResponsiveNav />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
