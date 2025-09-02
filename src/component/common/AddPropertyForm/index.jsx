// import React, { useState } from "react";
// import ImageUpload from "../../../component/common/ImageUpload";
// import { addProperty } from "../../../service/addProperty";
// import "./style.css";

// const AddPropertyModal = ({ setIsModalOpen }) => {
//   const [formData, setFormData] = useState({
//     propertyType: "Apartment",
//     listingType: "For Rent",
//     propertyTitle: "eg. spacious 2BHK in Delhi",
// furnishingStatus: "Furnished",

//     bhkType: "2BHK",
//     area: "950",
//     bathrooms: "2",
//     city: "Delhi",
//     locality: "Connaught Place",
//     description: "",
//     contactName: "Owner Name",
//     phoneNumber: "9898989898",
//     email: "pranjaltakkar0@gmail.com",
//     images: [],
//     monthlyRent: "25000",
//     securityDeposit: "5000",
//     maintenanceCharge: "5000",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Required field check
//     const missingFields = [];
//     if (!formData.propertyTitle) missingFields.push("Property Title");
//     if (!formData.area) missingFields.push("Area");
//     if (!formData.bhkType) missingFields.push("BHK/Type");
//     if (!formData.monthlyRent) missingFields.push("Monthly Rent");
//     if (!formData.securityDeposit) missingFields.push("Security Deposit");
//     if (!formData.maintenanceCharge) missingFields.push("Maintenance Charge");
//     if (!formData.contactName) missingFields.push("Owner Name");
//     if (!formData.phoneNumber) missingFields.push("Phone Number");
//     if (!formData.email) missingFields.push("Email Address");
//     if (!formData.city) missingFields.push("City");
//     if (!formData.locality) missingFields.push("Locality");

//     if (missingFields.length > 0) {
//       alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
//       return;
//     }

//     try {
//       // Prepare property object to match backend
//       const propertyData = {
//         propertyType: formData.propertyType,
//         listingType: formData.listingType,
//         title: formData.propertyTitle,
//         area: formData.area,
//         bhkType: formData.bhkType,
//         bathrooms: formData.bathrooms,
//         furnishingStatus: formData.furnishingStatus,
//         monthlyRent: formData.monthlyRent,
//         securityDeposit: formData.securityDeposit,
//         maintenanceCharges: formData.maintenanceCharge,
//         city: formData.city,
//         locality: formData.locality,
//         fullAddress: formData.fullAddress || "",
//         description: formData.description,
//         owner: formData.contactName,
//         phone: formData.phoneNumber,
//         email: formData.email,
//         images: formData.images, // assuming backend supports array of image URLs/paths
//       };

//       const response = await addProperty(propertyData);

//       console.log("Property added successfully:", response);
//       alert("Property listed successfully!");
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error("Error adding property:", error);
//       alert(error.message || "Something went wrong. Please try again.");
//     }
//   };




//   return (
  
//     <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//       <div className="property-form">
//         <h2>Add Your Property</h2>
//         <div className="form-scroll">
//           <form className="input-form" onSubmit={handleSubmit}>
//             {/* Property Type */}
//             <div className="form-group">
//               <label className="form-label">Property Type</label>
//               <div className="radio-group">
//                 {["Apartment", "Villa", "Office", "Shop", "Independent house"].map((type) => (
//                   <label htmlFor={type} className="radio-lebel" key={type}>
//                     <input
//                       type="radio"
//                       name="propertyType"
//                       value={type}
//                       checked={formData.propertyType === type}
//                       onChange={(e) =>
//                         setFormData({ ...formData, propertyType: e.target.value })
//                       }
//                     />
//                     <span>{type}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Listing Type */}
//             <div className="form-group">
//               <label className="form-label">Listing Type</label>
//               <div className="radio-group">
//                 {["For Rent"].map((type) => (
//                   <label htmlFor={type} className="radio-lebel" key={type}>
//                     <input
//                       type="radio"
//                       name="listingType"
//                       value={type}
//                       checked={formData.listingType === type}
//                       onChange={(e) =>
//                         setFormData({ ...formData, listingType: e.target.value })
//                       }
//                     />
//                     <span>{type}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Basic Details */}
//             <div className="form-group">
//               <label className="form-group-label">Basic Details</label>
//               <div className="basic-filter">
//                 <div className="filter-group">
//                   <label htmlFor="propertyTitle">Property Title *</label>
//                   <input
//                     id="propertyTitle"
//                     className="custom-select"
//                     value={formData.propertyTitle}
//                     onChange={(e) =>
//                       setFormData({ ...formData, propertyTitle: e.target.value })
//                     }
//                   />
//                 </div>

