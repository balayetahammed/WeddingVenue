import React from "react";
import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/Hero";
import Locations from "../components/locations/Locations";
import FeatureVenuesSlider from "../components/featured-venues-slider/FeatureVenuesSlider";
import Services from "../components/Services-part/Services";
import Portfolios from "../components/portfolios/Portfolios";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/Contact-us/ContactUs";
import FeaturedVenues from "../components/featured-Venues/FeaturedVenues";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Locations />
      <FeatureVenuesSlider />
      <Services />
      <Portfolios />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
