'use client';

import { useState } from 'react';

import {
  CheckboxRow,
  GreenButton,
  Modal,
  WheelOfFortune,
} from '@/src/components';
import { DropGiftIcon } from '@/src/components/icons';
import { ModalContentSignIn } from './modal-content-sign-in';
import { useAuth } from '@/src/providers/wheel-provider';

import { baseUrl } from '@/src/config';

const LabelFirstChB = ({ isAuth }: { isAuth: boolean }) => (
  <>
    <a
      href={baseUrl + (isAuth ? '' : 'api/player/auth')}
      className="font-bold text-[#A99FDB] underline underline-offset-2"
    >
      SIGN UP
    </a>
    <span> NOW AND REDEEM THE BENEFITS BELOW</span>
  </>
);

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, isBonusReceived } = useAuth();

  const openCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClaimBtn = () => {
    if (isAuthenticated) {
      window.location.href = baseUrl;
    } else {
      openCloseModal();
    }
  };

  return (
    <main className="m-auto flex h-full max-w-screen-2xl items-center justify-around">
      <div className="h-[700px] w-[500px]">
        <div className="mb-20 font-luckiest text-[56px] leading-[66px] tracking-[8.25px]">
          <h1 className="text-[#FCE305]">YOUWIN</h1>
          <h1 className="text-[#F5F5F5]">FREE SKINS</h1>
        </div>

        <div className="mb-16 flex flex-col gap-11">
          <CheckboxRow checked={isAuthenticated}>
            <LabelFirstChB isAuth={isAuthenticated} />
          </CheckboxRow>
          <CheckboxRow checked={isBonusReceived}>
            1 FREE WHEEL OF FORTUNE SPIN
          </CheckboxRow>
          <CheckboxRow checked={false}>3 FREE BOXES EVERY DAY</CheckboxRow>
        </div>

        <div className="mx-auto mb-12 flex w-fit">
          <DropGiftIcon />
          <DropGiftIcon />
          <DropGiftIcon />
        </div>

        <div className="mx-auto w-fit">
          <GreenButton onClick={handleClaimBtn} disabled={isBonusReceived}>
            CLAIM NOW
          </GreenButton>
        </div>

        <Modal isOpen={isModalOpen} onClose={openCloseModal}>
          <ModalContentSignIn />
        </Modal>
      </div>

      <WheelOfFortune />
    </main>
  );
};
