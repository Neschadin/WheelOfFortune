'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { apiService } from '../utils/api-service';
import { baseUrl } from '../config';

type TContextProps = {
  isAuthenticated: boolean;
  forbiddenToPlay: boolean;
  wheelSections: TWheelSections;
  redirectIfHasPlayed: () => void;
};

type TProviderProps = {
  token?: string;
  wheelSections: TWheelSections;
  children: ReactNode;
};

const WheelContext = createContext<TContextProps>({} as TContextProps);

const useWheelCtx = () => useContext(WheelContext);

const WheelProvider = ({ token, wheelSections, children }: TProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [forbiddenToPlay, setForbiddenToPlay] = useState(true);
  const { getPlayerData } = apiService;

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };

  const redirectIfHasPlayed = () => {
    const currToken = localStorage.getItem('authToken');
    window.location.href = baseUrl + '?token=' + currToken;
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    token && setToken(token);

    const verifyTokenAndPlayer = async () => {
      try {
        const res = await getPlayerData();

        if (res && res.welcomeBonusReceived) {
          redirectIfHasPlayed();
        } else {
          setForbiddenToPlay(false);
          setIsAuthenticated(true);
        }
      } catch (err: any) {
        const { status, data } = err?.response;
        (status === 401 || data === 'Wrong token') && removeToken();
      }
    };

    verifyTokenAndPlayer();
  }, []);

  const contextValue = {
    isAuthenticated,
    forbiddenToPlay,
    wheelSections,
    redirectIfHasPlayed,
  };

  return (
    <WheelContext.Provider value={contextValue}>
      {children}
    </WheelContext.Provider>
  );
};

export { useWheelCtx, WheelProvider };
