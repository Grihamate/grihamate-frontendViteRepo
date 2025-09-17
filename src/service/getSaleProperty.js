// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const getSaleProperty = async (filters = {}) => {
//   try {
//     const query = new URLSearchParams();

//     if (filters.location) query.append("city", filters.location);
//     if (filters.locality) query.append("locality", filters.locality);
//     if (filters.propertyType) query.append("propertyType", filters.propertyType);
//     if (filters.rentOrBuy) query.append("listingType", filters.rentOrBuy);
//     if (filters.priceRange?.min) query.append("minPrice", filters.priceRange.min);
//     if (filters.priceRange?.max) query.append("maxPrice", filters.priceRange.max);
//     if (filters.bedrooms) query.append("bhkType", `${filters.bedrooms}BHK`);

//     const response = await fetch(`${BASE_URL}/api/sale/all?${query.toString()}`);
//     if (!response.ok) throw new Error("API error");

//     return await response.json();
//   } catch (error) {
//     console.error("API error:", error);
//     throw error;
//   }
// };



const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getSaleProperty = async (filters = {}) => {
  try {
    const query = new URLSearchParams();

    if (filters.location) query.append("city", filters.location);
    if (filters.propertyType) query.append("propertyType", filters.propertyType);
    if (filters.rentOrBuy) query.append("listingType", filters.rentOrBuy);
    // ✅ Price Range
    // if (filters.priceRange?.min) query.append("minPrice", filters.priceRange.min);
    // if (filters.priceRange?.max) query.append("maxPrice", filters.priceRange.max);
    
    if (filters.bhk?.length > 0) query.append("bhkType", filters.bhk.join(","));
    if (filters.furnished) query.append("furnished", filters.furnished);
    if (filters.area?.min) query.append("minArea", filters.area.min);
    if (filters.area?.max) query.append("maxArea", filters.area.max);
    if (filters.amenities?.length > 0) query.append("amenities", filters.amenities.join(","));
    if (filters.status) query.append("status", filters.status);
    if (filters.facing) query.append("facing", filters.facing);
    if (filters.age) query.append("age", filters.age);

    const response = await fetch(`${BASE_URL}/api/sale/all?${query.toString()}`);
    if (!response.ok) throw new Error("API error");

    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};
