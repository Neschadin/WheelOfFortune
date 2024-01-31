'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { apiService } from '../utils/api-service';
import { baseUrl } from '../config';

type TContextProps = {
  isAuthenticated: boolean;
  isSpined: boolean;
  redirectIfHasPlayed: () => void;
  startSpin: () => void;
};

const WheelContext = createContext<TContextProps>({} as TContextProps);

const useWheelCtx = () => useContext(WheelContext);

const WheelProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSpined, setIsSpined] = useState(false);
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

  const startSpin = () => {
    setIsSpined(true);
  };

  useEffect(() => {
    const token = searchParams.get('token');
    console.log(token);

    token && setToken(token);

    const verifyTokenAndPlayer = async () => {
      try {
        const res = await getPlayerData();

        if (Object.hasOwn(res, 'welcomeBonusReceived')) {
          res.welcomeBonusReceived
            ? redirectIfHasPlayed()
            : setIsAuthenticated(true);
        }
      } catch (err: any) {
        const { status = null, data = null } = err?.response;
        (status === 401 || data === 'Wrong token') && removeToken();
      }
    };

    verifyTokenAndPlayer();
  }, []);

  const contextValue = {
    isAuthenticated,
    isSpined,
    redirectIfHasPlayed,
    startSpin,
  };

  return (
    <WheelContext.Provider value={contextValue}>
      {children}
    </WheelContext.Provider>
  );
};

export { useWheelCtx, WheelProvider };
