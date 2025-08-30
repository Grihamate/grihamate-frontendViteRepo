import React from "react";
import ImageUpload from "../../../component/common/ImageUpload"
import "./style.css"

const AddPropertyModal = ({setIsModalOpen}) => {
    return (
        <div className="modal-container"
             onClick={(e) => e.stopPropagation()}
        >
             <div className="property-form">
                <h2>Add Your property</h2>
                <div className="form-scroll">
                <form className="input-form">
                    <div className="form-group">
                            <label className="form-label">Property Type</label>
                            
                            <div className="radio-group">
                                {
                                    ["Apartment", "Villa", "Office", "Shop", "Independent house"].map((type) => (
                                        <label htmlFor={type} className="radio-lebel" key={type}>
                                            <input
                                               type="radio"
                                               name="propertyType"
                                               id={type}
                                               value={type}
                                            />
                                            <span>{type}</span>
                                        </label>
                                        
                                    ))
                                }
                            </div>
                    </div>
                    
                     <div className="form-group">
                            <label className="form-label">Listing Type</label>
                            
                            <div className="radio-group">
                                {
                                    ["For Rent"].map((type) => (
                                        <label htmlFor={type} className="radio-lebel" key={type}>
                                            <input
                                               type="radio"
                                               name="listingType"
                                               id={type}
                                               value={type}
                                            />
                                            <span>{type}</span>
                                        </label>
                                    ))
                                }
                            </div>
                    </div>

                    <div className="form-group ">
                        <label className="form-group-label">Basic Details</label> 

                        <div className="basic-filter">
                            <div className="filter-group">
                                    <label htmlFor="property">Property Title *</label>
                                    <select id="property" class="custom-select">
                                            <option>eg. spacious 2BHK in Delhi</option>
                                        
                                    </select>
                            </div>

                            <div className="filter-group">
                                    <label for="property">Furnishing Status</label>
                                    <select id="property" class="custom-select">
                                            <option>Select furnishing status</option>
                                        
                                    </select>
                            </div>
                        </div>

                        <div className="basic-filter-other">
                            <div className="filter-group-other">
                                    <label for="property">BHK/Type</label>
                                    <select id="property" class="custom-select">
                                            <option>Select BHK</option>
                                        
                                    </select>
                            </div>

                            <div className="filter-group-other">
                                    <label for="property">Area (sq ft) *</label>
                                    <select id="property" class="custom-select">
                                            <option>eg. 950</option>
                                        
                                    </select>
                            </div>

                              <div className="filter-group-other">
                                    <label for="property">Bathrooms</label>
                                    <select id="property" class="custom-select">
                                            <option>Select</option>
                                        
                                    </select>
                            </div>
                        </div>

                        <div className="basic-filter-other">
                            <div className="filter-group-other">
                                    <label for="property">Monthly Rent (₹)</label>
                                    <select id="property" class="custom-select">
                                            <option>eg. 25000</option>
                                        
                                    </select>
                            </div>

                            <div className="filter-group-other">
                                    <label for="property">Security Deposit (₹)</label>
                                    <select id="property" class="custom-select">
                                            <option>eg. 5000</option>
                                        
                                    </select>
                            </div>

                              <div className="filter-group-other">
                                    <label for="property">Maintenance Charge (₹)</label>
                                    <select id="property" class="custom-select">
                                            <option>eg. 5000</option>
                                        
                                    </select>
                            </div>
                        </div>
                    </div> 

                    
                    <div className="form-group ">
                        <label className="form-group-label">Location</label> 

                        <div className="basic-filter">
                            <div className="filter-group">
                                    <label htmlFor="city">City *</label>
                                    <select id="city" class="custom-select">
                                            <option>Select</option>
                                        
                                    </select>
                            </div>

                            <div className="filter-group">
                                    <label for="property">Locality *</label>
                                    <select id="property" class="custom-select">
                                            <option>eg. Delhi</option>
                                        
                                    </select>
                            </div>
                        </div>
         
                        <div className="textarea-filter">
                           
                                <label htmlFor="desc">Description</label>
                                <textarea id="desc" placeholder="Enter your city details..." />
                        
                        </div>

                        <div className="textarea-filter">
                          
                                <label htmlFor="city-text">City *</label>
                                <textarea id="city-text" placeholder="Enter your city details..." />
                          
                        </div>
                       <div className="textarea-filter">
                         <label htmlFor="Property Images">Property Images</label>
                         <ImageUpload/>
                       </div>
 
                    </div>

                      
                    <div className="form-group ">
                        <label className="form-group-label">Contact Information</label>       
                        <div className="basic-filter">
                            <div className="filter-group">
                                    <label for="city-input">City *</label>
                                    <input className="custom-input"id="city-input" placeholder="owner" />                      
                            </div>

                            <div className="filter-group">
                                    <label for="locality">Locality *</label>
                                    <input className="custom-input"id="locality" placeholder="Enter Phone Number" />
                                                   
                            </div>
                            
                        </div>

                         <div className="basic-filter ">
                       
                                    <label for="email">Email Address</label>
                                    <input className="custom-input"id="email" placeholder="Enter  email Address" />    
                        </div>
                    </div>

                    
                 
              
                </form>
                </div>

                      <div className="property-form-btn">
                        <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                        <button className="add-property-btn" onClick={() => setIsModalOpen(false)}>List Property</button>
                        
                     </div>

             </div>
           
        </div>
    )
}


export default AddPropertyModal;