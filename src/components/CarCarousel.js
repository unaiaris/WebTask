import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarCarousel.css";
const CarCarousel = ({ imgs }) => {
  return (
    <div className="carousel-wrapper">
      <Carousel showStatus={false} showArrows={false} showThumbs={false}>
        {imgs.map((item) => {
          return (
            <div key={item.id}>
              <img className="d-block w-100 caro-img" src={item.url} alt={item.id} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarCarousel;
