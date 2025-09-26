// src/service/userService.js

export const getUserProfile = async (token) => {
  try {
    const response = await fetch(
      "https://grihamate-backend-2.onrender.com/api/user/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data = await response.json();
    return data; // { message: "...", user: {...} }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
// update the profile 
// Update user profile
export const updateUserProfile = async (id, updatedData, token) => {
  try {
    const response = await fetch(
      `https://grihamate-backend-2.onrender.com/api/user/update/${id}`,
      {
        method: "PUT", // backend expects PUT for update
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // add token
        },
        body: JSON.stringify(updatedData),
      }
    );

    const data = await response.json();

    // console.log(data);

    // console.log("status:", response.status, "data:", data);

    if (!response.ok) {
      throw new Error(data.message || "Failed to update profile");
    }

    return data; // contains { message, user }
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

