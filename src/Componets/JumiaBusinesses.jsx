import React from "react";
import "../Style/jumiaBusinesses.css";
import { images } from "../Library/images";

function JumiaBusinesses() {
  return (
    <div className="jumiaBusinesses">
      <div className="business">
        <img
          className="business_image"
          src={images.stores}
          alt="Jumia Stores"
        />
        <span>Official Stores</span>
      </div>
      <div className="business">
        <img
          className="business_image"
          src={images.global}
          alt="Jumia Stores"
        />
        <span>Jumia Global</span>
      </div>
      <div className="business">
        <img className="business_image" src={images.prime} alt="Jumia Stores" />
        <span>Jumia Prime</span>
      </div>
      <div className="business">
        <img className="business_image" src={images.food} alt="Jumia Stores" />
        <span>Jumia Food</span>
      </div>
    </div>
  );
}

export default JumiaBusinesses;
