const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendContactMessage = async ({ fullname, email, phone, message }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/getintouch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
