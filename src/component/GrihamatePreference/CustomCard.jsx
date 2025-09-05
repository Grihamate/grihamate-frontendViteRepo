import React from "react";
import "./CustomCard.css";

function CustomCard({ image, heading, description, button }) {
  return (
    <div className="custom-card">
      {image && <img src={image} alt={heading} className="custom-card-image" />}
      <h3 className="custom-card-heading">{heading}</h3>
      <p className="custom-card-description">{description}</p>
      {button && (
        <button className="custom-card-button">
          {button}
        </button>
      )}
    </div>
  );
}

export default CustomCard;
