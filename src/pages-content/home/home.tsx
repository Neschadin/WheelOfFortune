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
import { useWheelCtx } from '@/src/providers/wheel-provider';

import { baseUrl } from '@/src/config';

const LabelFirstChB = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
  <>
    <a
      href={baseUrl + (isAuthenticated ? '' : 'api/player/auth')}
      className="font-bold text-[#A99FDB] underline underline-offset-2"
    >
      SIGN UP
    </a>
    <span> NOW AND REDEEM THE BENEFITS BELOW</span>
  </>
);

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, forbiddenToPlay, redirectIfHasPlayed } =
    useWheelCtx();

  const openCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClaimBtn = () => {
    isAuthenticated ? redirectIfHasPlayed() : openCloseModal();
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
            <LabelFirstChB isAuthenticated={isAuthenticated} />
          </CheckboxRow>
          <CheckboxRow checked={!forbiddenToPlay}>
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
          <GreenButton onClick={handleClaimBtn}>CLAIM NOW</GreenButton>
        </div>

        <Modal isOpen={isModalOpen} onClose={openCloseModal}>
          <ModalContentSignIn />
        </Modal>
      </div>

      <WheelOfFortune />
    </main>
  );
};
