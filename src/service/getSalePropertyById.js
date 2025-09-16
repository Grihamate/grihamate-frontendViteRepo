// services/saleService.js
export const getSalePropertyById = async (id, token) => {
  try {
    const response = await fetch(
      `https://grihamate-backend-2.onrender.com/api/sale/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 👈 add token
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch property: ${response.status}`);
    }

    const data = await response.json();
    return data; // contains { success, Saleproperty }
  } catch (error) {
    console.error("Error fetching sale property by ID:", error);
    throw error;
  }
};
