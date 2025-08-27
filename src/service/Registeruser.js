

const API_URL = "http://localhost:5000/api/user";

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const data = await response.json();
    return data; // { message, user }
  } catch (error) {
    console.error("Register Error:", error);
    throw error;
  }
};
