'use client';

import { useEffect, useState } from 'react';

import {
  CheckboxRow,
  GreenButton,
  Modal,
  WheelOfFortune,
} from '@/src/components';
import { DropGiftIcon } from '@/src/components/icons';
import { getImgUrl } from '@/src/utils/imageUrls';
import { ModalContentSignIn } from './modal-content-sign-in';
import { useApiService } from '@/src/hooks/use-api-service';
import { useAuth } from '@/src/providers/auth-provider';

const labelFirstChB = (
  <>
    <span className="font-bold text-[#A99FDB] underline underline-offset-2">
      SIGN UP
    </span>
    <span> NOW AND REDEEM THE BENEFITS BELOW</span>
  </>
);

export const Home = ({ authToken }: { authToken?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGoBtnPressed, setIsGoBtnPressed] = useState(false);
  const [hasFreeSpin, setHasFreeSpin] = useState(true);
  const { isAuthenticated, setToken } = useAuth();
  const { validateToken, getRoulettePrizes, getRouletteResult } =
    useApiService();

  const openCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const handleSignInBtn = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const url = `${baseUrl}api/player/auth${isGoBtnPressed ? '?source=wheel' : ''}`;
    window.location.href = url;
  };

  const handleClaimBtn = () => {
    if (isAuthenticated) {
      window.location.href = process.env.NEXT_PUBLIC_BASE_URL!;
    } else {
      openCloseModal();
    }
  };

  const handleGoBtn = (cb: () => void) => {
    if (isAuthenticated) {
      cb();
    } else {
      setIsGoBtnPressed(true);
      openCloseModal();
    }
  };

  useEffect(() => {
    if (authToken) {
      setToken(authToken);
    }
  }, []);

  return (
    <main className="m-auto flex h-full max-w-screen-2xl items-center justify-around">
      <div className="h-[700px] w-[500px]">
        <div className="mb-20 font-luckiest text-[56px] leading-[66px] tracking-[8.25px]">
          <h1 className="text-[#FCE305]">YOUWIN</h1>
          <h1 className="text-[#F5F5F5]">FREE SKINS</h1>
        </div>

        <div className="mb-16 flex flex-col gap-11">
          <CheckboxRow checked={isAuthenticated} label={labelFirstChB} />
          <CheckboxRow checked label="1 FREE WHEEL OF FORTUNE SPIN" />
          <CheckboxRow label="3 FREE BOXES EVERY DAY" />
        </div>

        <div className="mx-auto mb-12 flex w-fit">
          <DropGiftIcon />
          <DropGiftIcon />
          <DropGiftIcon />
        </div>

        <div className="mx-auto w-fit">
          <GreenButton onClick={handleClaimBtn}>CLAIM NOW</GreenButton>
        </div>

        <Modal isOpen={isModalOpen} onClose={openCloseModal}>
          <ModalContentSignIn onAction={handleSignInBtn} />
        </Modal>
      </div>

      <WheelOfFortune handleGoBtn={handleGoBtn} />
    </main>
  );
};
