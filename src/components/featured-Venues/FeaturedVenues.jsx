import React from "react";
import "./featuredVenues.css";

const FeaturedVenues = () => {
  return (
    <>
      <section className="featured-venues-area">
        <div className="featured-venues">
          <div className="featured-venues-title">
            <h2 className="section-title font-switzer">Featured venues</h2>
          </div>

          {/* React Slider */}
          <div className="section-content shadow-slider">
            <div className="img_placeholder">
              <img
                src="./featured-venues-Two.png"
                alt="featured-venues"
                className=" featured-venues-Two"
              />
              <img
                src="./featured-venuesOne.png"
                alt="featured-venues"
                className=" featured-venuesOne"
              />
            </div>
            <div className="content-area">
              <p className="pages font-boska">
                1<span>/10</span>
              </p>
              <div className="featured-content">
                <h4 className="content-title font-boska">Villa Balbianello</h4>
                <p className="subTitle font-switzer">Lake Como</p>
                <p className="peraOne font-switzer">
                  The whole complex consists of two residential buildings, a
                  church, and a portico (known as Loggia Durini) that can host
                  weddings and events in a truly unique setting.
                </p>
                <p className="peraTwo font-switzer">
                  But the special feature of Villa Balbianello is above all the
                  vast garden that surrounds the dwellings, with magnificent
                  holm oaks pruned into an umbrella shape so as to offer a
                  splendid view of Lake Como from inside the...
                  <a href="#">View more</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVenues;
