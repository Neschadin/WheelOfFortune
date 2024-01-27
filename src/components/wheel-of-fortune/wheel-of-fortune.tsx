import { useState } from 'react';
import { useWheel } from './use-wheel';
import { useWheelCtx } from '@/src/providers/wheel-provider';

import { ModalContentYourWin } from '@/src/pages-content/home/modal-content-your-win';
import { ModalContentSignIn } from '@/src/pages-content/home/modal-content-sign-in';
import { CenterCircles } from './center-circles';
import { WheelSegments } from './wheel-segments';
import { GoButton } from './go-button';
import { MarkerIcon } from '../icons';
import { Modal } from '..';
import clsx from 'clsx';

export const WheelOfFortune = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { wheelSections, isAuthenticated, forbiddenToPlay } = useWheelCtx();
  const {
    TIME_ROTATION,
    wheelRotationDeg,
    isSpined,
    startSpin,
    result,
    winIndex,
    showWinResult,
  } = useWheel(wheelSections);

  const goBtnAction = () => {
    if (isAuthenticated) {
      startSpin();
    } else {
      setIsModalOpen(true);
    }
  };

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
            className="size-full transition-transform"
            style={{
              transform: `rotate(${wheelRotationDeg}deg)`,
              transitionDuration: `${TIME_ROTATION}ms`,
            }}
          >
            <WheelSegments {...{ wheelSections, winIndex }} />
          </div>
        </div>

        <CenterCircles />

        <div
          className={clsx(
            'absolute left-[34%] top-1/2 -translate-y-1/2 transition-all',
            winIndex ? 'opacity-100' : 'opacity-0'
          )}
        >
          <MarkerIcon />
        </div>

        <GoButton
          onClick={goBtnAction}
          disabled={!wheelSections.length || isSpined || forbiddenToPlay}
        />
      </div>

      <Modal isOpen={showWinResult || isModalOpen}>
        {result ? (
          <ModalContentYourWin result={result} />
        ) : (
          <ModalContentSignIn isGoBtn />
        )}
      </Modal>
    </div>
  );
};
