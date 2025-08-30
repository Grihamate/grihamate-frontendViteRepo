const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const getProperty = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/property/all`);
    if (!response.ok) {
      throw new Error("There is some error in the API");
    }
    const data = await response.json();  // Added await here
    return data;
  } catch (error) {
    console.error("There is some error in the API:", error);
    throw error;  // It's better to throw error so calling code can handle it
  }
};
