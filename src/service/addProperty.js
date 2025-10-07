
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const addProperty = async (propertyData, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/property/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // only Authorization header
        // ❌ don't set Content-Type → browser will set multipart boundary automatically
      },
      body: propertyData, // this is FormData now
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to add property");
    }

    return data;
  } catch (error) {
    console.error("Error adding property:", error);
    throw error;
  }
};

