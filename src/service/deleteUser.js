import { getToken } from "../utils/authUtils";

export const deleteUserAccount = async (userId) => {
  const token = getToken();

  try {
    const response = await fetch(`http://localhost:5000/api/user/delete/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete account");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
};
