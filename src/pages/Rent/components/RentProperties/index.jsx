
import React, { useState, useEffect } from "react";
import arrowSymbol from "./assets/Group.svg";
import location from "./assets/location.svg";
import searchIcon from "./assets/searchIcon.svg";
import listIcon from "./assets/list-icon.svg";
import gridIcon from "./assets/gridIcon.svg";
import PropertyCard from "../../../../component/common/card/index";
import { getProperty } from "../../../../service/getProperty";
import Loader from "../../../../component/common/Loader";
import { getToken } from "../../../../utils/authUtils";
import "./style.css";
import { getPropertyById } from "../../../../service/getPropertybyId";
import PropertyDetailModal from "../../../../component/FeaturedProperties/PropertyDetailModal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ import toast

const RentProperties = () => {
  const navigate = useNavigate();
  const propertiesPerPage = 4;
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedProperty, setSelectedProperty] = useState(null); // for details modal
  const [detailLoading, setDetailLoading] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    
  const initialFilters = {
      location: "",
      bhkType: "",
      priceRange: "5000-50000",
      minPrice: 5000,
      maxPrice: 300000,
      furnished: "",
    };

    const [filterValues, setFilterValues] = useState(initialFilters);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
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

      if (Array.isArray(data?.properties)) {
        setProperties(data.properties);
      } else if (Array.isArray(data)) {
        setProperties(data);
      } else {
        setProperties([]);
      }
    } catch (err) {
      setError("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);




  const handleCardClick = async (id) => {
  
  
    const token = getToken(); 
    console.log("kya tokenh",token)
  
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
        console.error("Error fetching property details: agr error ayetoh", err);
  
        if (err.status === 401) {
          toast.error("Login required! Please login to view this property.");
          navigate("/login");
        } else if (err.status === 404) {
          toast.error(err.message || "Property not found.");
        } else {
          toast.error(err.message || "Something went wrong. Try again.");
        }
  
      } finally {
        setDetailLoading(false);
      }
  
  };
  



  


  // Reset function
const resetFilters = () => {
  setFilterValues({ ...initialFilters }); // simple copy
  setCurrentPage(1);
  fetchProperties({ ...initialFilters });
};

  if (error) return <p>{error}</p>;

  return (
    <div className="rent-properties">
      
      {/* Sidebar */}
      <div className="filter-sidebar">
        <div className="page-location">
          <p>Home</p>
          <img src={arrowSymbol} alt="arrow" />
          <p>Rent</p>
        </div>

        <div className="sidebar">
          <h3>Find Properties By</h3>

          {/* Location */}
          <div className="filter-section">
            <label htmlFor="location">
              <img src={location} alt="loc" /> Location
            </label>
            <div className="input-wrapper">
              <img className="search-icon" src={searchIcon} alt="search" />
              <input
                type="text"
                id="location"
                placeholder="Enter Location..."
                value={filterValues.location}
                onChange={(e) =>
                  setFilterValues({
                    ...filterValues,
                    location: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Property Type - Desktop */}
          <div className="filter-section property-type-section desktop-only">
            <p>Property Type</p>
            <div className="property-radio-group">
              {["1BHK", "2BHK", "3BHK"].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="property"
                    value={type}
                    checked={filterValues.bhkType === type}
                    onChange={(e) =>
                      setFilterValues({
                        ...filterValues,
                        bhkType: e.target.value,
                      })
                    }
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Property Type - Mobile */}
          <div className="mobile-wrapper">
            <div className="filter-section property-type-section mobile-only">
              <p>Property Type</p>
              <select
                className="property-dropdown"
                value={filterValues.bhkType}
                onChange={(e) =>
                  setFilterValues({
                    ...filterValues,
                    bhkType: e.target.value,
                  })
                }
              >
                <option value="">Select Property Type</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
              </select>
            </div>
            {/* Furnished - Mobile */}
            <div className="filter-section furnished-section mobile-only">
              <p>Furnished</p>
              <select
                value={filterValues.furnished}
                onChange={(e) =>
                  setFilterValues({
                    ...filterValues,
                    furnished: e.target.value,
                  })
                }
              >
                <option value="">Select Furnishing</option>
                <option value="Fully Furnished">Fully Furnished</option>
                <option value="Semi Furnished">Semi Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>
          </div>


        <div className="filter-section">
          <p>
            Price Range: <span>₹{filterValues.minPrice} - ₹{filterValues.maxPrice}</span>
          </p>
          <input
            type="range"
            min="5000"               
            max="300000"
            step="1000"
            value={filterValues.maxPrice}
            onChange={(e) => {
              const max = Number(e.target.value);
              setFilterValues((prev) => ({
                ...prev,
                minPrice: 5000,        
                maxPrice: max,
                priceRange: `5000-${max}`,
              }));
            }}
          />
        </div>

          {/* Furnished - Desktop */}
          {/* <div className="filter-section furnished-section desktop-only">
            <p>Furnished</p>
             <div className="property-radio-group">
              {["Fully Furnished", "Semi Furnished", "Unfurnished"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="furnished"
                  value={type}
                  checked={filterValues.furnished === type}
                  onChange={(e) =>
                    setFilterValues({
                      ...filterValues,
                      furnished: e.target.value,
                    })
                  }
                />
                
              </label>
               ))}
            </div>
          </div> */}


        <div className="filter-section furnished-section desktop-only">
          <p>Furnished</p>
          <div className="property-radio-group">
            {[
              { value: "Fully Furnished", label: "Fully Furnished" },
              { value: "Semi Furnished", label: "Semi Furnished" },
              { value: "Unfurnished", label: "Unfurnished" },
            ].map((item) => (
              <label key={item.value}>
                <input
                  type="radio"
                  name="furnished"
                  value={item.value}
                  checked={filterValues.furnished === item.value}
                  onChange={(e) =>
                    setFilterValues({
                      ...filterValues,
                      furnished: e.target.value,
                    })
                  }
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

          {/* Search Button */}
          <button
            className="rent-search-btn"
             disabled={loading} 
              style={{
                          opacity: loading ? 0.6 : 1, 
                          cursor: loading ? "not-allowed" : "pointer",
                          transition: "all 0.3s ease",
                        }}
            onClick={() => {
              setCurrentPage(1);
              fetchProperties(filterValues);
            }}
          >
            <img src={searchIcon} alt="search" /> Search
          </button>

            <button type="button" className="reset-filters-btn" onClick={resetFilters}>
               Reset Filters
            </button>


        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="filter-bar">
          <div className="cards-tittle">
            <h1>Premium Properties</h1>
            <p>Discover your perfect home from our curated collection</p>
          </div>

          {/* <div className="filters-icons-box">
            <select>
              <option>Newest First</option>
            </select>
            <div className="filter-icon-left">
              <img src={listIcon} alt="list" />
              <img src={gridIcon} alt="grid" />
            </div>
          </div> */}
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="filters-card-conatiner">
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
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
            )}
          </>
        )}
      </div>

      {/* details modal */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          loading={detailLoading}
          onClose={() => setSelectedProperty(null)}
          detailPath={`/property/${selectedProperty._id}`}
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default RentProperties;
