const API_URL = import.meta.env.VITE_API_BASE_URL + "/api/user";


/**
 * Forgot Password API call
 * @param {string} email - User's email address
 * @returns {Promise<object>} Response from server
 */
export const forgotPassword = async (email) => {
  try {
    const response = await fetch(`${API_URL}/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Network error, please try again later");
  }
};
