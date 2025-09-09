
import React, { useState } from "react";
import locationIcon from "../../../assets/loactionIcon.png";
import bedroomIcon from "../../../assets/bedrromIcon.png";
import bathroomIcon from "../../../assets/bathroomIcon.png";
import areaIcon from "../../../assets/areaIcon.png";
import garageIcon from "../../../assets/garagesIcon.png";
import shareIcon from "../../../assets/shareIcon.png";
import contactIcon from "../../../assets/contactIcon.png";
import defaultImage from "../../../assets/defaultImage.png";
import callIcon from "../../../assets/callIcon.png"
import "./style.css";

const PropertyCard = ({ property }) => {

 
  return (
    <>
        <div className="property-card">
              <img
                src={
                property?.images?.length > 0
                ? property.images[0].url.trim()
                : defaultImage
                }
              alt="Property"
              />
          <div className="property-details">
            <h3>{property.basicDetails.title}</h3>
            <p className="location">
              <img src={locationIcon} alt="location" />
              {property.location.fullAddress}, {property.location.city}
            </p>
            <p className="para-card">{property.description}</p>
            <p className="price">₹ {property.basicDetails.monthlyRent}/month</p>
          </div>

          <div className="icons-bar">
            <div className="icon-bar">
              <div className="icon-box">
                <img src={bedroomIcon} alt="Bedrooms" />
                <p>{property.basicDetails.bhkType}</p>
              </div>
              <p className="text">Bedrooms</p>
            </div>
            <div className="icon-bar">
              <div className="icon-box">
                <img src={bathroomIcon} alt="Bathrooms" />
                <p>{property.basicDetails.bathrooms}</p>
              </div>
              <p className="text">Bathrooms</p>
            </div>
            <div className="icon-bar">
              <div className="icon-box">
                <img src={areaIcon} alt="Area" />
                <p>{property.basicDetails.area} sqft</p>
              </div>
              <p className="text">Total Area</p>
            </div>
            <div className="icon-bar">
              <div className="icon-box">
                <img src={garageIcon} alt="Garage" />
                <p>2</p>
              </div>
              <p className="text">Garage</p>
            </div>
          </div>

          <div className="property-buttons">
            <button className="share-btn">
              <img src={contactIcon} alt="share" /> Share
            </button>
            <button className="contact-btn">
              <img src={callIcon} alt="contact" /> Contact Now
            </button>
          </div>
        </div>
      
    
    </>
  );
};

export default PropertyCard;


