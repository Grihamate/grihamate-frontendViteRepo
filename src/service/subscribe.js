const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const subscribe = async ({email }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to subscribe');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error sending in subscribe:', error);
    throw error;
  }
};
