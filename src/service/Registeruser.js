

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

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data; // { message, token, user }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
