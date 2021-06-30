import React, { useEffect, useState } from "react";
import "./CarImage.css"
const CarImage = ({ img, setSelectedImage }) => {

  return (
    <>
      <div className="img-card" onClick={()=>{setSelectedImage(img)}}>
        <img className="card-img" src={img.url} alt="" />
      </div>
      <div className="divider"></div>
    </>
  );
};

export default CarImage;
