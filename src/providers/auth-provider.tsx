'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useApiService } from '../hooks/use-api-service';

interface AuthContextProps {
  // authToken: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  // removeToken: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { validateToken, getRoulettePrizes, getRouletteResult } =
    useApiService();
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem('authToken')
  );

  const removeToken = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
  };

  const revalidateToken = () => {
    validateToken()
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch((data) => {
        data.response.status === 401 && removeToken();
      });
  };

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
    revalidateToken();
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    token && revalidateToken();
  }, []);

  const contextValue = {
    // authToken,
    isAuthenticated,
    setToken,
    // removeToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
