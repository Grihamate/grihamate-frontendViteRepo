const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Reset user password
 * @param {string} token - JWT reset token
 * @param {string} newPassword - new password
 * @param {string} confirmPassword - confirm password
 * @returns {Promise<object>} - response data
 */
export async function resetPassword(token, newPassword, confirmPassword) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user/resetpassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // 👈 attach token here
      },
      body: JSON.stringify({
        newpassword: newPassword,
        confirmpassword: confirmPassword,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Password reset failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Reset password error:", error);
    throw error;
  }
}
