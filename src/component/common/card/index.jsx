
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
import { formatPrice } from "../../../utils/priceFormat";


const PropertyCard = ({ property }) => {

 
  return (
    <>
        <div className="property-card">
              <span
              className={`badge ${
              property.listingType === "For Rent" ? "badge-rent" : "badge-sale"
              }`}
              >
              {property.listingType}
              </span>
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
                {property?.location?.fullAddress 
                  ? property.location.fullAddress + (property?.location?.city ? ", " + property.location.city : "")
                  : property?.location?.city || "Location Not Available"}
              </p>
        
       
           
            <p className="para-card">
              {property?.description || "No description provided"}
            </p>

          
          

              <p className="price">
                    {property?.listingType === "For Rent" ? (
                      <>
                        ₹{" "} {property?.basicDetails?.monthlyRent ? property.basicDetails.monthlyRent.toLocaleString("en-IN") : "N/A"}
                         {property?.basicDetails?.monthlyRent && <span>/month</span>}
                      </>
                    ) : (
                      <>₹ {formatPrice(property?.basicDetails?.price)}</>
                    )}
              </p>
          </div>

          <div className="icons-bar">
          
           
              <div className="icon-bar">
                <div className="icon-box">
                  <img src={bedroomIcon} alt="Bedrooms" />
                  <p>{property?.basicDetails?.bhkType || "N/A"}</p>
                </div>
                <p className="text">Bedrooms</p>
              </div>
            
              <div className="icon-bar">
                <div className="icon-box">
                  <img src={bathroomIcon} alt="Bathrooms" />
                  <p>{property?.basicDetails?.bathrooms || "N/A"}</p>
                </div>
                <p className="text">Bathrooms</p>
              </div>


            <div className="icon-bar">
              <div className="icon-box">
                <img src={areaIcon} alt="Area" />
                <p>{property?.basicDetails?.area || "N/A"} sqft</p>
              </div>
              <p className="text">Total Area</p>
            </div>

            <div className="icon-bar">
              <div className="icon-box">
                <img src={garageIcon} alt="Garage" />
                  <p>{property?.basicDetails?.garages || "N/A"}</p>
              </div>
              <p className="text">Garage</p>
            </div>
          </div>

          <div className="property-buttons">
            <button className="share-btn">
              <img src={contactIcon} alt="share" /> Share
            </button>
            <div className="tooltip-wrapper">
              <a href="tel:7011769523" className="contact-btn">
                <img src={callIcon} alt="contact" /> Contact Now
              </a>
              <span className="tooltip-text">Call 7011769523</span>
            </div>
          </div>
        </div>
      
    
    </>
  );
};

export default PropertyCard;


