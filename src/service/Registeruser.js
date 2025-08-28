

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

    const contentType = response.headers.get("content-type");
    let data = {};

    // ✅ Try to parse JSON only if it's JSON
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    }

    if (!response.ok) {
      // 🔁 If backend sent a message, show it
      throw new Error(data.message || "Failed to register user");
    }

    return data; // success { message, user }
  } catch (error) {
    console.error("Register Error:", error);
    throw error;
  }
};


// src/services/authService.js

const API_URl = "http://localhost:5000/api/user/login"; // Replace with your backend URL

export const loginUser = async (phone, password) => {
  try {
    const response = await fetch(`${API_URl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
    });

    const contentType = response.headers.get("content-type");
    let data = {};

    // ✅ Parse JSON only if response is valid JSON
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    }

    // ❌ Handle backend errors properly
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data; // ✅ Successful response: { message, token, user }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

