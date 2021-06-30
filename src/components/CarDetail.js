import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarDetail.css";
const CarDetail = ({ info, selectedImage }) => {
  return (
    <div className="hero">
      <div className="hero-left  d-none d-md-flex flex-column">
        <img className="hero-img" src={selectedImage.url} alt="" />
      </div>
      <div className="hero-right">
        <div className="hero-right-title">{info.name}</div>

        <div className="d-flex flex-row flex-md-column">
          <div className="col-left">
            <div className="hero-right-row mb-15">
              <div className="hero-right-label">Year</div>
              <div className="hero-right-text text-bold">{info.year}</div>
            </div>

            <div className="hero-right-row mb-15">
              <div className="hero-right-label">Price range</div>
              <div className="hero-right-text text-bold">
                ${info.minPrice.toLocaleString('en')} - ${info.maxPrice.toLocaleString('en')}
              </div>
            </div>

            <div className="hero-right-row mb-20">
              <div className="hero-right-label">Mileage</div>
              <div className="hero-right-text text-bold">{info.milage.toLocaleString('en')}</div>
            </div>
          </div>
          <div className="col-right">
            <div className="hero-right-row mb-20">
              <div className="hero-right-label">
                Item number: {info.itemNumber}
              </div>
              <div className="hero-right-label vin">VIN: {info.VIN}</div>
            </div>

            <div className="hero-right-row mb-20">
              <div className="hero-right-text d-flex align-items-center">
                Share this car
                <a href="#">
                  <span className="envelope-icon ml-5">
                    <FaEnvelope />
                  </span>
                </a>
              </div>{" "}
              {/* <!-- link --> */}
            </div>
            <div className="hero-right-row d-flex mb-20">
              <div className="hero-right-info-item d-flex flex-column">
                <div>Views</div>
                <div className="text-green">{info.views}</div>
              </div>
              <div className="hero-right-info-item d-none d-md-flex flex-column">
                <div>Saves</div>
                <div className="text-green">{info.saves}</div>
              </div>
              <div className="hero-right-info-item d-none d-md-flex flex-column">
                <div>Shares</div>
                <div className="text-green">{info.shares}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
