// import React from "react";
// import locationIcon from "../../../assets/loactionIcon.png"
// import bedroomIcon from "../../../assets/bedrromIcon.png"
// import bathroomIcon from "../../../assets/bathroomIcon.png"
// import areaIcon from "../../../assets/areaIcon.png"
// import garageIcon from "../../../assets/garagesIcon.png"
// import shareIcon from "../../../assets/shareIcon.png"
// import contactIcon from "../../../assets/contactIcon.png"
// import "./style.css";

// const PropertyCard = () => {
//   return (
//     <div className="property-card">

    
//         <img
//           src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
//           alt="Property"
//         />

//       <div className="property-details">
//         <h3>Luxury 3BHK Apartment</h3>
//         <p className="location">
//           <img src={locationIcon}
//           />
//           New Delhi, India
//         </p>
//         <p className="para">Beautiful apartment with modern amenities, close to metro station and shopping centers. Perfect for families.
//         </p>
        
//         <p className="price">₹ 15,000/month</p>
//       </div>

//       <div className="icons-bar">
//           <div className="icon-bar">
//             <div className="icon-box">
//                <img src={bedroomIcon}/>
//                <p>3</p>   
//             </div>
//             <p className="text">Bedrooms</p>
//           </div> 

//            <div className="icon-bar">
//             <div className="icon-box">
//                <img src={bathroomIcon}/>
//                <p>2</p>   
//             </div>
//             <p className="text">Bathrooms</p>
//           </div> 


//            <div className="icon-bar">
//             <div className="icon-box">
//                <img src={areaIcon}/>
//                <p>3</p>   
//             </div>
//             <p className="text">total area</p>
//           </div> 

//            <div className="icon-bar">
//             <div className="icon-box">
//                <img src={garageIcon}/>
//                <p>3</p>   
//             </div>
//             <p className="text">Bedrooms</p>
//           </div> 

          
//       </div>

//       <div className="property-buttons">
//           <button className="share-btn">
//             <img src={shareIcon} alt="login" /> share
//           </button>

//           <button className="contact-btn">
//             <img src={contactIcon} alt="login" /> contact now
//           </button>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;
import React, { useEffect, useState } from "react";
import locationIcon from "../../../assets/loactionIcon.png";
import bedroomIcon from "../../../assets/bedrromIcon.png";
import bathroomIcon from "../../../assets/bathroomIcon.png";
import areaIcon from "../../../assets/areaIcon.png";
import garageIcon from "../../../assets/garagesIcon.png";
import shareIcon from "../../../assets/shareIcon.png";
import contactIcon from "../../../assets/contactIcon.png";
import "./style.css";

const PropertyCard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/property/all");
        if (!response.ok) throw new Error("Failed to fetch properties");

        const data = await response.json();
        console.log("API Response:", data); // Check the result in console
        setProperties(data.allProperties || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {properties.map((property) => (
        <div className="property-card" key={property._id}>
          <img src={property.images[0]} alt="Property" />

          <div className="property-details">
            <h3>{property.basicDetails.title}</h3>
            <p className="location">
              <img src={locationIcon} alt="location" />
              {property.location.fullAddress}, {property.location.city}
            </p>
            <p className="para">{property.description}</p>
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
                <p>2</p> {/* You can update if API has garage info */}
              </div>
              <p className="text">Garage</p>
            </div>
          </div>

          <div className="property-buttons">
            <button className="share-btn">
              <img src={shareIcon} alt="share" /> Share
            </button>

            <button className="contact-btn">
              <img src={contactIcon} alt="contact" /> Contact Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;

