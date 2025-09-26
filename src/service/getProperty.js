

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const getProperty = async (filters = {}) => {
//   try {
//     const query = new URLSearchParams();

//     if (filters.location) query.append("city", filters.location);
//     if (filters.locality) query.append("locality", filters.locality);
//     if (filters.propertyType) query.append("propertyType", filters.propertyType);
//     if (filters.rentOrBuy) query.append("listingType", filters.rentOrBuy);

//     if (filters.priceRange) query.append("priceRange", filters.priceRange); // 👈 full string bhej rahe hain
//     if (filters.minPrice) query.append("minPrice", filters.minPrice);
//     if (filters.maxPrice) query.append("maxPrice", filters.maxPrice);

//     if (filters.bhkType) query.append("bhkType", filters.bhkType);
//     if (filters.furnished) query.append("furnished", filters.furnished);



//     const response = await fetch(`${BASE_URL}/api/property/all?${query.toString()}`);
//     if (!response.ok) throw new Error("API error");

//     return await response.json();
//   } catch (error) {
//     console.error("API error:", error);
//     throw error;
//   }
// };

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProperty = async (filters = {}) => {
  try {
    const query = new URLSearchParams();

    if (filters.location) query.append("city", filters.location);
    if (filters.locality) query.append("locality", filters.locality);
    if (filters.propertyType) query.append("propertyType", filters.propertyType);

    // ✅ Change Rent/Buy to exact backend format
    if (filters.rentOrBuy) {
      const listingType =
        filters.rentOrBuy === "Rent" ? "For Rent" : "For Sale";
      query.append("listingType", listingType);
    }

    if (filters.priceRange) query.append("priceRange", filters.priceRange);
    if (filters.minPrice) query.append("minPrice", filters.minPrice);
    if (filters.maxPrice) query.append("maxPrice", filters.maxPrice);
    if (filters.bhkType) query.append("bhkType", filters.bhkType);
    if (filters.furnished) query.append("furnishingStatus", filters.furnished);

    const response = await fetch(`${BASE_URL}/api/property/all?${query.toString()}`);
    if (!response.ok) throw new Error("API error");

    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};
