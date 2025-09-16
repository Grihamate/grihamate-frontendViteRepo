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
    if (filters.locality) query.append("locality", filters.locality);

    // ✅ Property Type
    if (filters.propertyType) query.append("propertyType", filters.propertyType);

    // ✅ Rent / Buy
    if (filters.rentOrBuy) query.append("listingType", filters.rentOrBuy);

    // ✅ Price Range
    if (filters.priceRange?.min) query.append("minPrice", filters.priceRange.min);
    if (filters.priceRange?.max) query.append("maxPrice", filters.priceRange.max);

    // ✅ BHK
    if (filters.bhk?.length > 0) query.append("bhkType", filters.bhk.join(","));

    // ✅ Furnished
    if (filters.furnished) query.append("furnished", filters.furnished);

    // ✅ Area Range
    if (filters.area?.min) query.append("minArea", filters.area.min);
    if (filters.area?.max) query.append("maxArea", filters.area.max);

    // ✅ Amenities
    if (filters.amenities?.length > 0) query.append("amenities", filters.amenities.join(","));

    // ✅ Status
    if (filters.status) query.append("status", filters.status);

    // ✅ Facing
    if (filters.facing) query.append("facing", filters.facing);

    // ✅ Age of Property
    if (filters.age) query.append("age", filters.age);

    const response = await fetch(`${BASE_URL}/api/sale/all?${query.toString()}`);
    if (!response.ok) throw new Error("API error");

    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};
