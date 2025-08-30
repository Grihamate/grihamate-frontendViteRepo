import { getToken } from "../utils/authUtils";
export const sendContactMessage = async ({ fullname, email, phone, message }) => {
  const token = getToken();
  console.log('Token:', token);
  console.log('Payload:', { fullname, email, phone, message });

  try {
    const response = await fetch('http://localhost:5000/api/user/getintouch', {
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

