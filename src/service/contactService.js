import { getToken } from "../utils/authUtils";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendContactMessage = async ({ fullname, email, phone, message }) => {
  const token = getToken();
  console.log('Token:', token);
  console.log('Payload:', { fullname, email, phone, message });

  if (!token) {
    throw new Error('User is not authenticated');
  }

  try {
    const response = await fetch(`${BASE_URL}/api/user/getintouch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ fullname, email, phone, message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send message');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
};