//             <div className="filter-group">
//   <label htmlFor="furnishingStatus">Furnishing Status</label>
//   <select
//     id="furnishingStatus"
//     className="custom-select"
//     value={formData.furnishingStatus}
//     onChange={(e) =>
//       setFormData({ ...formData, furnishingStatus: e.target.value })
//     }
//   >
//     <option value="Furnished">Furnished</option>
//     <option value="Semi-Furnished">Semi-Furnished</option>
//     <option value="Unfurnished">Unfurnished</option>
//   </select>
// </div>

//               </div>

//               {/* Additional Fields */}
//               <div className="basic-filter-other">
//                 <div className="filter-group-other">
//                   <label htmlFor="bhkType">BHK/Type</label>
//                   <input
//                     id="bhkType"
//                     className="custom-select"
//                     value={formData.bhkType}
//                     onChange={(e) =>
//                       setFormData({ ...formData, bhkType: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className="filter-group-other">
//                   <label htmlFor="area">Area (sq ft) *</label>
//                   <input
//                     id="area"
//                     className="custom-select"
//                     value={formData.area}
//                     onChange={(e) =>
//                       setFormData({ ...formData, area: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className="filter-group-other">
//                   <label htmlFor="bathrooms">Bathrooms</label>
//                   <input
//                     id="bathrooms"
//                     className="custom-select"
//                     value={formData.bathrooms}
//                     onChange={(e) =>
//                       setFormData({ ...formData, bathrooms: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               {/* Rent, Security, Maintenance */}
//               <div className="basic-filter-other">
//                 <div className="filter-group-other">
//                   <label htmlFor="monthlyRent">Monthly Rent (₹)</label>
//                   <input
//                     id="monthlyRent"
//                     className="custom-select"
//                     value={formData.monthlyRent}
//                     onChange={(e) =>
//                       setFormData({ ...formData, monthlyRent: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className="filter-group-other">
//                   <label htmlFor="securityDeposit">Security Deposit (₹)</label>
//                   <input
//                     id="securityDeposit"
//                     className="custom-select"
//                     value={formData.securityDeposit}
//                     onChange={(e) =>
//                       setFormData({ ...formData, securityDeposit: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className="filter-group-other">
//                   <label htmlFor="maintenanceCharge">Maintenance Charge (₹)</label>
//                   <input
//                     id="maintenanceCharge"
//                     className="custom-select"
//                     value={formData.maintenanceCharge}
//                     onChange={(e) =>
//                       setFormData({ ...formData, maintenanceCharge: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Location Details */}
//             <div className="form-group">
//               <label className="form-group-label">Location</label>
//               <div className="basic-filter">
//                 <div className="filter-group">
//                   <label htmlFor="city">City *</label>
//                   <input
//                     id="city"
//                     className="custom-select"
//                     value={formData.city}
//                     onChange={(e) =>
//                       setFormData({ ...formData, city: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className="filter-group">
//                   <label htmlFor="locality">Locality *</label>
//                   <input
//                     id="locality"
//                     className="custom-select"
//                     value={formData.locality}
//                     onChange={(e) =>
//                       setFormData({ ...formData, locality: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="textarea-filter">
//                 <label htmlFor="description">Description</label>
//                 <textarea
//                   id="description"
//                   placeholder="Enter property description"
//                   value={formData.description}
//                   onChange={(e) =>
//                     setFormData({ ...formData, description: e.target.value })
//                   }
//                 />
//               </div>

//               {/* Images Upload */}
//               <div className="textarea-filter">
//                 <label htmlFor="Property Images">Property Images</label>
//                 <ImageUpload />
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="form-group">
//               <label className="form-group-label">Contact Information</label>
//               <div className="basic-filter">
//                 <div className="filter-group">
//                   <label htmlFor="contactName">Owner Name *</label>
//                   <input
//                     id="contactName"
//                     className="custom-input"
//                     value={formData.contactName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, contactName: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className="filter-group">
//                   <label htmlFor="phoneNumber">Phone Number *</label>
//                   <input
//                     id="phoneNumber"
//                     className="custom-input"
//                     value={formData.phoneNumber}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phoneNumber: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="basic-filter">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   id="email"
//                   className="custom-input"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="property-form-btn">
//               <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>
//                 Cancel
//               </button>
//               <button className="add-property-btn" type="submit">
//                 List Property
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       </div>

//   );
// };

// export default AddPropertyModal;
import React, { useState } from "react";
import ImageUpload from "../../../component/common/ImageUpload";
import { addProperty } from "../../../service/addProperty";
import "./style.css";

