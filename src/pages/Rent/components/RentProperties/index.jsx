// import React,{useState, useEffect} from "react"
// import arrowSymbol from "./assets/Group.svg"
// import location from "./assets/location.svg"
// import searchIcon from "./assets/searchIcon.svg"
// import listIcon from "./assets/list-icon.svg"
// import gridIcon from "./assets/gridIcon.svg"
// import PropertyCard from "../../../../component/common/card/index"
// import { getProperty } from "../../../../service/getProperty"
// import Pagination from "../../../../component/common/Pagination"
// import "./style.css"
// import Loader from "../../../../component/common/Loader"

// const RentProperties = ({filters}) => {
//     const propertiesPerPage = 4;
//       const [properties, setProperties] = useState([]);
//       const totalPages = Math.ceil(properties.length / propertiesPerPage);
//       const [currentPage, setCurrentPage] = useState(1);
//       const indexOfLastProperty = currentPage * propertiesPerPage;
//       const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
//       const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
//       const [loading, setLoading] = useState(true);
//       const [error, setError] = useState(null);


//         const fetchProperties = async (filters = {}) => {
//           setLoading(true);
//           setError(null);
//           try {
//             const data = await getProperty(filters);
//             setProperties(data.properties || []);
//           } catch (err) {
//             setError("Failed to fetch properties");
//           } finally {
//             setLoading(false);
//           }
//         };


//         useEffect(() => {
//           fetchProperties(filters); // fetch on mount & when filters change
//         }, [filters]);
      
      
//         if (error) return <p>{error}</p>;
      


//     return (
//         <div className="rent-properties">
//             <div className="filter-sidebar">
//                 <div className="page-location">
//                     <p>Home</p>
//                     <img src={arrowSymbol}/>
//                     <p>Rent</p>
//                 </div>
//                  <div class="sidebar">
//                             <h3>Find Properties By</h3>

                        
//                             <div class="filter-section">
//                                 <label for="location">
//                                     <img src={location}/>Location
//                                 </label>
//                                <div className="input-wrapper">
//                                     <img className="search-icon" src={searchIcon}/>
//                                     <input type="text" id="location" placeholder="Enter Location..."/>
//                                </div>

//                             </div>

                    
//                             <div class="filter-section">
//                                 <p>Property Type</p>
//                                 <label><input type="radio" name="property" value="1RK"/> 1RK</label>
//                                 <label><input type="radio" name="property" value="1BHK"/> 1BHK</label>
//                                 <label><input type="radio" name="property" value="2BHK"/> 2BHK</label>
//                                 <label><input type="radio" name="property" value="3BHK"/> 3BHK</label>
//                             </div>

                           
//                             <div class="filter-section">
//                                 <p>Price Range: <span id="price-value">₹0 - ₹300,000</span></p>
//                                 <input type="range" min="0" max="300000" step="1000" value="0" id="priceRange"/>
//                             </div>

                      
//                             <div class="filter-section">
//                                 <p>Furnished</p>
//                                 <label><input type="radio" name="furnished" value="fully"/> Fully Furnished</label>
//                                 <label><input type="radio" name="furnished" value="semi"/> Semi Furnished</label>
//                                 <label><input type="radio" name="furnished" value="unfurnished"/> Unfurnished</label>
//                             </div>

                       
//                             <button class="rent-search-btn"><img src={searchIcon}/>Search</button>
//                  </div>
//             </div>
//             <div className="cards-section"> 
//                  <div className="filter-bar">
//                       <div className="cards-tittle">
//                          <h1>Premium Properties</h1>
//                          <p>Discover your perfect home from our curated collection</p>

//                       </div>  
//                       <div className="filters-icons-box">
//                             <select>
//                                <option>Newest First</option>
//                             </select>
//                             <div className="filter-icon-left">
//                                  <img src={listIcon}/>
//                                  <img src={gridIcon}/>
//                             </div>
//                       </div>          
//                  </div>
                 
//                 {
//                   loading ? <Loader/> : (
//                     <>
//                        <div className="filters-card-conatiner">
//                     { currentProperties.map((property) => (
//                           <PropertyCard id={property.id} property={property}/>
//                         ))
//                     }
//                  </div>

//                   {totalPages > 1 && (
//                   <div>
//                       <div className="pagination">
//                     <button
//                       onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                       disabled={currentPage === 1}
//                     >
//                       Prev
//                     </button>
//                     {Array.from({ length: totalPages }, (_, i) => (
//                       <button
//                         key={i}
//                         onClick={() => setCurrentPage(i + 1)}
//                         className={currentPage === i + 1 ? "active-page" : ""}
//                       >
//                         {i + 1}
//                       </button>
//                     ))}
//                     <button
//                       onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                       disabled={currentPage === totalPages}
//                     >
//                       Next
//                     </button>
//                   </div>
//                   </div>
//                    )}
//                     </>
//                   )
                    
                  
//                 }
                
//             </div>
//         </div>
//     )
// }

// export default RentProperties





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

const RentProperties = () => {
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
                  setFilterValues({ ...filterValues, location: e.target.value })
                }
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="filter-section">
            <p>Property Type</p>
            {["1BHK", "1BHK", "2BHK", "3BHK"].map((type) => (
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

          {/* Price Range */}
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

          {/* Furnished */}
          <div className="filter-section">
            <p>Furnished</p>
            {["fully", "semi", "unfurnished"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="furnished"
                  value={type}
                  checked={filterValues.furnished === type}
                  onChange={(e) =>
                    setFilterValues({ ...filterValues, furnished: e.target.value })
                  }
                />
                {type === "fully"
                  ? "Fully Furnished"
                  : type === "semi"
                  ? "Semi Furnished"
                  : "Unfurnished"}
              </label>
            ))}
          </div>

          {/* Search Button */}
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

      {/* Cards Section */}
      <div className="cards-section">
        <div className="filter-bar">
          <div className="cards-tittle">
            <h1>Premium Properties</h1>
            <p>Discover your perfect home from our curated collection</p>
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
                <PropertyCard key={property._id} property={property} />
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
