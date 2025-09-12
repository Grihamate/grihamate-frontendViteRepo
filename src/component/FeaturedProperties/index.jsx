// import React, { useEffect, useState } from "react";
// import plusIcon from "../../assets/plusIcon.png";
// import PropertyCard from "../../component/common/card";
// import { getProperty } from "../../service/getProperty";
// import "./style.css";
// import AddPropertyModal from "../common/AddPropertyForm";
// import Loader from "../../component/common/Loader/index"
// const FeaturedProperties = ({ filters }) => {
//   const propertiesPerPage = 8;
//   const [properties, setProperties] = useState([]);

//   const totalPages = Math.ceil(properties.length / propertiesPerPage);
//   const [currentPage, setCurrentPage] = useState(1);
//   const indexOfLastProperty = currentPage * propertiesPerPage;
//   const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
//   const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false);
  
//   const fetchProperties = async (filters = {}) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const data = await getProperty(filters);
//       setProperties(data.properties || []);
//     } catch (err) {
//       setError("Failed to fetch properties");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProperties(filters); 
//   }, [filters]);



    
//   return (
//     <div className="parent-div">
//       <div className="property-section">
//            <div className="section-header-wrapper">
//               <div className="section-header">
//               <div className="detail-box">
//                 <h5>Featured Properties</h5>
//                 <p>Discover the best properties handpicked for you</p>
//               </div>

//                  <button className="feature-btn" onClick={() => setIsAddPropertyModalOpen(true)}>
//                    <img src={plusIcon} alt="plus" /> 
//                    <p>Post your Property</p>
//                  </button>
//             </div>
//            </div>
//           {
//             loading ? <div className="loader-wrapper">
//               <Loader/>
//             </div> : (
//               <>
                
//                 {error && (
//                   <div className="error-message">{error}</div>
//                 )}
                  
//                 {!error && currentProperties.length === 0 ? (
//                     <div className="no-data">No properties available</div>
//                   ):(
//                   <div className="cards-container">
//                       { currentProperties.map((property) => (
//                             <PropertyCard id={property._id} property={property}/>
//                         ))
//                       }
                        
//                     </div>
//                   )
//                 }             
//               </>
//             )
//           }
    
//       </div>


//        {totalPages > 1 &&  !loading && !error &&  (
//          <div>
//              <div className="pagination">
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
//          </div>
//       )}
            

//       {isAddPropertyModalOpen && (
//         <div
//         className="modal-backdrop"
//         onClick={() => setIsAddPropertyModalOpen(false)}  
//         >
    
//             <AddPropertyModal setIsModalOpen={setIsAddPropertyModalOpen} />
        
//         </div>
//         )
//       }
  

//         </div>
//     );
// };

// export default FeaturedProperties;



