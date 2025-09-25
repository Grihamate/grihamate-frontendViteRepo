export const bookSiteVisit = async (id, token) => {
  try {
    const url = `https://grihamate-backend-2.onrender.com/api/user/bookvisit/${id}`;
    console.log("📌 Book Visit API URL:", url);
    console.log("📌 Token being sent:", token);

    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json", // add content-type just in case backend expects it
    };

    console.log("📌 Headers being sent:", headers);

    const response = await fetch(url, {
      method: "POST",
      headers,
    });

    console.log("📌 Response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.log("📌 Error response:", errorData);
      return errorData;
    }

    const data = await response.json();
    console.log("📌 Success response:", data);
    return data;
  } catch (err) {
    console.error("🚨 Error booking site visit:", err);
    throw err;
  }
};
