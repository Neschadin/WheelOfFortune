'use client';
import { useState } from 'react';

import { Checkbox, GreenButton, Modal, WheelOfFortune } from '@/src/components';
import { DropGiftIcon } from '@/src/components/icons';
import { getImgUrl } from '@/src/utils/imageUrls';
import { ModalContentSignIn } from './modal-content-sign-in';

const labelFirstChB = (
  <>
    <span className="font-bold text-[#A99FDB] underline underline-offset-2">
      SIGN UP
    </span>
    <span> NOW AND REDEEM THE BENEFITS BELOW</span>
  </>
);

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // const [result, setResult] = useState('');

  const openCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const showResult = (str: string) => {
  //   setResult(str);
  //   console.log('Wheel result >>> ', str); // TODO:
  // };

  return (
    <main className="m-auto flex h-full max-w-screen-2xl items-center justify-around">
      <div className="h-[700px] w-[500px]">
        <div className="mb-20 font-luckiest text-[56px] leading-[66px] tracking-[8.25px]">
          <h1 className="text-[#FCE305]">YOUWIN</h1>
          <h1 className="text-[#F5F5F5]">FREE SKINS</h1>
        </div>

        <div className="mb-16 flex flex-col gap-11">
          <Checkbox onClick={() => {}} label={labelFirstChB} />
          <Checkbox onClick={() => {}} label="1 FREE WHEEL OF FORTUNE SPIN" />
          <Checkbox onClick={() => {}} label="3 FREE BOXES EVERY DAY" />
        </div>

        <div className="mx-auto mb-12 flex w-fit">
          <DropGiftIcon />
          <DropGiftIcon />
          <DropGiftIcon />
        </div>

        <div className="mx-auto w-fit">
          <GreenButton>CLAIM NOW</GreenButton>
        </div>

        <Modal isOpen={isModalOpen} onClose={openCloseModal}>
          <ModalContentSignIn onAction={() => console.log('test')} />
        </Modal>
      </div>

      <WheelOfFortune />
    </main>
  );
};
