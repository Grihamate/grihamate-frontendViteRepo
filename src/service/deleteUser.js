// import { getToken } from "../utils/authUtils";

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;


// export const deleteUserAccount = async (userId) => {
//   const token = getToken();

//   try {
//     const response = await fetch(`${BASE_URL}/api/user/delete/${userId}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to delete account");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error deleting account:", error);
//     throw error;
//   }
// };
import { getToken } from "../utils/authUtils";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const deleteUserAccount = async (userId) => {
  const token = getToken();

  try {
    const response = await fetch(`${BASE_URL}/api/user/delete/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,   // ✅ ensure token is sent
      },
    });

    console.log("Delete response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete account");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting account:", error);
    throw error;
  }
};



