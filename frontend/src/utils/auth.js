import axios from 'axios';

export const getAccessToken = async () => {
  let accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  // Token exists
  if (accessToken) return accessToken;

  // Try refreshing if access token is missing/expired
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/refresh-token`,
      { refreshToken },
      { withCredentials: true }
    );

    accessToken = response.data.accessToken;
    localStorage.setItem('accessToken', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Refresh token failed:', error);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return null;
  }
};
