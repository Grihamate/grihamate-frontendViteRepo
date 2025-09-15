import React, { useState, useEffect } from "react";
import ImageUpload from "../../../component/common/ImageUpload";
import { addProperty } from "../../../service/addProperty";
import { toast } from "react-toastify"; // ✅ Toastify import
import "react-toastify/dist/ReactToastify.css";
import "./style.css";



const AddPropertyModal = ({ setIsModalOpen }) => {
     const [formData, setFormData] = useState({
    propertyType: "Apartment",
    listingType: "For Rent",
    propertyTitle: "",
    furnishingStatus: "",
    bhkType: "",
    area: "",
    bathrooms: "",
    city: "",
    locality: "",
    description: "",
    contactName: "",
    phoneNumber: "",
    email: "",
    images: [],
    monthlyRent: "",
    securityDeposit: "",
    maintenanceCharge: "",
    amenities: [] ,
    propertyFacing:"",
    propertyAge:"",
    floor:"",
    educationName:"",
    educationDistance:"",
    healthName:"",
    healthDistance:"",
    foodName:"",
    foodDistance:"",
    travelName:"",
    fullAddress:"",
    
  });

  

  console.log("formData--->", formData);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Only check if token exists
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Please login first to post the property!", {
      position: "top-center",
      autoClose: 2000,
    });
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
    return;
  }

  // Validate required fields
  const missingFields = [];
  if (!formData.propertyTitle) missingFields.push("Property Title");
  if (!formData.area) missingFields.push("Area");
  if (!formData.bhkType) missingFields.push("BHK/Type");
  if (!formData.monthlyRent) missingFields.push("Monthly Rent");
  if (!formData.securityDeposit) missingFields.push("Security Deposit");
  if (!formData.maintenanceCharge) missingFields.push("Maintenance Charge");
  if (!formData.contactName) missingFields.push("Owner Name");
  if (!formData.phoneNumber) missingFields.push("Phone Number");
  if (!formData.email) missingFields.push("Email Address");
  if (!formData.city) missingFields.push("City");
  if (!formData.locality) missingFields.push("Locality");

  if (missingFields.length > 0) {
    toast.warning(`Please fill in the following fields: ${missingFields.join(", ")}`, {
      position: "top-center",
      autoClose: 3000,
    });
    return;
  }

  // Phone number validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(formData.phoneNumber)) {
    toast.error("Phone number must be 10 digits!", {
      position: "top-center",
      autoClose: 3000,
    });
    return;
  }

  try {
    // const propertyData = {
    //   propertyType: formData.propertyType,
    //   listingType: formData.listingType,
    //   title: formData.propertyTitle,
    //   area: formData.area,
    //   bhkType: formData.bhkType,
    //   bathrooms: formData.bathrooms,
    //   furnishingStatus: formData.furnishingStatus,
    //   monthlyRent: formData.monthlyRent,
    //   securityDeposit: formData.securityDeposit,
    //   maintenanceCharges: formData.maintenanceCharge,
    //   city: formData.city,
    //   locality: formData.locality,
    //   fullAddress: formData.fullAddress,
    //   description: formData.description,
    //   owner: formData.contactName,
    //   phone: formData.phoneNumber,
    //   email: formData.email,
    //   images: formData.images,
    //   amenities:formData.amenities || [],
    //   educationName:formData.educationName,
    //   educationDistance:formData.educationDistance,
    //   healthName:formData.healthName,
    //   healthDistance:formData.healthDistance,
    //   foodName:formData.foodName,
    //   foodDistance:formData.foodDistance,
    //   travelName:formData.travelName,
    //   travelDistance:formData.travelDistance,
    //   propertyFacing:formData.propertyFacing,
    //   propertyAge:formData.propertyAge,
    //   floor:formData.floor,
       
    // };


const propertyData = {
  propertyType: formData.propertyType,
  listingType: formData.listingType,

  basicDetails: {
    title: formData.propertyTitle,
    area: formData.area,
    bhkType: formData.bhkType,
    bathrooms: formData.bathrooms,
    furnishingStatus: formData.furnishingStatus,
    propertyFacing: formData.propertyFacing,
    propertyAge: formData.propertyAge,
    floor: formData.floor,
  },

  pricing: {
    monthlyRent: formData.monthlyRent,
    securityDeposit: formData.securityDeposit,
    maintenanceCharges: formData.maintenanceCharge,
  },

  location: {
    city: formData.city,
    locality: formData.locality,
    fullAddress: formData.fullAddress,
  },

  description: formData.description,

  contactInfo: {
    owner: formData.contactName,   
    phone: formData.phoneNumber,
    email: formData.email,
  },

  images: formData.images,
  amenities: formData.amenities || [],

  nearby: {
    education: {
      name: formData.educationName,
      distance: formData.educationDistance,
    },
    health: {
      name: formData.healthName,
      distance: formData.healthDistance,
    },
    food: {
      name: formData.foodName,
      distance: formData.foodDistance,
    },
    travel: {
      name: formData.travelName,
      distance: formData.travelDistance,
    },
  },
}


      console.log("propertData--->", propertyData);

    const response = await addProperty(propertyData, token);

    toast.success("Property listed successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
    setTimeout(() => setIsModalOpen(false), 2000);

  } catch (error) {
    console.error("Error adding property:", error);
    toast.error(error.message || "Something went wrong. Please try again.", {
      position: "top-center",
      autoClose: 3000,
    });
  }
};

  return (
    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
        <button 
          className="close-model" 
          onClick={() => setIsModalOpen(false)}
        >
          x
        </button>
        <div className="property-form">
          <h2>Add Your Property</h2>
            <div className="form-wrapper">
              <div className="form-scroll">
                <form className="input-form" onSubmit={handleSubmit}>
                  {/* Property Type */}
                  <div className="form-group">
                    <label className="form-label">Property Type</label>
                    <div className="radio-group">
                      {["Apartment", "Villa", "Office", "Shop", "Independent house"].map((type) => (
                        <label htmlFor={type} className="radio-lebel" key={type}>
                          <input
                            type="radio"
                            name="propertyType"
                            value={type}
                            checked={formData.propertyType === type}
                            onChange={(e) =>
                              setFormData({ ...formData, propertyType: e.target.value })
                            }
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Listing Type */}
                  <div className="form-group">
                    <label className="form-label">Listing Type</label>
                    <div className="radio-group">
                      <label htmlFor="For Rent" className="radio-lebel">
                        <input
                          type="radio"
                          name="listingType"
                          value="For Rent"
                          checked={formData.listingType === "For Rent"}
                          onChange={(e) =>
                            setFormData({ ...formData, listingType: e.target.value })
                          }
                        />
                        <span>For Rent</span>
                      </label>
                    </div>
                  </div>

                  {/* Basic Details */}
                  <div className="form-group">
                    <label className="form-group-label">Basic Details</label>
                    <div className="basic-filter">
                      {/* Property Title */}
                      <div className="filter-group">
                        <label htmlFor="propertyTitle">Property Title *</label>
                        <input
                          id="propertyTitle"
                          className="custom-input"
                          placeholder="e.g., Spacious 2BHK in Delhi"
                          value={formData.propertyTitle}
                          onChange={(e) =>
                            setFormData({ ...formData, propertyTitle: e.target.value })
                          }
                        />
                      </div>

                      {/* Furnishing Status */}
                      <div className="filter-group">
                        <label htmlFor="furnishingStatus">Furnishing Status</label>
                        <select
                          id="furnishingStatus"
                          className="custom-select"
                          value={formData.furnishingStatus}
                          onChange={(e) =>
                            setFormData({ ...formData, furnishingStatus: e.target.value })
                          }
                        >
                          <option value="">Select Furnishing</option>
                          <option value="Furnished">Furnished</option>
                          <option value="Semi-Furnished">Semi-Furnished</option>
                          <option value="Unfurnished">Unfurnished</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Fields */}
                    <div className="basic-filter-other">
                       {/* Area */}
                      <div className="filter-group-other">
                        <label htmlFor="area">Amenities & Features</label>
                        <input
                          id="area"
                          className="custom-input"
                          placeholder="Enter features"
                          value={formData.amenities.join(", ")}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              amenities: e.target.value.split(",").map((item) => item.trim()),
                            })
                          }
                         
                        />
                      </div>

                       <div className="filter-group-other">
                        <label htmlFor="area">Property Facing</label>
                        <select
                          id="area"
                          className="custom-select"
                           value={formData.pr}
                          onChange={(e) =>
                            setFormData({ ...formData, propertyFacing: e.target.value })
                          } 
                        >
                          <option value="">Select Property Facing</option>
                          <option value="east">East</option>
                          <option value="west">West</option>
                          <option value="north">North</option>
                          <option value="south">South</option>
                          
                        </select>
                      </div>

                       <div className="filter-group-other">
                        <label htmlFor="area">Property Age</label>
                        <select
                          id="area"
                          className="custom-select"
                          value={formData.propertyAge}
                          onChange={(e) =>
                            setFormData({ ...formData, propertyAge: e.target.value })
                          }                    
                        >
                          <option value="">Select Property Age</option>
                          <option value="1-5 years">1-5 years</option>
                          <option value="5-10 years">5-10 years</option>
                          <option value="10-15 years">10-15 years</option>
                        
                        </select>
                      </div>

                      {/* BHK/Type */}
                      <div className="filter-group-other">
                        <label htmlFor="bhkType">BHK/Type</label>
                        <select
                          id="bhkType"
                          className="custom-select"
                          value={formData.bhkType}
                          onChange={(e) =>
                            setFormData({ ...formData, bhkType: e.target.value })
                          }
                        >
                          <option value="">Select BHK</option>
                          <option value="1BHK">1BHK</option>
                          <option value="2BHK">2BHK</option>
                          <option value="3BHK">3BHK</option>
                          <option value="4BHK">4BHK</option>
                        </select>
                      </div>

                      <div className="filter-group-other">
                        <label htmlFor="floor">Floor</label>
                        <select
                          id="floor"
                          className="custom-select"
                          value={formData.floor}
                          onChange={(e) =>
                            setFormData({ ...formData, floor: e.target.value })
                          }
                        >
                          <option value="">Select Floor</option>
                          <option value="1 floor">1st Floor</option>
                          <option value="2 flooe">2nd Floor</option>
                        </select>
                      </div>
                  

                      {/* Bathrooms */}
                      <div className="filter-group-other">
                        <label htmlFor="bathrooms">Bathrooms</label>
                        <select
                          id="bathrooms"
                          className="custom-select"
                          value={formData.bathrooms}
                          onChange={(e) =>
                            setFormData({ ...formData, bathrooms: e.target.value })
                          }
                        >
                          <option value="">Select Bathrooms</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>

                    {/* Rent, Security, Maintenance */}
                    <div className="basic-filter-other">
                      <div className="filter-group-other">
                        <label htmlFor="monthlyRent">Monthly Rent (₹)</label>
                        <input
                          id="monthlyRent"
                          className="custom-input"
                          placeholder="Enter monthly rent"
                          value={formData.monthlyRent}
                          onChange={(e) =>
                            setFormData({ ...formData, monthlyRent: e.target.value })
                          }
                        />
                      </div>

                      <div className="filter-group-other">
                        <label htmlFor="securityDeposit">Security Deposit (₹)</label>
                        <input
                          id="securityDeposit"
                          className="custom-input"
                          placeholder="Enter security deposit"
                          value={formData.securityDeposit}
                          onChange={(e) =>
                            setFormData({ ...formData, securityDeposit: e.target.value })
                          }
                        />
                      </div>

                        {/* Area */}
                      <div className="filter-group-other">
                        <label htmlFor="area">Area (sq ft) *</label>
                        <input
                          id="area"
                          className="custom-input"
                          placeholder="Enter area in sq ft"
                          value={formData.area}
                          onChange={(e) =>
                            setFormData({ ...formData, area: e.target.value })
                          }
                        />
                      </div>

                      <div className="filter-group-other">
                        <label htmlFor="maintenanceCharge">Maintenance Charge (₹)</label>
                        <input
                          id="maintenanceCharge"
                          className="custom-input"
                          placeholder="Enter maintenance charge"
                          value={formData.maintenanceCharge}
                          onChange={(e) =>
                            setFormData({ ...formData, maintenanceCharge: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="form-group">
                    <label className="form-group-label">Location</label>
                    <div className="basic-filter">
                      {/* City */}
                      <div className="filter-group">
                        <label htmlFor="city">City *</label>
                        <input
                          id="city"
                          className="custom-input"
                          placeholder="Enter city"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                        />
                      </div>

                      {/* Locality */}
                      <div className="filter-group">
                        <label htmlFor="locality">Locality *</label>
                        <input
                          id="locality"
                          className="custom-input"
                          placeholder="Enter locality"
                          value={formData.locality}
                          onChange={(e) =>
                            setFormData({ ...formData, locality: e.target.value })
                          }
                        />
                      </div>
                    </div>

                         {/* full address */}
                    <div className="textarea-filter">
                      <label htmlFor="fullAddress">Full address</label>
                      <textarea
                        id="fullAddress"
                        placeholder="Enter Complete address"
                        value={formData.fullAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, fullAddress: e.target.value })
                        }
                      
                      />
                    </div>

                    {/* Description */}
                    <div className="textarea-filter">
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        placeholder="Description your property, amenities, neaby facilities,etc..."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                      />
                    </div>

                  

                    {/* Images Upload */}
                    <div className="textarea-filter">
                      <label htmlFor="Property Images">Property Images</label>
                      <ImageUpload />
                    </div>
                  </div>

                  
                  {/* Basic Details */}
                  <div className="form-group">
                    <label className="form-group-label">What's nearby</label>


                    <div className="basic-filter">
                      {/* Property Title */}
                      <div className="filter-group">
                        <label htmlFor="educationName">Education</label>
                        <input
                          id="educationName"
                          className="custom-input"
                          placeholder="Enter near Education details"
                          value={formData.educationName}
                          onChange={(e) =>
                            setFormData({ ...formData, educationName: e.target.value })
                          }
                       
                        />
                      </div>

                      {/* Distance */}
                      <div className="filter-group">
                        <label htmlFor="educationDistance">Distance</label>
                        <input
                          id="educationDistance"
                          className="custom-input"
                          placeholder="Enter distance"
                          value={formData.educationDistance}
                          onChange={(e) =>
                            setFormData({ ...formData, educationDistance: e.target.value })
                          }
                        
                        />
                  
                      </div>
                    </div>

                    {/* Health */}

                    <div className="basic-filter">
                         <div className="filter-group">
                        <label htmlFor="healthName">Health & Medicine</label>
                        <input
                          id="healthName"
                          className="custom-input"
                          placeholder="Enter Health and medicine details"
                          value={formData.healthName}
                          onChange={(e) =>
                            setFormData({ ...formData, healthName: e.target.value })
                          }
                         
                        />
                      </div>
                       {/* Distance */}
                      <div className="filter-group">
                        <label htmlFor="healthDistance">Distance</label>
                        <input
                          id="healthDistance"
                          className="custom-input"
                          placeholder="Enter distance"
                          value={formData.healthDistance}
                          onChange={(e) =>
                            setFormData({ ...formData, healthDistance: e.target.value })
                          }
                         
                        />
                  
                      </div>

                    </div>
                      
                    <div className="basic-filter">
                      
                       <div className="filter-group">
                        <label htmlFor="foodName">Food</label>
                        <input
                          id="foodName"
                          className="custom-input"
                          placeholder="Enter Food details"
                          value={formData.foodName}
                          onChange={(e) =>
                            setFormData({ ...formData, foodName: e.target.value })
                          }
                        
                        />
                      </div>

                       {/* Distance */}
                      <div className="filter-group">
                        <label htmlFor="foodDistance">Distance</label>
                        <input
                          id="foodDistance"
                          className="custom-input"
                          placeholder="Enter distance"
                          value={formData.foodDistance}
                          onChange={(e) =>
                            setFormData({ ...formData, foodDistance: e.target.value })
                          }
                       
                        />
                  
                      </div>
                    </div>

                    <div className="basic-filter">
                         <div className="filter-group">
                        <label htmlFor="travelName">Travel</label>
                        <input
                          id="travelName"
                          className="custom-input"
                          placeholder="Enter Travel details"
                          value={formData.travelName}
                          onChange={(e) =>
                            setFormData({ ...formData, travelName: e.target.value })
                          }
                          
                        />
                      
                      </div>

                       {/* Distance */}
                      <div className="filter-group">
                        <label htmlFor="travelDistance">Distance</label>
                        <input
                          id="travelDistance"
                          className="custom-input"
                          placeholder="Enter distance"
                          value={formData.travelDistance}
                          onChange={(e) =>
                            setFormData({ ...formData, travelDistance: e.target.value })
                          }
                      
                        />
                  
                      </div>
                    </div>
                    
                    
                  </div>

                  {/* Contact Information */}
                  <div className="form-group">
                    <label className="form-group-label">Contact Information</label>
                    <div className="basic-filter">
                      <div className="filter-group">
                        <label htmlFor="contactName">Owner Name *</label>
                        <input
                          id="contactName"
                          className="custom-input"
                          placeholder="Enter owner name"
                          value={formData.contactName}
                          onChange={(e) =>
                            setFormData({ ...formData, contactName: e.target.value })
                          }
                        />
                      </div>

                      <div className="filter-group">
                        <label htmlFor="phoneNumber">Phone Number *</label>
                        <input
                          id="phoneNumber"
                          className="custom-input"
                          placeholder="Enter phone number"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, phoneNumber: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="textarea-filter">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        className="custom-input"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="property-form-btn">
                    <button
                      className="cancel-btn"
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button className="add-property-btn"  type="submit">
                      List Property
                    </button>
                  </div>
                </form>
              </div>
          </div>
        </div>
    </div>
   
  )
}

export default AddPropertyModal;







