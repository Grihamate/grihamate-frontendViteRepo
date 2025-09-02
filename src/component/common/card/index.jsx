// // import React, { useEffect, useState } from "react";
// // import locationIcon from "../../../assets/loactionIcon.png";
// // import bedroomIcon from "../../../assets/bedrromIcon.png";
// // import bathroomIcon from "../../../assets/bathroomIcon.png";
// // import areaIcon from "../../../assets/areaIcon.png";
// // import garageIcon from "../../../assets/garagesIcon.png";
// // import shareIcon from "../../../assets/shareIcon.png";
// // import contactIcon from "../../../assets/contactIcon.png";
// // import "./style.css";

// // const PropertyCard = () => {
// //   const [properties, setProperties] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const propertiesPerPage = 8;
// // useEffect(() => {
// //   const fetchProperties = async () => {
// //     try {
// //       const response = await fetch("https://grihamate-backend-2.onrender.com/api/property/all");
// //       if (!response.ok) throw new Error("Failed to fetch properties");

// //       const data = await response.json();
// //       console.log("API Response:", data); // Inspect API data

// //       const propertiesArray = data.allProperties || [];
// //       console.log("Total properties received:", propertiesArray.length);  // <-- This logs the total number of properties

// //       setProperties(propertiesArray);
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to fetch properties");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   fetchProperties();
// // }, []);

// //   if (loading) return <p>Loading properties...</p>;
// //   if (error) return <p>{error}</p>;

// //   // Calculate pagination indices
// //   const indexOfLastProperty = currentPage * propertiesPerPage;
// //   const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

// //   // Slice the data for current page only
// //   const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

// //   // Calculate total pages based on total properties
// //   const totalPages = Math.ceil(properties.length / propertiesPerPage);

// //   // Log total properties and total pages to help backend coordination
// //   console.log("Total properties:", properties.length, "Total pages:", totalPages);

// //   return (
// //     <>
// //       {currentProperties.map((property) => (
// //         <div className="property-card" key={property._id}>
// //           <img src={property.images[0]} alt="Property" />

// //           <div className="property-details">
// //             <h3>{property.basicDetails.title}</h3>
// //             <p className="location">
// //               <img src={locationIcon} alt="location" />
// //               {property.location.fullAddress}, {property.location.city}
// //             </p>
// //             <p className="para">{property.description}</p>
// //             <p className="price">₹ {property.basicDetails.monthlyRent}/month</p>
// //           </div>

// //           <div className="icons-bar">
// //             <div className="icon-bar">
// //               <div className="icon-box">
// //                 <img src={bedroomIcon} alt="Bedrooms" />
// //                 <p>{property.basicDetails.bhkType}</p>
// //               </div>
// //               <p className="text">Bedrooms</p>
// //             </div>

// //             <div className="icon-bar">
// //               <div className="icon-box">
// //                 <img src={bathroomIcon} alt="Bathrooms" />
// //                 <p>{property.basicDetails.bathrooms}</p>
// //               </div>
// //               <p className="text">Bathrooms</p>
// //             </div>

// //             <div className="icon-bar">
// //               <div className="icon-box">
// //                 <img src={areaIcon} alt="Area" />
// //                 <p>{property.basicDetails.area} sqft</p>
// //               </div>
// //               <p className="text">Total Area</p>
// //             </div>

// //             <div className="icon-bar">
// //               <div className="icon-box">
// //                 <img src={garageIcon} alt="Garage" />
// //                 <p>2</p> {/* Update if API provides garage info */}
// //               </div>
// //               <p className="text">Garage</p>
// //             </div>
// //           </div>

// //           <div className="property-buttons">
// //             <button className="share-btn">
// //               <img src={shareIcon} alt="share" /> Share
// //             </button>

// //             <button className="contact-btn">
// //               <img src={contactIcon} alt="contact" /> Contact Now
// //             </button>
// //           </div>
// //         </div>
// //       ))}

