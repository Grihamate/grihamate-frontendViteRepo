// src/service/userService.js

import { getToken } from "../utils/authUtils";

export const fetchUserProfile = async () => {
  const token = getToken();

  if (!token) {
    throw new Error("No token found");
  }

  const res = await fetch("http://localhost:5000/api/user/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load profile");
  }

  return data.user;
};
