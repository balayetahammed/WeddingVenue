import React from "react";
import FeaturedVenues from "../featured-Venues/FeaturedVenues";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";

import "./featureVenuesSlider.css";

const FeatureVenuesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CgArrowRight />,
    prevArrow: <CgArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="features-area">
        <div className="features-area-container container">
          <Slider {...settings}>
            <div>
              <FeaturedVenues />
            </div>
            <div>
              <FeaturedVenues />
            </div>
            <div>
              <FeaturedVenues />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default FeatureVenuesSlider;