// //       {/* Pagination Controls */}
// //       {totalPages > 1 && (
// //         <div className="pagination">
// //           <button
// //             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //             disabled={currentPage === 1}
// //           >
// //             Prev
// //           </button>

// //           {/* Page Numbers */}
// //           {Array.from({ length: totalPages }, (_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setCurrentPage(i + 1)}
// //               className={currentPage === i + 1 ? "active-page" : ""}
// //             >
// //               {i + 1}
// //             </button>
// //           ))}

// //           <button
// //             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //             disabled={currentPage === totalPages}
// //           >
// //             Next
// //           </button>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default PropertyCard;
// import React, { useEffect, useState } from "react";
// import { getProperty } from "../../../service/getProperty";
// import locationIcon from "../../../assets/loactionIcon.png";
// import bedroomIcon from "../../../assets/bedrromIcon.png";
// import bathroomIcon from "../../../assets/bathroomIcon.png";
// import areaIcon from "../../../assets/areaIcon.png";
// import garageIcon from "../../../assets/garagesIcon.png";
// import shareIcon from "../../../assets/shareIcon.png";
// import contactIcon from "../../../assets/contactIcon.png";
// import "./style.css";

// const PropertyCard = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const propertiesPerPage = 8;

//  useEffect(() => {
//   const fetchProperties = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const data = await getProperty();
//       setProperties(data.properties || []); // <-- change here
//     } catch (err) {
//       setError("Failed to fetch properties");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchProperties();
// }, []);


//   if (loading) return <p>Loading properties...</p>;
//   if (error) return <p>{error}</p>;

//   const indexOfLastProperty = currentPage * propertiesPerPage;
//   const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
//   const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
//   const totalPages = Math.ceil(properties.length / propertiesPerPage);

//   return (
//     <>
//       {currentProperties.map((property) => (
//         <div className="property-card" key={property._id}>
//           <img src={property.images[0]} alt="Property" />
//           <div className="property-details">
//             <h3>{property.basicDetails.title}</h3>
//             <p className="location">
//               <img src={locationIcon} alt="location" />
//               {property.location.fullAddress}, {property.location.city}
//             </p>
//             <p className="para">{property.description}</p>
//             <p className="price">₹ {property.basicDetails.monthlyRent}/month</p>
//           </div>

//           <div className="icons-bar">
//             <div className="icon-bar">
//               <div className="icon-box">
//                 <img src={bedroomIcon} alt="Bedrooms" />
//                 <p>{property.basicDetails.bhkType}</p>
//               </div>
//               <p className="text">Bedrooms</p>
//             </div>
//             <div className="icon-bar">
//               <div className="icon-box">
//                 <img src={bathroomIcon} alt="Bathrooms" />
//                 <p>{property.basicDetails.bathrooms}</p>
//               </div>
//               <p className="text">Bathrooms</p>
//             </div>
//             <div className="icon-bar">
//               <div className="icon-box">
//                 <img src={areaIcon} alt="Area" />
//                 <p>{property.basicDetails.area} sqft</p>
//               </div>
//               <p className="text">Total Area</p>
//             </div>
//             <div className="icon-bar">
//               <div className="icon-box">
//                 <img src={garageIcon} alt="Garage" />
//                 <p>2</p>
//               </div>
//               <p className="text">Garage</p>
//             </div>
//           </div>

//           <div className="property-buttons">
//             <button className="share-btn">
//               <img src={shareIcon} alt="share" /> Share
//             </button>
//             <button className="contact-btn">
//               <img src={contactIcon} alt="contact" /> Contact Now
//             </button>
//           </div>
//         </div>
//       ))}

//       {totalPages > 1 && (
//         <div className="pagination">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={currentPage === i + 1 ? "active-page" : ""}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default PropertyCard;

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
        <div className="property-card" key={property._id}>
          <img src={property.images && property.images.length > 0 ? property.images[0] : defaultImage } alt="Property" />

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


