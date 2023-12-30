import { useEffect, useState } from 'react';
import { generateWinProbability } from '../utils/utils';

import { TIME_ROTATION } from '../constants';
import { TWheelOfFortune } from '../types';

export const useWheel = (props: TWheelOfFortune) => {
  const { prices, startStopSpinning, spinning, showResult } = props;
  const [wheelRotationDeg, setWheelRotationDeg] = useState(0);
  const sectionAngle = 360 / prices.length;
  const delta = sectionAngle / 2;

  const findSectionIndex = (shift: number = 0) => {
    const currentSegment = ((wheelRotationDeg % 360) + shift) / sectionAngle;
    const i = Math.floor(currentSegment);
    return i >= prices.length ? 0 : i;
  };

  // prize section generation;
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

  // wheel rotation start;
  useEffect(() => {
    if (!wheelRotationDeg) return;

    const spinInterval = setTimeout(() => {
      startStopSpinning(false);
      const i = findSectionIndex(delta);
      const value = prices[i].value;
      showResult(value);
    }, TIME_ROTATION);

    return () => clearInterval(spinInterval);
  }, [wheelRotationDeg]);

  return wheelRotationDeg;
};
