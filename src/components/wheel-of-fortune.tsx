import { useEffect, useState } from 'react';

import { Arrow } from './arrow';
import { WheelSegments } from './wheel-segments';
import { CenterCircle } from './center-circle';

import { TWheelOfFortune } from '../types';
import { generateWinProbability } from '../utils/utils';

const timeRotation = 7000;

const WheelOfFortune = (props: TWheelOfFortune) => {
  const { prices, startStopSpinning, spinning, showResult } = props;
  const sectionAngle = 360 / prices.length;
  const delta = sectionAngle / 2;
  const [wheelRotationDeg, setWheelRotationDeg] = useState(0);

  const findSectionIndex = (shift: number = 0) => {
    const currentSegment = ((wheelRotationDeg % 360) + shift) / sectionAngle;
    const i = Math.floor(currentSegment);

    return i >= prices.length ? i - 1 : i;
  };

  useEffect(() => {
    if (!spinning) return;

    const winProbability = generateWinProbability(prices);
    const currSectionIndex = findSectionIndex();

    const remainingDeg = wheelRotationDeg % sectionAngle;
    const randomDeg = Math.floor(Math.random() * sectionAngle) - remainingDeg;
    const offsetToWinSection =
      (winProbability - currSectionIndex) * sectionAngle + randomDeg;
    const totalRotation = offsetToWinSection + 360 * 5 - delta;

    setWheelRotationDeg((prev) => prev + totalRotation);
  }, [spinning]);

  useEffect(() => {
    if (!wheelRotationDeg) return;

    const spinInterval = setTimeout(() => {
      startStopSpinning(false);
      const i = findSectionIndex(delta);
      const value = prices[i].value;
      showResult(value);
    }, timeRotation);

    return () => clearInterval(spinInterval);
  }, [wheelRotationDeg]);

  return (
    <div className='relative h-full border bg-slate-100 rounded-full overflow-hidden'>
      <div
        className='h-full w-full transition-transform'
        style={{
          transform: `rotate(${wheelRotationDeg}deg)`,
          transitionDuration: `${timeRotation}ms`,
        }}
      >
        <WheelSegments prices={prices} />
      </div>

      <div className='absolute -bottom-1 left-1/2 -translate-x-1/2'>
        <Arrow />
      </div>

      <div className='block-center'>
        <CenterCircle />
      </div>
    </div>
  );
};

export { WheelOfFortune };
