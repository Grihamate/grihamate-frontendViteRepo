// service/getPropertyById.js
export const getPropertyById = async (id, token) => {
  try {
    const response = await fetch(
      `https://grihamate-backend-2.onrender.com/api/property/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // send token in header
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch property details");
    }

    const data = await response.json();
    return data.property; // return the property object
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error;
  }
};
