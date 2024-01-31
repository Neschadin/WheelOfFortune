import { useState } from 'react';
import clsx from 'clsx';
import { useWheel } from './use-wheel';
import { useWheelCtx } from '@/src/providers/wheel-provider';

import { ModalContentYourWin } from '@/src/pages-content/home/modal-content-your-win';
import { ModalContentSignIn } from '@/src/pages-content/home/modal-content-sign-in';
import { CenterCircles } from './center-circles';
import { WheelSegments } from './wheel-segments';
import { GoButton } from './go-button';
import { MarkerIcon } from '../icons';
import { Modal } from '..';

export const WheelOfFortune = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, isSpined, startSpin } = useWheelCtx();
  const {
    TIME_ROTATION,
    wheelSections,
    wheelRotationDeg,
    result,
    winIndex,
    showWinResult,
  } = useWheel(isSpined);

  const goBtnAction = () => {
    isAuthenticated ? startSpin() : setIsModalOpen(true);
  };

  const onClose = () => setIsModalOpen(false);

  return (
    <div className="flex-center relative flex-col gap-10">
      <div
        className="relative h-[640px] w-[640px] shrink-0 overflow-hidden rounded-full border-4 border-zinc-900 bg-gradient-to-br 
      from-[#da87c2] via-violet-900 to-[#9795f0]"
        style={{ boxShadow: '0px 0px 12px 12px rgba(130 121 255 / 0.25)' }}
      >
        <div
          className="block-center h-2/5 w-2/5 rounded-full"
          style={{ boxShadow: '0px 0px 64px 32px rgba(221 214 214 / 0.5)' }}
        />

        <div className="size-full rotate-90">
          <div
            className="size-full"
            style={{
              transform: `rotate(${wheelRotationDeg}deg)`,
              transitionDuration: `${TIME_ROTATION}ms`,
              transitionTimingFunction: 'cubic-bezier(0.5, -0.25, 0, 1)',
            }}
          >
            <WheelSegments {...{ wheelSections, winIndex }} />
          </div>
        </div>

        <CenterCircles />

        <div
          className={clsx(
            'absolute top-1/2 -translate-y-1/2 transition-all duration-500',
            isSpined ? 'left-[34%] opacity-100' : 'left-[36%] opacity-0'
          )}
        >
          <MarkerIcon />
        </div>

        <div className="block-center size-1/5">
          <GoButton
            onClick={goBtnAction}
            disabled={!wheelSections.length || isSpined}
          />
        </div>
      </div>

      <Modal isOpen={showWinResult || isModalOpen} onClose={onClose}>
        {result ? (
          <ModalContentYourWin result={result} />
        ) : (
          <ModalContentSignIn isGoBtn />
        )}
      </Modal>
    </div>
  );
};
