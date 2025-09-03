import React, { useEffect, useState } from "react";
import plusIcon from "../../assets/plusIcon.png";
import PropertyCard from "../../component/common/card";
import { getProperty } from "../../service/getProperty";
import "./style.css";
import AddPropertyModal from "../common/AddPropertyForm";
import Loader from "../../component/common/Loader/index"
const FeaturedProperties = ({ filters }) => {
  const propertiesPerPage = 8;
  const [properties, setProperties] = useState([]);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false);
  
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
    fetchProperties(filters); // fetch on mount & when filters change
  }, [filters]);

  if (loading) return <Loader/>;
  if (error) return <p>{error}</p>;

    
  return (
    <div className="parent-div">
      <div className="property-section">
           <div className="section-header-wrapper">
              <div className="section-header">
              <div className="detail-box">
                <h5>Featured Properties</h5>
                <p>Discover the best properties handpicked for you</p>
              </div>

                <button className="feature-btn" onClick={() => setIsAddPropertyModalOpen(true)}>
                   <img src={plusIcon} alt="plus" /> 
                   <p>Post your Property</p>
                 </button>
            </div>
           </div>
          

            <div className="cards-container">
              { currentProperties.map((property) => (
                    <PropertyCard id={property._id} property={property}/>
                ))
              }
                
            </div>
    
      </div>


       {totalPages > 1 && (
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
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
         </div>
      )}
            

      {isAddPropertyModalOpen && (
        <div
        className="modal-backdrop"
        onClick={() => setIsAddPropertyModalOpen(false)}  
        >
    
            <AddPropertyModal  setIsModalOpen={setIsAddPropertyModalOpen}  />
        
        </div>
        )
      }
  

        </div>
    );
};

export default FeaturedProperties;
