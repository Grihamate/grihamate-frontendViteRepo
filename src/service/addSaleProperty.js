// services/propertyService.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const addSaleProperty = async (propertyData, token) => {
  try {
    const formData = new FormData();

    // 🔹 Core
    formData.append("propertyType", propertyData.propertyType);
    formData.append("listingType", propertyData.listingType);

    // 🔹 Basic Details
    formData.append("title", propertyData.title);
    formData.append("area", propertyData.area);
    if (propertyData.carpetArea) formData.append("carpetArea", propertyData.carpetArea);
    formData.append("bhkType", propertyData.bhkType);
    formData.append("bathrooms", propertyData.bathrooms);
    formData.append("furnishingStatus", propertyData.furnishingStatus);
    formData.append("propertyFacing", propertyData.propertyFacing);
    formData.append("propertyAge", propertyData.propertyAge);
    if (propertyData.floor) formData.append("floor", propertyData.floor);
    if (propertyData.transactionType) formData.append("transactionType", propertyData.transactionType);
    formData.append("price", propertyData.price);
    formData.append("priceUnit", propertyData.priceUnit || "Crores");
    formData.append("maintenanceCharges", propertyData.maintenanceCharges);
    if (propertyData.reraId) formData.append("reraId", propertyData.reraId);
    formData.append("propertyStatus", propertyData.propertyStatus);

    // 🔹 Location
    formData.append("state", propertyData.state);
    formData.append("city", propertyData.city);
    formData.append("locality", propertyData.locality);
    if (propertyData.landmark) formData.append("landmark", propertyData.landmark);
    formData.append("fullAddress", propertyData.fullAddress);
    if (propertyData.pincode) formData.append("pincode", propertyData.pincode);

    // 🔹 Description
    if (propertyData.description) formData.append("description", propertyData.description);

    // 🔹 Amenities
    if (propertyData.amenities?.length) {
      propertyData.amenities.forEach((amenity) => {
        formData.append("amenities", amenity);
      });
    }

    // 🔹 Images
    if (propertyData.images?.length) {
      propertyData.images.forEach((image) => {
        formData.append("images", image);
      });
    }

    // 🔹 Floor Plan
    if (propertyData.diningArea) formData.append("diningArea", propertyData.diningArea);
    if (propertyData.bedroomArea) formData.append("bedroomArea", propertyData.bedroomArea);
    if (propertyData.bathroomArea) formData.append("bathroomArea", propertyData.bathroomArea);

    // 🔹 What's Nearby
    if (propertyData.educationName && propertyData.educationDistance) {
      formData.append("educationName", propertyData.educationName);
      formData.append("educationDistance", propertyData.educationDistance);
    }
    if (propertyData.healthName && propertyData.healthDistance) {
      formData.append("healthName", propertyData.healthName);
      formData.append("healthDistance", propertyData.healthDistance);
    }
    if (propertyData.foodName && propertyData.foodDistance) {
      formData.append("foodName", propertyData.foodName);
      formData.append("foodDistance", propertyData.foodDistance);
    }
    if (propertyData.travelName && propertyData.travelDistance) {
      formData.append("travelName", propertyData.travelName);
      formData.append("travelDistance", propertyData.travelDistance);
    }

    // 🔹 Contact Info
    if (propertyData.advisor) formData.append("advisor", propertyData.advisor);
    formData.append("owner", propertyData.owner);
    formData.append("phone", propertyData.phone);
    formData.append("email", propertyData.email);

  const response = await fetch(`${API_BASE_URL}/api/sale/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Required
          // ❌ Don't set Content-Type, browser handles it for FormData
        },
        body: formData,
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Failed to add property");

    return data;
  } catch (error) {
    console.error("Error in addSaleProperty service:", error);
    throw error;
  }
};
