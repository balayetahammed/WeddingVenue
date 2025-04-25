import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer">
          <div className="footer-logo">
            <img
              className="footer-logo-one"
              src="./footer-logo.png"
              alt="Logo"
            />
            <img className="footer-logo-two" src="./logo(1).png" alt="Logo-1" />
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="#" className=" font-switzer">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className=" font-switzer">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className=" font-switzer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className=" font-switzer">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <a href="#">
              <FaFacebook className="icons" />
            </a>
            <a href="#">
              <FaInstagram className="icons" />
            </a>
            <a href="#">
              <FaTwitter className="icons" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
