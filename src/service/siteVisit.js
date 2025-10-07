// services/bookSiteVisit.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const bookSiteVisit = async (id, token) => {
  try {
    const url = `${API_BASE_URL}/api/user/bookvisit/${id}`;
    console.log("📌 Book Visit API URL:", url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("📌 Response status:", response.status);

    const data = await response.json();

    if (!response.ok) {
      console.error("📌 Error response:", data);
      throw new Error(data.message || "Failed to book site visit");
    }

    console.log("📌 Success response:", data);
    return data;
  } catch (err) {
    console.error("🚨 Error booking site visit:", err);
    throw err;
  }
};
