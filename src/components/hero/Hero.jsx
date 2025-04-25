import React from "react";
import "./hero.css";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <section className="hero-area">
        <div className="hero">
          <h1 className="hero-title font-inknut-antiqua">
            Descover Your Perfrct US Wedding Venue
          </h1>
          <p className="hero-pera font-switzer">
            Sagittis adipiscing posuere id adipiscing aliquam posuere. Aliquet
            faucibus duis accumsan aliquet tempor diam dignissim suscipit. Nibh
            urna ut diam fames.
          </p>
          <div>
            <div className="scroll">
              <FaArrowDownLong className=" inline-block" />
            </div>
            <p className="scroll-pera font-switzer">Scroll</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
