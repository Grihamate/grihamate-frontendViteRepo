// services/saleService.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getSalePropertyById = async (id, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/sale/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // 👈 add token
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || "Failed to fetch property details");
      error.status = response.status;
      throw error;
    }

    return data; // contains { success, Saleproperty }
  } catch (error) {
    console.error("Error fetching sale property by ID:", error);
    throw error;
  }
};

