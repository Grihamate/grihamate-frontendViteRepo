// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const getProperty = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/api/property/all`);
//     if (!response.ok) {
//       throw new Error("There is some error in the API");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("API error:", error);
//     throw error;
//   }
// };
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProperty = async (filters = {}) => {
  try {
    const query = new URLSearchParams();

    // Map filters to backend query params
    if (filters.location) query.append("city", filters.location);
    if (filters.propertyType) query.append("propertyType", filters.propertyType);
    if (filters.category) query.append("category", filters.category);
    if (filters.rentOrBuy) query.append("listingType", filters.rentOrBuy); // backend expects listingType
    if (filters.priceRange) query.append("priceRange", filters.priceRange);
    if (filters.bedrooms) query.append("bhkType", filters.bedrooms+"bhk");

    const response = await fetch(`${BASE_URL}/api/property/all?${query.toString()}`);
    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};


