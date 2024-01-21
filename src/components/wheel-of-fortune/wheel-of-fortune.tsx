import { useWheel } from './use-wheel';

import { CenterCircles } from './center-circles';
import { WheelSegments } from './wheel-segments';
import { GoButton } from './go-button';
import { MarkerIcon } from '../icons';

import { TIME_ROTATION } from '../../constants';
import { prices } from '@/src/mockup'; //TODO: temp

export const WheelOfFortune = () => {
  const { wheelRotationDeg, spinning, startSpin } = useWheel({ prices });

  return (
    <div className="flex-center relative flex-col gap-10">
      <div
        className="relative h-[640px] w-[640px] shrink-0 overflow-hidden rounded-full border-4 border-zinc-900 bg-gradient-to-br 
      from-purple-700 via-violet-900 to-indigo-600"
        style={{ boxShadow: '0px 0px 12px 12px rgba(130 121 255 / 0.25)' }}
      >
        <div
          className="block-center h-2/5 w-2/5 rounded-full"
          style={{ boxShadow: '0px 0px 64px 32px rgba(221 214 214 / 0.5)' }}
        />

        <div
          className="h-full w-full transition-transform"
          style={{
            transform: `rotate(${wheelRotationDeg}deg)`,
            transitionDuration: `${TIME_ROTATION}ms`,
          }}
        >
          <WheelSegments prices={prices} />
        </div>

        <CenterCircles />

        <div className="absolute left-[34%] top-1/2 -translate-y-1/2">
          <MarkerIcon />
        </div>

        <GoButton {...{ startSpin, spinning }} />
      </div>
    </div>
  );
};
