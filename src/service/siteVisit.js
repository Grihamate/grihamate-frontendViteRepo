// service/siteVisit.js
export const bookSiteVisit = async (token) => {
  try {
    const response = await fetch(
      "https://grihamate-backend-2.onrender.com/api/user/bookvisit",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      // If server responds with error code
      const errorData = await response.json();
      return errorData;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error booking site visit:", err);
    throw err;
  }
};
