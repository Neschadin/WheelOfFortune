import axios from 'axios';

import { baseUrl } from '../config';

export const useApiService = () => {
  const apiClient = axios.create({
    baseURL: baseUrl + 'api/',
  });

  apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    const authString = token && `Bearer ${token}`;
    if (config.headers && authString) {
      config.headers.Authorization = authString;
    }

    return config;
  });

  const getPlayerData = () => {
    return apiClient.get('player');
  };

  const getRoulettePrizes = () => {
    return apiClient.get('meta/wheel');
  };

  const getRouletteResult = () => {
    return apiClient.get('meta/wheel/result');
  };

  return {
    getPlayerData,
    getRoulettePrizes,
    getRouletteResult,
  };
};
