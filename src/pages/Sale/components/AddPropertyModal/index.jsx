import React, { useState } from "react";
import "./style.css";

export default function AddPropertyModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    propertyType: "",
    listingType: "",
    title: "",
    area: "",
    bhkType: "",
    bathrooms: "",
    furnishingStatus: "",
    propertyFacing: "",
    propertyAge: "",
    price: "",
    maintenanceCharges: "",
    amenities: [],
    city: "",
    locality: "",
    fullAddress: "",
    description: "",
    educationName: "",
    educationDistance: "",
    healthName: "",
    healthDistance: "",
    foodName: "",
    foodDistance: "",
    travelName: "",
    travelDistance: "",
    owner: "",
    phone: "",
    email: "",
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenitiesChange = (e) => {
    const values = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prev) => ({ ...prev, amenities: values }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: Array.from(e.target.files)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
 <div className="property-modal-overlay">
  <div className="property-modal-content">
    <div className="property-modal-header">
      <h2>Add Property</h2>
      <button className="property-close-btn" onClick={onClose}>
        ×
      </button>
    </div>

    <form className="property-form" onSubmit={handleSubmit}>
      {/* Basic Details */}
      <div className="property-form-section">
        <h3>Basic Details</h3>

        <div className="property-label-input-pair">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter property title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="property-label-input-pair">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
          >
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment / Flat</option>
            <option value="Independent House">Independent House / Villa</option>
            <option value="Plot">Plot / Land</option>
            <option value="Commercial Space">Commercial Space</option>
          </select>
        </div>

        <div className="property-label-input-pair">
          <label>Listing Type</label>
          <select
            name="listingType"
            value={formData.listingType}
            onChange={handleChange}
          >
            <option value="">Select Listing Type</option>
            <option value="For Rent">For Rent</option>
            <option value="For Sale">For Sale</option>
          </select>
        </div>

        <div className="property-label-input-pair">
          <label>Area (sq ft)</label>
          <input
            type="number"
            name="area"
            placeholder="Enter area"
            value={formData.area}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Property Details */}
      <div className="property-form-section">
        <h3>Details</h3>

        <div className="property-label-input-pair">
          <label>BHK Type</label>
          <input
            type="text"
            name="bhkType"
            placeholder="Enter BHK type"
            value={formData.bhkType}
            onChange={handleChange}
          />
        </div>

        <div className="property-label-input-pair">
          <label>Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            placeholder="Enter number of bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </div>

        <div className="property-label-input-pair">
          <label>Furnishing Status</label>
          <select
            name="furnishingStatus"
            value={formData.furnishingStatus}
            onChange={handleChange}
          >
            <option value="">Select Furnishing Status</option>
            <option value="Furnished">Furnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>

        <div className="property-label-input-pair">
          <label>Property Facing</label>
          <input
            type="text"
            name="propertyFacing"
            placeholder="Enter property facing"
            value={formData.propertyFacing}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Amenities */}
      <div className="property-form-section">
        <h3>Amenities</h3>

        <div className="property-label-input-pair">
          <label>Amenities</label>
          <select name="amenities" multiple onChange={handleAmenitiesChange}>
            <option value="High Speed Wifi">High Speed Wifi</option>
            <option value="24/7 Security">24/7 Security</option>
            <option value="Water Supply">Water Supply</option>
            <option value="Power Backup">Power Backup</option>
            <option value="Parking">Parking</option>
            <option value="Gym">Gym</option>
            <option value="Garden">Garden</option>
            <option value="Club">Club</option>
          </select>
        </div>

        <div className="property-label-input-pair">
          <label>Property Age</label>
          <input
            type="text"
            name="propertyAge"
            placeholder="Enter property age"
            value={formData.propertyAge}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Contact & Location */}
      <div className="property-form-section">
        <h3>Contact & Location</h3>

        <div className="property-label-input-pair">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="property-label-input-pair">
          <label>Locality</label>
          <input
            type="text"
            name="locality"
            placeholder="Enter locality"
            value={formData.locality}
            onChange={handleChange}
          />
        </div>

        <div className="property-label-input-pair">
          <label>Full Address</label>
          <textarea
            name="fullAddress"
            placeholder="Enter full address"
            value={formData.fullAddress}
            onChange={handleChange}
          />
        </div>

        <div className="property-label-input-pair">
          <label>Owner Name</label>
          <input
            type="text"
            name="owner"
            placeholder="Enter owner name"
            value={formData.owner}
            onChange={handleChange}
          />
        </div>

        <div className="property-label-input-pair">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="property-label-input-pair">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Images */}
      <div className="property-form-section">
        <h3>Upload Images</h3>
        <input
          type="file"
          name="images"
          multiple
          onChange={handleImageChange}
        />
      </div>

      {/* Buttons */}
      <div className="property-modal-buttons">
        <button type="submit" className="property-btn property-btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="property-btn property-btn-secondary"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>

  );
}
