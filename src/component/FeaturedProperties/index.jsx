



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
import { getToken } from "../../utils/authUtils";
import PropertyDetailModal from "./PropertyDetailModal";

import { toast } from "react-toastify"; // if you're using react-toastify
import "react-toastify/dist/ReactToastify.css";

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
  // const handleCardClick = async (id) => {
  //   try {
  //     setDetailLoading(true);
  //     const token = localStorage.getItem("token"); // get token
  //     const property = await getPropertyById(id, token);
  //     console.log("Full property details:", property); // log all
  //     setSelectedProperty(property);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setDetailLoading(false);
  //   }
  // };
  const handleCardClick = async (id) => {
  const token = getToken(); // use your utility function

  if (!token) {
    toast.error("Please login first to view details.");
    navigate("/login");
    return;
  }

  try {
    setDetailLoading(true);
    const property = await getPropertyById(id, token);
    setSelectedProperty(property);
  } catch (err) {
    console.error("Error fetching property details:", err);
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
  <PropertyDetailModal
    property={selectedProperty}
    loading={detailLoading}
    onClose={() => setSelectedProperty(null)}
    navigate={navigate}
  />
)}


    </div>
  );
};

export default FeaturedProperties;
