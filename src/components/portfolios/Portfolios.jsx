import React from "react";
import "./portfolios.css";

const Portfolios = () => {
  return (
    <>
      <section className="portfolios-area">
        <div className="portfolios">
          <div className="portfolios-title">
            <h2 className=" font-switzer">Our portfolios</h2>
          </div>
          <div className="portfolios-car">
            <div className="card bg-[url(./portfolios1.png)]">
              <p className="font-switzer">THE WEDDING OF</p>
              <h3 className=" font-boska">Joy & Jordan</h3>
            </div>
            <div className="card bg-[url(./portfolios2.png)]">
              <p className="font-switzer">THE WEDDING OF</p>
              <h3 className=" font-boska">Dianne & Michael</h3>
            </div>
            <div className="card bg-[url(./portfolios3.png)]">
              <p className="font-switzer">THE WEDDING OF</p>
              <h3 className=" font-boska">Gabrielle & Simon</h3>
            </div>
            <div className="card bg-[url(./portfolios4.png)]">
              <p className="font-switzer">THE WEDDING OF</p>
              <h3 className=" font-boska">Zee & Adrian</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolios;
