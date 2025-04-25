import React, { useState } from "react";
import "./responsiveNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ResponsiveNav = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="responsiveNav">
        <GiHamburgerMenu
          onClick={() => setShow(!show)}
          className=" text-[18px] text-white cursor-pointer"
        />
        {show && (
          <div className="responsive-navbar">
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
              <li className="social-icons justify-center">
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
        )}
      </section>
    </>
  );
};

export default ResponsiveNav;
