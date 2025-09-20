

import React, { useState, useEffect } from "react";
import arrowSymbol from "./assets/Group.svg";
import location from "./assets/location.svg";
import searchIcon from "./assets/searchIcon.svg";
import { toast } from "react-toastify";
import listIcon from "./assets/list-icon.svg";
import gridIcon from "./assets/gridIcon.svg";
import PropertyCard from "../../../../component/common/card/index";
import { getSaleProperty } from "../../../../service/getSaleProperty"
import Loader from "../../../../component/common/Loader";
import "./style.css";
import { useNavigate } from "react-router-dom";
import PropertyDetailModal from "../../../../component/FeaturedProperties/PropertyDetailModal";
import { getToken } from "../../../../utils/authUtils";
import { getSalePropertyById } from "../../../../service/getSalePropertyById";

const RentProperties = () => {
   const navigate = useNavigate(); // hook for navigation
  const propertiesPerPage = 4;
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [selectedProperty, setSelectedProperty] = useState(null); // for details modal
  const [detailLoading, setDetailLoading] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);


  console.log("selected property:->", selectedProperty);

  const [filterValues, setFilterValues] = useState({
  location: "",
  propertyType: "",
  rentOrBuy: "For Sale", 
  priceRange: { min: 0, max: 300000 },
  bhk:[],
  furnished: "",
  area: { min: "", max: "" },
  amenities: [],
  status: "",
  facing: "",
  age: ""
});


  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);


  const fetchProperties = async (filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getSaleProperty(filters);

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


  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // ✅ jaise hi screen badi ho filter close ho jaaye
      if (!mobile) {
        setIsMobileFilterOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  //   const handleCardClick = async (id) => {
  //   const token = getToken(); // use your utility function
  
  //   if (!token) {
  //     toast.error("Please login first to view details.");
  //     navigate("/login");
  //     return;
  //   }
  
  //   try {
  //     setDetailLoading(true);
  //     const property = await getSalePropertyById(id, token);
  //     setSelectedProperty(property?.Saleproperty);
  //   } catch (err) {
  //     console.error("Error fetching property details:", err);
  //   } finally {
  //     setDetailLoading(false);
  //   }
  // };
const handleCardClick = async (id) => {
  const token = getToken(); // ✅ Check token from localStorage

  if (!token) {
    toast.error("Please login first to view property details."); 
    navigate("/login"); // Redirect to login page
    return;
  }

  try {
    setDetailLoading(true);
    const property = await getSalePropertyById(id, token);
    setSelectedProperty(property?.Saleproperty);
  } catch (err) {
    toast.error("Failed to fetch property details.");
    console.error("Error fetching property details:", err);
  } finally {
    setDetailLoading(false);
  }
};
  

  if (error) return <p>{error}</p>;

  return (
    <div className="rent-properties">
 
            
       {/* ✅ Mobile Filter Sidebar */}
      {isMobile && isMobileFilterOpen && (
       

           <div className="filter-sidebar ">
                  <div className="page-location">
                    <p>Home</p>
                    <img src={arrowSymbol} alt="arrow" />
                    <p>Buy</p>
                  </div>

                   <div className="sidebar sale-sidebar">
          <h3>Find Properties By</h3>

       
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

        


            {/* Mobile view */}
            <div className="filter-section property-type-section sale-section propertytype-mobile-view">
              <p>Property Type</p>
              <div className="area-filter">
                <select
                  className="custom-drop-down-full custom-drop-down"
                  value={filterValues.propertyType || ""}
                  onChange={(e) =>
                    setFilterValues({ ...filterValues, propertyType: e.target.value })
                  }
                >
                  <option value="">Select Property Type</option>
                  <option value="Appartment">Appartment / Flat</option>
                  <option value="Independent House">Independent House / Villa</option>
                  <option value="Plot">Plot / land</option>
                  <option value="Commercial Space">Commercial Space</option>
                </select>
              </div>
            </div>



     

              {/*bhk  Mobile view */}
              <div className="filter-section property-type-section mobile-only">
                  <p>BHK / Rooms</p>
                  <div className="property-checkbox-group">
                     {["1", "2", "3", "4", "5"].map((num, index) => {
                        const value = `${num}BHK`;   // backend/store value
                        const label = `${num} BHK`;  // UI display
                        return (
                        <label className="checkbox-btn" key={index}>
                        <input
                        type="checkbox"
                        name="property"
                        value={value}
                        checked={filterValues.bhk?.includes(value)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilterValues({
                              ...filterValues,
                              bhk: [...(filterValues.bhk || []), value],
                            });
                          } else {
                            setFilterValues({
                              ...filterValues,
                              bhk: filterValues.bhk.filter((item) => item !== value),
                            });
                          }
                        }}
                        />
                        <span>{label}</span>
                        </label>
                        );
                  })}
                  </div>
              </div>


              {/* common in both screen */}

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


           {/* Area both screen */}
            <div className="filter-section">
              <p>Area / Size</p>
              <div className="area-filter">

                  <select className="custom-drop-down"
                    value={filterValues.area.min}
                    onChange={(e) =>
                    setFilterValues({ ...filterValues, area: { ...filterValues.area, min: e.target.value } })
                    }
                  >
                    <option value="">Min Area Sq.</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                  </select>

                  <p>to</p>

                  <select className="custom-drop-down"
                    value={filterValues.area.max}
                    onChange={(e) =>
                    setFilterValues({ ...filterValues, area: { ...filterValues.area, max: e.target.value } })
                    }
                  >
                    <option value="">Max Area Sq.</option>
                    <option value="3000">3000</option>
                    <option value="5000">5000</option>
                  </select>
              </div>
            </div>



   

          {/* other mobile view */}
            <div className="filters-grid-mobile-view">
        
                <div className="filter-section">
                <p>Amenities & Feature</p>
                <div className="area-filter">
                    <select className="custom-drop-down-full custom-drop-down" 
                      // multiple
                      value={filterValues.amenities}
                      onChange={(e) => {
                      const values = Array.from(e.target.selectedOptions, (option) => option.value);
                      setFilterValues({ ...filterValues, amenities: values });
                      }}
                    >
                      <option>Select Animities</option>
                      <option value="Gym">Gym</option>
                      <option value="Swimming Pool">Swimming Pool</option>
                      <option value="Parking">Parking</option>
                    </select>
                </div>
              </div>

              <div className="filter-section">
                <p>Property Status</p>
                <div className="area-filter">
                    <select className="custom-drop-down-full custom-drop-down"
                      value={filterValues.status}
                      onChange={(e) => setFilterValues({ ...filterValues, status: e.target.value })}
                    >
                      <option>Select Status</option>
                      <option value="">Select Status</option>
                      <option value="Ready to Move">Ready to Move</option>
                      <option value="Under Construction">Under Construction</option>
                    </select>
                </div>
              </div>

          

          <div className="filter-section">
                <p>Facing</p>
                <div className="area-filter">
                    <select className="custom-drop-down-full custom-drop-down"
                      value={filterValues.facing}
                      onChange={(e) => setFilterValues({ ...filterValues, facing: e.target.value })}
                    >
                      <option value="">Select Facing</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                    </select>
                </div>
              </div>




              <div className="filter-section">
                <p>Age of Property</p>
                <div className="area-filter">
                    <select className="custom-drop-down-full custom-drop-down"
                      value={filterValues.age}
                      onChange={(e) => setFilterValues({ ...filterValues, age: e.target.value })}
                    >
                      <option value="">Select Age</option>
                      <option value="0-1 Years">0-1 Years</option>
                      <option value="1-5 Years">1-5 Years</option>
                      <option value="5-10 Years">5-10 Years</option>
                      <option value="10+ Years">10+ Years</option>
                    </select>
                </div>
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
        
       
    
      )}

    
     








   
       {/* Desktop Sidebar */}
         {!isMobile && (
           
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
                          {[
                            { label: "Apartment / Flat", value: "Apartment" },
                            { label: "Independent House / Villa", value: "Independent House" },
                            { label: "Plot / Land", value: "Plot" },
                            { label: "Commercial Space", value: "Commercial Space" },
                          ].map((item) => (
                            <label key={item.value}>
                              <input
                                type="radio"
                                name="property"
                                value={item.value}
                                checked={filterValues.propertyType === item.value}
                                onChange={(e) =>
                                  setFilterValues({ ...filterValues, propertyType: e.target.value })
                                }
                              />
                              {item.label}
                            </label>
                          ))}
                        </div>
                      </div>


              



                      {/* Bhk deskop view */}
                      <div className="filter-section property-type-section desktop-only">
                        <p>BHK / Rooms</p>
                        <div className="property-checkbox-group">
                          {["1", "2", "3", "4", "5"].map((num, index) => {
                            const value = `${num}BHK`;   // backend value (1BHK, 2BHK, ...)
                            const label = `${num} BHK`;  // UI label (1 BHK, 2 BHK, ...)
                            return (
                              <label className="checkbox-btn" key={index}>
                                <input
                                  type="checkbox"
                                  name="bhkType"
                                  value={value}
                                  checked={filterValues.bhk?.includes(value)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setFilterValues({
                                        ...filterValues,
                                        bhk: [...(filterValues.bhk || []), value],
                                      });
                                    } else {
                                      setFilterValues({
                                        ...filterValues,
                                        bhk: filterValues.bhk.filter((item) => item !== value),
                                      });
                                    }
                                  }}
                                />
                                <span>{label}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                    


                        {/* common in both screen */}

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


                    {/* Area both screen */}
                      <div className="filter-section">
                        <p>Area / Size</p>
                        <div className="area-filter">

                            <select className="custom-drop-down"
                              value={filterValues.area.min}
                              onChange={(e) =>
                              setFilterValues({ ...filterValues, area: { ...filterValues.area, min: e.target.value } })
                              }
                            >
                              <option value="">Min Area Sq.</option>
                              <option value="500">500</option>
                              <option value="1000">1000</option>
                              <option value="2000">2000</option>
                            </select>

                            <p>to</p>

                            <select className="custom-drop-down"
                              value={filterValues.area.max}
                              onChange={(e) =>
                              setFilterValues({ ...filterValues, area: { ...filterValues.area, max: e.target.value } })
                              }
                            >
                              <option value="">Max Area Sq.</option>
                              <option value="3000">3000</option>
                              <option value="5000">5000</option>
                            </select>
                        </div>
                      </div>



                      {/* other desktop view */}
                      <div className="filters-desktop-view">
                                
                        <div className="filter-section">
                          <p>Amenities & Feature</p>
                          <div className="area-filter">
                              <select className="custom-drop-down-full custom-drop-down" 
                                value={filterValues.amenities}
                                onChange={(e) => {
                                const values = Array.from(e.target.selectedOptions, (option) => option.value);
                                setFilterValues({ ...filterValues, amenities: values });
                                }}
                              >
                                <option>Select Animities</option>
                                <option value="Lift">Lift</option>
                                <option value="Parking">Parking</option>
                                <option value="Gym">Gym</option>
                              </select>
                          </div>
                        </div>

                        <div className="filter-section">
                          <p>Property Status</p>
                          <div className="area-filter">
                              <select className="custom-drop-down-full custom-drop-down"
                                value={filterValues.status}
                                onChange={(e) => setFilterValues({ ...filterValues, status: e.target.value })}
                              >
                                <option>Select Status</option>
                                <option value="Ready to Move">Ready to Move</option>
                                <option value="Under Construction">Under Construction</option>
                              </select>
                          </div>
                        </div>

                    

                    <div className="filter-section">
                          <p>Facing</p>
                          <div className="area-filter">
                              <select className="custom-drop-down-full custom-drop-down"
                                value={filterValues.facing}
                                onChange={(e) => setFilterValues({ ...filterValues, facing: e.target.value })}
                              >
                                <option value="">Select Facing</option>
                                <option value="East">East</option>
                                <option value="West">West</option>
                                <option value="North">North</option>
                                <option value="South">South</option>
                              </select>
                          </div>
                        </div>




                        <div className="filter-section">
                          <p>Age of Property</p>
                          <div className="area-filter">
                              <select className="custom-drop-down-full custom-drop-down"
                                value={filterValues.age}
                                onChange={(e) => setFilterValues({ ...filterValues, age: e.target.value })}
                              >
                                <option value="">Select Age</option>
                                <option value="0-1 Years">0-1 Years</option>
                                <option value="1-5 Years">1-5 Years</option>
                                <option value="5-10 Years">5-10 Years</option>
                                <option value="10+ Years">10+ Years</option>
                              </select>
                          </div>
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
         )}



          {/* Cards Section */}
          <div className="cards-section">
            <div className="filter-bar">
              <div className="cards-tittle">
                <h1>Available Properties</h1>
                <p>Discover your perfect home from our curated collection...</p>
              
                {
                  isMobile && (
                      <button onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
                      {isMobileFilterOpen ? "Close Filters" : "Open Filters"}
                      </button>
                  )
                }

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
                        onClick={() => handleCardClick(property._id)}
                      >
                        <PropertyCard id="{property._id}" property={property}  />
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
          ) }

          </div>


          {/* details modal */}
          {selectedProperty && (
            <PropertyDetailModal
              property={selectedProperty}
              loading={detailLoading}
              onClose={() => setSelectedProperty(null)}
              detailPath={`/sale/details/${selectedProperty._id}`} 
              navigate={navigate}
              />
         )}


    </div>
  );
};

export default RentProperties;
