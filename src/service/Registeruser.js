const BASE_URL = import.meta.env.VITE_API_BASE_URL;



export const registerUser = async (userData) => {
  try {
    // Ensure the base URL ends with a slash so we can concatenate correctly
    const response = await fetch(`${BASE_URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const contentType = response.headers.get("content-type");
    let data = {};

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    }

    if (!response.ok) {
      throw new Error(data.message || "Failed to register user");
    }

    return data;
  } catch (error) {
    console.error("Register Error:", error);
    throw error;
  }
};



export const loginUser = async (phone, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });

    const contentType = response.headers.get("content-type");
    let data = {};

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    }

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    // Response will include: message, token, and user
    return data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};
