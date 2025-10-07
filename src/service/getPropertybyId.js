// service/getPropertyById.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getPropertyById = async (id, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/property/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // send token in header
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || "Failed to fetch property details");
      error.status = response.status;
      throw error;
    }

    return data.property; // ✅ success case
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
};