const AddPropertyModal = ({ setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    propertyType: "Apartment",
    listingType: "For Rent",
    propertyTitle: "eg. spacious 2BHK in Delhi",
    furnishingStatus: "Furnished",
    bhkType: "2BHK",
    area: "950",
    bathrooms: "2",
    city: "Delhi",
    locality: "Connaught Place",
    description: "",
    contactName: "Owner Name",
    phoneNumber: "9898989898",
    email: "pranjaltakkar0@gmail.com",
    images: [],
    monthlyRent: "25000",
    securityDeposit: "5000",
    maintenanceCharge: "5000",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Required field check
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
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    try {
      // Prepare property object to match backend
      const propertyData = {
        propertyType: formData.propertyType,
        listingType: formData.listingType,
        title: formData.propertyTitle,
        area: formData.area,
        bhkType: formData.bhkType,
        bathrooms: formData.bathrooms,
        furnishingStatus: formData.furnishingStatus,
        monthlyRent: formData.monthlyRent,
        securityDeposit: formData.securityDeposit,
        maintenanceCharges: formData.maintenanceCharge,
        city: formData.city,
        locality: formData.locality,
        fullAddress: formData.fullAddress || "",
        description: formData.description,
        owner: formData.contactName,
        phone: formData.phoneNumber,
        email: formData.email,
        images: formData.images, // assuming backend supports array of image URLs/paths
      };

      const response = await addProperty(propertyData);

      console.log("Property added successfully:", response);
      alert("Property listed successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding property:", error);
      alert(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="property-form">
          <h2>Add Your Property</h2>
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
                  {["For Rent"].map((type) => (
                    <label htmlFor={type} className="radio-lebel" key={type}>
                      <input
                        type="radio"
                        name="listingType"
                        value={type}
                        checked={formData.listingType === type}
                        onChange={(e) =>
                          setFormData({ ...formData, listingType: e.target.value })
                        }
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Basic Details */}
              <div className="form-group">
                <label className="form-group-label">Basic Details</label>
                <div className="basic-filter">
                  <div className="filter-group">
                    <label htmlFor="propertyTitle">Property Title *</label>
                    <input
                      id="propertyTitle"
                      className="custom-select"
                      value={formData.propertyTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, propertyTitle: e.target.value })
                      }
                    />
                  </div>

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
                      <option value="Furnished">Furnished</option>
                      <option value="Semi-Furnished">Semi-Furnished</option>
                      <option value="Unfurnished">Unfurnished</option>
                    </select>
                  </div>
                </div>

                {/* Additional Fields */}
                <div className="basic-filter-other">
                  <div className="filter-group-other">
                    <label htmlFor="bhkType">BHK/Type</label>
                    <input
                      id="bhkType"
                      className="custom-select"
                      value={formData.bhkType}
                      onChange={(e) =>
                        setFormData({ ...formData, bhkType: e.target.value })
                      }
                    />
                  </div>

                  <div className="filter-group-other">
                    <label htmlFor="area">Area (sq ft) *</label>
                    <input
                      id="area"
                      className="custom-select"
                      value={formData.area}
                      onChange={(e) =>
                        setFormData({ ...formData, area: e.target.value })
                      }
                    />
                  </div>

                  <div className="filter-group-other">
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <input
                      id="bathrooms"
                      className="custom-select"
                      value={formData.bathrooms}
                      onChange={(e) =>
                        setFormData({ ...formData, bathrooms: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Rent, Security, Maintenance */}
                <div className="basic-filter-other">
                  <div className="filter-group-other">
                    <label htmlFor="monthlyRent">Monthly Rent (₹)</label>
                    <input
                      id="monthlyRent"
                      className="custom-select"
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
                      className="custom-select"
                      value={formData.securityDeposit}
                      onChange={(e) =>
                        setFormData({ ...formData, securityDeposit: e.target.value })
                      }
                    />
                  </div>

                  <div className="filter-group-other">
                    <label htmlFor="maintenanceCharge">Maintenance Charge (₹)</label>
                    <input
                      id="maintenanceCharge"
                      className="custom-select"
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
                  <div className="filter-group">
                    <label htmlFor="city">City *</label>
                    <input
                      id="city"
                      className="custom-select"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    />
                  </div>

                  <div className="filter-group">
                    <label htmlFor="locality">Locality *</label>
                    <input
                      id="locality"
                      className="custom-select"
                      value={formData.locality}
                      onChange={(e) =>
                        setFormData({ ...formData, locality: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="textarea-filter">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    placeholder="Enter property description"
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

              {/* Contact Information */}
              <div className="form-group">
                <label className="form-group-label">Contact Information</label>
                <div className="basic-filter">
                  <div className="filter-group">
                    <label htmlFor="contactName">Owner Name *</label>
                    <input
                      id="contactName"
                      className="custom-input"
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
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="basic-filter">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    className="custom-input"
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
                <button className="add-property-btn" type="submit">
                  List Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyModal;

