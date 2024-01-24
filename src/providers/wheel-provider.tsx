'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useApiService } from '../hooks/use-api-service';

type TContextProps = {
  isAuthenticated: boolean;
  isBonusReceived: boolean;
};

type TProviderProps = {
  token?: string;
  children: ReactNode;
};

const AuthContext = createContext<TContextProps>({} as TContextProps);

const useAuth = () => useContext(AuthContext);

const WheelProvider = ({ token, children }: TProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBonusReceived, setIsBonusReceived] = useState(false);
  const { getPlayerData } = useApiService();

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  const verifyTokenAndPlayer = () => {
    getPlayerData()
      .then((res) => {
        setIsBonusReceived(res.data.welcomeBonusReceived);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        err.response.status === 401 && removeToken();
      });
  };

  useEffect(() => {
    token && setToken(token);
    verifyTokenAndPlayer();
  }, [token]);

  const contextValue = {
    isAuthenticated,
    isBonusReceived,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { useAuth, WheelProvider };
