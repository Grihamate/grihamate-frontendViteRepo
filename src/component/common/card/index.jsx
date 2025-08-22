import React from "react";
import locationIcon from "../../../assets/loactionIcon.png"
import bedroomIcon from "../../../assets/bedrromIcon.png"
import bathroomIcon from "../../../assets/bathroomIcon.png"
import areaIcon from "../../../assets/areaIcon.png"
import garageIcon from "../../../assets/garagesIcon.png"
import shareIcon from "../../../assets/shareIcon.png"
import contactIcon from "../../../assets/contactIcon.png"
import "./style.css";

const PropertyCard = () => {
  return (
    <div className="property-card">

    
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
          alt="Property"
        />

      <div className="property-details">
        <h3>Luxury 3BHK Apartment</h3>
        <p className="location">
          <img src={locationIcon}
          />
          New Delhi, India
        </p>
        <p className="para">Beautiful apartment with modern amenities, close to metro station and shopping centers. Perfect for families.
        </p>
        
        <p className="price">₹ 15,000/month</p>
      </div>

      <div className="icons-bar">
          <div className="icon-bar">
            <div className="icon-box">
               <img src={bedroomIcon}/>
               <p>3</p>   
            </div>
            <p className="text">Bedrooms</p>
          </div> 

           <div className="icon-bar">
            <div className="icon-box">
               <img src={bathroomIcon}/>
               <p>2</p>   
            </div>
            <p className="text">Bathrooms</p>
          </div> 


           <div className="icon-bar">
            <div className="icon-box">
               <img src={areaIcon}/>
               <p>3</p>   
            </div>
            <p className="text">total area</p>
          </div> 

           <div className="icon-bar">
            <div className="icon-box">
               <img src={garageIcon}/>
               <p>3</p>   
            </div>
            <p className="text">Bedrooms</p>
          </div> 

          
      </div>

      <div className="property-buttons">
          <button className="share-btn">
            <img src={shareIcon} alt="login" /> share
          </button>

          <button className="contact-btn">
            <img src={contactIcon} alt="login" /> contact now
          </button>
      </div>
    </div>
  );
};

export default PropertyCard;
