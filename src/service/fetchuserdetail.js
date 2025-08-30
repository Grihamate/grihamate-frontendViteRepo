// src/service/userService.js

import { getToken } from "../utils/authUtils";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUserProfile = async () => {
  const token = getToken();

  if (!token) {
    throw new Error("No token found");
  }

  const res = await fetch(`${BASE_URL}/api/user/profile`, {
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
