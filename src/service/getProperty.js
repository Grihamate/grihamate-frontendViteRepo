const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProperty = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/property/all`);
    if (!response.ok) {
      throw new Error("There is some error in the API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

