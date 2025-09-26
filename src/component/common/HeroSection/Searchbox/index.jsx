
import React, { useState } from "react";
import searchIcon from "../../../../assets/searchIcon.png";
import "./style.css";

const SearchBox = ({ onSearch,searching }) => {
  const [filters, setFilters] = useState({
  propertyType: "",
  category: "",
  location: "",
  rentOrBuy: "",
  bhkType: "",
  priceRange: "",
  minPrice: "",
  maxPrice: "",
  });


  console.log("filters->", filters);

 const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setFilters((prev) => {
      if (name === "priceRange" && value) {
        const [min, max] = value.split("-").map((v) => parseInt(v.trim()));
        return { ...prev, priceRange: value, minPrice: min, maxPrice: max };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

const handleSearch = () => {
  onSearch({
    ...filters,
    city: filters.location,  // backend ke liye map karna h
  });
};


  return (
    <div className="search-filter">
      <div className="filter-container">
        <div className="filter-option">
          <p className="filter-text">Property Type</p>
          <select name="propertyType" onChange={handleChange}>
            <option value="">Select Type</option>
         
            <option value="Apartment">Apartment</option>
            <option value="Independent House">Independent House</option>
          </select>
        </div>

 

        <div className="filter-option">
          <p className="filter-text">Location</p>
          <select name="location" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Ghaziabad">Ghaziabad</option>
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
          <select name="bhkType" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="3BHK">3 BHK</option>
          </select>
        </div>
      </div>

        <button 
          className="search-btn" 
          onClick={handleSearch}  
          disabled={searching}  // ✅ disable while searching
        > 
          {searching ? (
            <p>Searching...</p>   // ✅ show loading text
          ) : (
            <>
              <img src={searchIcon} alt="search" />
              <p>Search Properties</p>
            </>
          )}
        </button>
    </div>
  );
};

export default SearchBox;

