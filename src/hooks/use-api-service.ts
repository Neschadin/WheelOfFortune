import axios from 'axios';

export const useApiService = () => {
  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL + 'api/',
  });

  apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    const authString = token && `Bearer ${token}`;
    if (config.headers && authString) {
      config.headers.Authorization = authString;
    }

    return config;
  });

  const validateToken = () => {
    return apiClient.get('player');
  };

  const getRoulettePrizes = () => {
    return apiClient.get('meta/wheel');
  };

  const getRouletteResult = () => {
    return apiClient.get('meta/wheel/result');
  };

  return {
    validateToken,
    getRoulettePrizes,
    getRouletteResult,
  };
};