import React, { useEffect, useState } from "react";
import plusIcon from "../../assets/plusIcon.png";
import PropertyCard from "../../component/common/card";
import { getProperty } from "../../service/getProperty";
import { getPropertyById } from "../../service/getPropertybyId";
import "./style.css";
import AddPropertyModal from "../common/AddPropertyForm";
import Loader from "../../component/common/Loader/index";
import { Bed, Bath, Car, Ruler } from "lucide-react"; // lucide icons
import { Phone, Share2, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom";

const FeaturedProperties = ({ filters }) => {
    const navigate = useNavigate();
  const propertiesPerPage = 8;
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false);

  const [selectedProperty, setSelectedProperty] = useState(null); // for details modal
  const [detailLoading, setDetailLoading] = useState(false);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const fetchProperties = async (filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProperty(filters);
      setProperties(data.properties || []);
    } catch (err) {
      setError("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(filters);
  }, [filters]);

  // handle click -> fetch details
  const handleCardClick = async (id) => {
    try {
      setDetailLoading(true);
      const token = localStorage.getItem("token"); // get token
      const property = await getPropertyById(id, token);
      console.log("Full property details:", property); // log all
      setSelectedProperty(property);
    } catch (err) {
      console.error(err);
    } finally {
      setDetailLoading(false);
    }
  };

  return (
    <div className="parent-div">
      <div className="property-section">
        <div className="section-header-wrapper">
          <div className="section-header">
            <div className="detail-box">
              <h5>Featured Properties</h5>
              <p>Discover the best properties handpicked for you</p>
            </div>

            <button
              className="feature-btn"
              onClick={() => setIsAddPropertyModalOpen(true)}
            >
              <img src={plusIcon} alt="plus" />
              <p>Post your Property</p>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          <>
            {error && <div className="error-message">{error}</div>}

            {!error && currentProperties.length === 0 ? (
              <div className="no-data">No properties available</div>
            ) : (
              <div className="cards-container">
                {currentProperties.map((property) => (
                  <div
                    key={property._id}
                    onClick={() => handleCardClick(property._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <PropertyCard id={property._id} property={property} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* pagination */}
      {totalPages > 1 && !loading && !error && (
        <div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "active-page" : ""}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* add property modal */}
      {isAddPropertyModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsAddPropertyModalOpen(false)}
        >
          <AddPropertyModal setIsModalOpen={setIsAddPropertyModalOpen} />
        </div>
      )}

      {/* details modal */}
{selectedProperty && (
  <div
    className="modal-backdrop"
    onClick={() => setSelectedProperty(null)}
  >
    <div
      className="property-detail-modal"
      onClick={(e) => e.stopPropagation()} // stop close on inner click
      style={{ position: "relative" }}
    >
      {/* Close button */}
      <button
        className="modal-close"
        onClick={() => setSelectedProperty(null)}
      >
        ✕
      </button>

      {detailLoading ? (
        <Loader />
      ) : (
        <>
          {/* Modal heading — full width above the flex area */}
          <h2 className="quick-view-heading">Quick View</h2>

          {/* Flex area: image (left) + details (right) */}
          <div className="modal-flex">
            {/* Image column */}
            <div className="modal-images">
              {selectedProperty.images && selectedProperty.images.length > 0 ? (
                <img
                  src={selectedProperty.images[0].url}
                  alt="Property"
                  className="modal-main-image"
                />
              ) : (
                <div className="no-image">No Image Available</div>
              )}
            </div>

            {/* Details column */}
            <div className="modal-details">
              <p className="price">
                <span>₹{selectedProperty.basicDetails?.monthlyRent || "NA"}</span>
                <span className="price-month"> / month</span>
              </p>

              <h2 className="heading-property">
                {selectedProperty.basicDetails?.title || "NA"}
              </h2>

              <div className="location-info">
                <span>
                  {selectedProperty.location?.fullAddress ||
                    selectedProperty.location?.city ||
                    "NA"}
                </span>
              </div>

              {/* Property Info (icons + values + label) */}
              <div className="property-info">
                <div className="info-item">
                  <div className="info-top">
                    <Bed size={22} />
                    <span className="info-value">
                      {selectedProperty.basicDetails?.bhkType || "NA"}
                    </span>
                  </div>
                  <div className="info-label">Bedrooms</div>
                </div>

                <div className="info-item">
                  <div className="info-top">
                    <Ruler size={22} />
                    <span className="info-value">
                      {selectedProperty.basicDetails?.area || "NA"}
                    </span>
                  </div>
                  <div className="info-label">Area (sq.ft)</div>
                </div>

                <div className="info-item">
                  <div className="info-top">
                    <Bath size={22} />
                    <span className="info-value">
                      {selectedProperty.basicDetails?.bathrooms || "NA"}
                    </span>
                  </div>
                  <div className="info-label">Bathrooms</div>
                </div>

                <div className="info-item">
                  <div className="info-top">
                    <Car size={22} />
                    <span className="info-value">
                      {selectedProperty.basicDetails?.garages || "NA"}
                    </span>
                  </div>
                  <div className="info-label">Garages</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <b className="description-header">Description:</b>
                <p className="description-para">
                  {selectedProperty.description || "NA"}
                </p>
              </div>

              {/* Action Buttons */}
           <div className="modal-actions">
  {/* Row 1: Call + Mail */}
  <div className="action-row">
    <button
      className="btn-call"
      onClick={() =>
        window.open(`tel:${selectedProperty.contactInfo?.phone || ""}`)
      }
    >
      <Phone size={18} /> Call Now
    </button>

    <button
      className="btn-mail"
      onClick={() =>
        window.open(`mailto:${selectedProperty.contactInfo?.email || ""}`)
      }
    >
      <Mail size={18} /> Mail
    </button>
  </div>

  {/* Row 2: View Full Details */}
<button
  className="btn-details"
  onClick={() => navigate(`/property/${selectedProperty._id}`)}
>
  View Full Details
</button>

</div>

            </div>
          </div>
        </>
      )}
    </div>
  </div>
)}


    </div>
  );
};

export default FeaturedProperties;
