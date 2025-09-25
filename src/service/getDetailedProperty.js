const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch normal all properties
export const getPropertiesByIds = async (ids) => {
  try {
    const token = localStorage.getItem("token");


    const res = await fetch(`${BASE_URL}/api/property/getbyids`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ids }),
    });

    if (!res.ok) throw new Error("Failed to fetch properties");

    const data = await res.json();
    return data?.properties || [];
  } catch (err) {
    console.error("Error in getPropertiesByIds:", err);
    return [];
  }
};




export const getSellPropertiesByIds = async (ids) => {
  try {
    const token = localStorage.getItem("token");

    const url = `${BASE_URL}/api/sale/getbyids`;
   

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ids }),
    });



    const data = await res.json();
 

    return data?.saleProperties || []; // ✅ Fix here
  } catch (err) {

    return [];
  }
};
