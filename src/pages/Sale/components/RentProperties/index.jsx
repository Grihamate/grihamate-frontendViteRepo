
import React, { useState, useEffect } from "react";
import arrowSymbol from "./assets/Group.svg";
import location from "./assets/location.svg";
import searchIcon from "./assets/searchIcon.svg";
import listIcon from "./assets/list-icon.svg";
import gridIcon from "./assets/gridIcon.svg";
import PropertyCard from "../../../../component/common/card/index";
import { getProperty } from "../../../../service/getProperty";
import Loader from "../../../../component/common/Loader";
import "./style.css";
import { useNavigate } from "react-router-dom";

const RentProperties = () => {
   const navigate = useNavigate(); // hook for navigation
  const propertiesPerPage = 4;
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filterValues, setFilterValues] = useState({
    location: "",
    propertyType: "",
    price: 0,
    furnished: ""
  });

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);


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

  if (error) return <p>{error}</p>;

  return (
    <div className="rent-properties">
      {/* Sidebar */}
      <div className="filter-sidebar ">
        <div className="page-location">
          <p>Home</p>
          <img src={arrowSymbol} alt="arrow" />
          <p>Buy</p>
        </div>

        <div className="sidebar sale-sidebar">
          <h3>Find Properties By</h3>

          {/* Location */}
          <div className="filter-section">
            <label htmlFor="location">
              <img src={location} alt="loc" /> Location
            </label>
            <div className="input-wrapper sale-input-wrapper">
              <img className="search-icon" src={searchIcon} alt="search" />
              <input
                type="text"
                id="location"
                placeholder="Enter Location..."
                value={filterValues.location}
                onChange={(e) =>
                  setFilterValues({ ...filterValues, location: e.target.value })
                }
              />
            </div>
        </div>



        {/* Property Type - Desktop */}
        <div className="filter-section property-type-section desktop-only sale-section">
          <p>Property Type</p>
          <div className="property-radio-group">
            {["Appartment / Flat", "Independent House / Villa", "Plot / land", "Commercial Space"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="property"
                  value={type}
                  checked={filterValues.propertyType === type}
                  onChange={(e) =>
                    setFilterValues({ ...filterValues, propertyType: e.target.value })
                  }
                />
                {type}
              </label>
            ))}
          </div>
        </div>



        


        <div className="filter-section property-type-section desktop-only">
          <p>BHK / Rooms</p>
          <div className="property-checkbox-group">
          {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"].map((type, index) => (
            <div className="checkbox-btn" key={index}>
              <input
                type="checkbox"
                id={`property-${index}`}
                name="property"
                value={type}
                checked={filterValues.propertyType?.includes(type)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilterValues({
                      ...filterValues,
                      propertyType: [...(filterValues.propertyType || []), type],
                    });
                  } else {
                    setFilterValues({
                      ...filterValues,
                      propertyType: filterValues.propertyType.filter((item) => item !== type),
                    });
                  }
                }}
              />
              <span>{type}</span>
            </div>
          ))}
        </div>
        </div>


          <div className="filter-section">
            <p>
              Price Range: <span>₹0 - ₹{filterValues.price}</span>
            </p>
            <input
              type="range"
              min="0"
              max="300000"
              step="1000"
              value={filterValues.price}
              onChange={(e) =>
                setFilterValues({ ...filterValues, price: Number(e.target.value) })
              }
            />
          </div>


          <div className="filter-section">
            <p>Area / Size</p>
            <div className="area-filter">

                <select className="custom-drop-down">
                <option>Min Area Sq.</option>
                </select>

                <p>to</p>

                <select className="custom-drop-down">
                <option>Max Area Sq.</option>
                </select>
            </div>
          </div>

          
          <div className="filter-section">
            <p>Amenities & Feature</p>
            <div className="area-filter">
                <select className="custom-drop-down-full custom-drop-down">
                  <option>Select Animities</option>
                </select>
            </div>
          </div>

          <div className="filter-section">
            <p>Property Status</p>
            <div className="area-filter">
                <select className="custom-drop-down-full custom-drop-down">
                  <option>Select Status</option>
                </select>
            </div>
          </div>

       

       <div className="filter-section">
            <p>Facing</p>
            <div className="area-filter">
                <select className="custom-drop-down-full custom-drop-down">
                  <option>Select Facing</option>
                </select>
            </div>
          </div>




          <div className="filter-section">
            <p>Age of Property</p>
            <div className="area-filter">
                <select className="custom-drop-down-full custom-drop-down">
                  <option>Select Age</option>
                </select>
            </div>
          </div>

       

       
       

       
        




          {/* Search Button */}
           <div className="sale-btn">
              <button
            className="rent-search-btn"
            onClick={() => {
              setCurrentPage(1);
              fetchProperties(filterValues);
            }}
          >
            <img src={searchIcon} alt="search" /> Search
          </button>
           </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="filter-bar">
          <div className="cards-tittle">
            <h1>Available Properties</h1>
            <p>Discover your perfect home from our curated collection...</p>
          </div>

          <div className="filters-icons-box">
            <select>
              <option>Newest First</option>
            </select>
            <div className="filter-icon-left">
              <img src={listIcon} alt="list" />
              <img src={gridIcon} alt="grid" />
            </div>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
       <div className="filters-card-conatiner">
  {currentProperties.map((property) => (
    <div
      key={property._id}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/sale/details/${property._id}`)}
    >
      <PropertyCard property={property} />
    </div>
  ))}
</div>

            {/* Pagination */}
            {totalPages > 1 && (
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
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RentProperties;
