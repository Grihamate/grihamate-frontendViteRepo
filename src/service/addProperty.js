// Retrieve the base URL from the environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const addProperty = async (propertyData) => {
  try {
    const token = localStorage.getItem("token"); // Get the token from localStorage

    if (!token) {
      throw new Error("User not authenticated");
    }

    const response = await fetch(`${API_BASE_URL}/api/property/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
      },
      body: JSON.stringify(propertyData), // Pass the property data as JSON
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to add property");
    }

    return data; // Return the response data (e.g., the new property details)
  } catch (error) {
    console.error("Error adding property:", error);
    throw error; // Rethrow the error for handling elsewhere
  }
};
