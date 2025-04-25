import React from "react";
import "./services.css";

const Services = () => {
  return (
    <>
      <section className="services-area">
        <div className="services">
          <div className="services-content">
            <div className="services-title">
              <h2 className=" font-boska">Services</h2>
              <p className="font-switzer">
                to plan and orchestrate your special occasion
              </p>
            </div>
            {/* Services cards */}
            <div className="services-cards">
              <div className="cards shadow-slider">
                <img src="./service1.png" alt="Services Images" />
                <h4 className="font-switzer">Photography</h4>
              </div>
              <div className="cards shadow-slider">
                <img src="./service2.png" alt="Services Images" />
                <h4 className="font-switzer">Ceremony</h4>
              </div>
              <div className="cards shadow-slider">
                <img src="./service3.png" alt="Services Images" />
                <h4 className="font-switzer">Wedding Design</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Services Shape */}
        <div className="services-shape">
          <img src="./shape.png" alt="service-shape" />
        </div>
      </section>
    </>
  );
};

export default Services;
