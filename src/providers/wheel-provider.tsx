'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { apiService } from '../utils/api-service';
import { baseUrl } from '../config';

type TContextProps = {
  isAuthenticated: boolean;
  isSpined: boolean;
  isModalOpen: boolean;
  result: TResult | undefined;
  startSpin: () => void;
  showResult: (result: TResult) => void;
  handleClaimBtn: () => void;
  handleGoBtn: () => void;
  handleSignInBtn: () => void;
  openModal: () => void;
  closeModal: () => void;
};

const WheelContext = createContext<TContextProps>({} as TContextProps);

const useWheelCtx = () => useContext(WheelContext);

const WheelProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSpined, setIsSpined] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resultRef = useRef<TResult>();
  const isGoBtnPressedRef = useRef<boolean>();
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const startSpin = () => setIsSpined(true);
  const showResult = (result: TResult) => {
    resultRef.current = result;
    openModal();
  };

  const handleClaimBtn = () => {
    isGoBtnPressedRef.current = false;
    isAuthenticated ? redirectIfHasPlayed() : openModal();
  };

  const handleGoBtn = () => {
    isGoBtnPressedRef.current = true;
    isAuthenticated ? startSpin() : setIsModalOpen(true);
  };

  const handleSignInBtn = () => {
    const url = `${baseUrl}api/player/auth${isGoBtnPressedRef.current ? '?source=wheel' : ''}`;
    window.location.href = url;
  };

  useEffect(() => {
    const token = searchParams.get('token');
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
    isModalOpen,
    result: resultRef.current,
    startSpin,
    showResult,
    handleClaimBtn,
    handleGoBtn,
    handleSignInBtn,
    openModal,
    closeModal,
  };

  return (
    <WheelContext.Provider value={contextValue}>
      {children}
    </WheelContext.Provider>
  );
};

export { useWheelCtx, WheelProvider };
