'use client';

import { useWheelCtx } from '@/src/providers/wheel-provider';
import {
  CheckboxRow,
  GreenButton,
  Modal,
  WheelOfFortune,
} from '@/src/components';
import { DropGiftIcon } from '@/src/components/icons';

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
  const { isAuthenticated, isSpined, handleClaimBtn } = useWheelCtx();

  return (
    <main className="relative mx-auto h-dvh items-center justify-around overflow-hidden xl:flex">
      <div className="mx-6 mt-12 md:ml-16 lg:w-[500px]">
        <div className="mb-12 text-center font-luckiest text-3xl tracking-[8.25px] sm:text-left md:mb-20 md:text-[56px] md:leading-[66px]">
          <h1 className="text-[#FCE305]">YOUWIN</h1>
          <h1 className="text-[#F5F5F5]">FREE SKINS</h1>
        </div>

        <div className="mb-8 flex flex-col gap-7 text-xs md:mb-16 md:gap-11 md:text-sm">
          <CheckboxRow checked={isAuthenticated}>
            <LabelFirstChB isAuthenticated={isAuthenticated} />
          </CheckboxRow>
          <CheckboxRow checked={isSpined}>
            1 FREE WHEEL OF FORTUNE SPIN
          </CheckboxRow>
          <CheckboxRow checked={false}>3 FREE BOXES EVERY DAY</CheckboxRow>
        </div>

        <div className="mx-auto mb-12 hidden w-fit lg:flex">
          <DropGiftIcon />
          <DropGiftIcon />
          <DropGiftIcon />
        </div>

        <div className="mx-auto w-fit scale-75 sm:scale-100 md:mx-0 lg:mx-auto">
          <GreenButton onClick={handleClaimBtn}>CLAIM NOW</GreenButton>
        </div>
      </div>

      <div
        className="absolute -bottom-72 left-1/2 -translate-x-1/2 scale-50 sm:scale-75 md:-right-72 md:bottom-1/2 
                   md:translate-x-0 md:translate-y-1/2 lg:-right-80 xl:static xl:translate-y-0 xl:scale-100"
      >
        <WheelOfFortune />
      </div>

      <Modal />
    </main>
  );
};
