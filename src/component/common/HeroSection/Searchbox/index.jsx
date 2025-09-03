
// import React, { useState } from "react";
// import searchIcon from "../../../../assets/searchIcon.png";
// import "./style.css";

// const SearchBox = ({ onSearch }) => {
//   const [filters, setFilters] = useState({
//     propertyType: "",
//     category: "",
//     location: "",
//     priceRange: "",
//     rentOrBuy: "",
//     bedrooms: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSearch = () => {
//     onSearch(filters); // pass filters to parent
//   };

//   return (
//     <div className="search-filter">
//       <div className="filter-container">
//         <div className="filter-option">
//           <p className="filter-text">Property Type</p>
//           <select name="propertyType" onChange={handleChange}>
//             <option value="">Select Type</option>
//             <option value="House">House</option>
//             <option value="Apartment">Apartment</option>
//           </select>
//         </div>

//         <div className="filter-option">
//           <p className="filter-text">Category</p>
//           <select name="category" onChange={handleChange}>
//             <option value="">Select Type</option>
//             <option value="Residential">Residential</option>
//             <option value="Commercial">Commercial</option>
//           </select>
//         </div>

//         <div className="filter-option">
//           <p className="filter-text">Location</p>
//           <select name="location" onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Mumbai">Mumbai</option>
//           </select>
//         </div>

//         <div className="filter-option">
//           <p className="filter-text">Price Range</p>
//           <select name="priceRange" onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="0-50000">₹0 - ₹50,000</option>
//             <option value="50000-100000">₹50,000 - ₹1,00,000</option>
//           </select>
//         </div>

//         <div className="filter-option">
//           <p className="filter-text">Rent/Buy</p>
//           <select name="rentOrBuy" onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="Rent">Rent</option>
//             <option value="Buy">Buy</option>
//           </select>
//         </div>

//         <div className="filter-option">
//           <p className="filter-text">Bedrooms</p>
//           <select name="bedrooms" onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="1">1 BHK</option>
//             <option value="2">2 BHK</option>
//             <option value="3">3 BHK</option>
//           </select>
//         </div>
//       </div>

//       <button className="search-btn" onClick={handleSearch}>
//         <img src={searchIcon} alt="search" />
//         <p>Search Properties</p>
//       </button>
//     </div>
//   );
// };

// export default SearchBox;
import React, { useState } from "react";
import searchIcon from "../../../../assets/searchIcon.png";
import "./style.css";

const SearchBox = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    propertyType: "",
    category: "",
    location: "",
    priceRange: "",
    rentOrBuy: "",
    bedrooms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearch({
      ...filters,
      city: filters.location, // map to backend
    });
  };

  return (
    <div className="search-filter">
      <div className="filter-container">
        <div className="filter-option">
          <p className="filter-text">Property Type</p>
          <select name="propertyType" onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>

        {/* <div className="filter-option">
          <p className="filter-text">Category</p>
          <select name="category" onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div> */}

        <div className="filter-option">
          <p className="filter-text">Location</p>
          <select name="location" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        <div className="filter-option">
          <p className="filter-text">Price Range</p>
          <select name="priceRange" onChange={handleChange}>
            <option value="">Select</option>
            <option value="0-50000">₹0 - ₹50,000</option>
            <option value="50000-100000">₹50,000 - ₹1,00,000</option>
          </select>
        </div>

        <div className="filter-option">
          <p className="filter-text">Rent/Buy</p>
          <select name="rentOrBuy" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
          </select>
        </div>

        <div className="filter-option">
          <p className="filter-text">Bedrooms</p>
          <select name="bedrooms" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
          </select>
        </div>
      </div>

      <button className="search-btn" onClick={handleSearch}>
        <img src={searchIcon} alt="search" />
        <p>Search Properties</p>
      </button>
    </div>
  );
};

export default SearchBox;

