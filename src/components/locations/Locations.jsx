import React from "react";
import "./locations.css";
import { BsArrowUpRight } from "react-icons/bs";

const Locations = () => {
  return (
    <>
      <section className="locations-area">
        <div className="locations">
          <div className="locations-title">
            <h2 className="font-boska">Locations</h2>
            <p className="font-switzer">that you will remember forever</p>
          </div>
          <div className="locations-view">
            <div className="view bg-[url(./Florence.png)]">
              <p className="font-switzer">Florence</p>
            </div>
            <div className="view bg-[url(./San-Gamignano.png)]">
              <p className="font-switzer">San Gamignano</p>
            </div>
            <div className="view bg-[url(./Volterra.png)]">
              <p className="font-switzer">Volterra</p>
            </div>
            <div className="view bg-[url(./Chianti.png)]">
              <p className="font-switzer">Chianti</p>
            </div>
            <div className="view bg-[url(./Val-d’Orcia.png)]">
              <p className="font-switzer">Val d’Orcia</p>
            </div>
            <div className="view bg-[url(./Siena.png)]">
              <p className="font-switzer">Siena</p>
            </div>
            <div className="view bg-[url(./Lucca.png)]">
              <p className="font-switzer">Lucca</p>
            </div>
            <div className="view browse-more">
              <a href="#" className="flex justify-between">
                <p className="font-switzer">Browse More</p>
                <span className="pt-[14px] pr-[14px]">
                  <BsArrowUpRight className=" text-[15px] text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Shape Design */}
        <div className="shape"></div>
      </section>
    </>
  );
};

export default Locations;
