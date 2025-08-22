import React from "react"
import arrowSymbol from "./assets/Group.svg"
import location from "./assets/location.svg"
import searchIcon from "./assets/searchIcon.svg"
import listIcon from "./assets/list-icon.svg"
import gridIcon from "./assets/gridIcon.svg"
import PropertyCard from "../../../../component/common/card/index"
import Pagination from "../../../../component/common/Pagination"
import "./style.css"

const RentProperties = () => {
    return (
        <div className="rent-properties">
            <div className="filter-sidebar">
                <div className="page-location">
                    <p>Home</p>
                    <img src={arrowSymbol}/>
                    <p>Rent</p>
                </div>
                 <div class="sidebar">
                            <h3>Find Properties By</h3>

                        
                            <div class="filter-section">
                                <label for="location">
                                    <img src={location}/>Location
                                </label>
                               <div className="input-wrapper">
                                    <img className="search-icon" src={searchIcon}/>
                                    <input type="text" id="location" placeholder="Enter Location..."/>
                               </div>

                            </div>

                    
                            <div class="filter-section">
                                <p>Property Type</p>
                                <label><input type="radio" name="property" value="1RK"/> 1RK</label>
                                <label><input type="radio" name="property" value="1BHK"/> 1BHK</label>
                                <label><input type="radio" name="property" value="2BHK"/> 2BHK</label>
                                <label><input type="radio" name="property" value="3BHK"/> 3BHK</label>
                            </div>

                           
                            <div class="filter-section">
                                <p>Price Range: <span id="price-value">₹0 - ₹300,000</span></p>
                                <input type="range" min="0" max="300000" step="1000" value="0" id="priceRange"/>
                            </div>

                      
                            <div class="filter-section">
                                <p>Furnished</p>
                                <label><input type="radio" name="furnished" value="fully"/> Fully Furnished</label>
                                <label><input type="radio" name="furnished" value="semi"/> Semi Furnished</label>
                                <label><input type="radio" name="furnished" value="unfurnished"/> Unfurnished</label>
                            </div>

                       
                            <button class="rent-search-btn"><img src={searchIcon}/>Search</button>
                 </div>
            </div>
            <div className="cards-section"> 
                 <div className="filter-bar">
                      <div className="cards-tittle">
                         <h1>Premium Properties</h1>
                         <p>Discover your perfect home from our curated collection</p>

                      </div>  
                      <div className="filters-icons-box">
                            <select>
                               <option>Neiwest First</option>
                            </select>
                            <div className="filter-icon-left">
                                 <img src={listIcon}/>
                                 <img src={gridIcon}/>
                            </div>
                      </div>          
                 </div>
                 <div className="filters-card-conatiner">
                     <PropertyCard/>
                     <PropertyCard/>
                     <PropertyCard/>
                     <PropertyCard/>
                     
                
                 </div>
                 <div className="pagination-bar">
                     
                 </div>
            </div>
        </div>
    )
}

export default RentProperties