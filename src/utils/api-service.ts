import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { baseUrl } from '../config';

class ApiService {
  private _apiClient: AxiosInstance;

  constructor() {
    this._apiClient = axios.create({
      baseURL: baseUrl + '/api/',
    });

    this._apiClient.interceptors.request.use(
      (config) => {
        const authToken =
          typeof window !== 'undefined' && localStorage.getItem('authToken');

        if (config.headers && authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
      },
      (err) => {
        console.error('Error adding auth token to request >> ', err);
        return Promise.reject(err);
      }
    );
  }

  private async handleRequest<T>(
    request: Promise<AxiosResponse<T>>
  ): Promise<T> {
    try {
      const res = await request;
      return res.data;
    } catch (error) {
      console.error('Error fetching data >> ', error);
      throw error;
    }
  }

  getPlayerData = (): Promise<{ welcomeBonusReceived: boolean }> => // describe the user type if it will be needed;
    this.handleRequest(this._apiClient.get('player'));

  getRoulettePrizes = (): Promise<TWheelSections> =>
    this.handleRequest(this._apiClient.get('meta/wheel'));

  getRouletteResult = (): Promise<TResult> =>
    this.handleRequest(this._apiClient.get('meta/wheel/result'));
}

export const apiService = new ApiService();
