import { useEffect, useState } from 'react';

import { TIME_ROTATION } from '../../constants';
import { TPrices } from '../../types';

type TWheelBase = {
  prices: TPrices;
};

const generateWinProbability = (prices: TPrices) => {
  const sum = prices.reduce(
    (accumulator, price) => accumulator + price.probability,
    0
  );
  let pick = Math.random() * sum;
  const i = prices.findIndex((price) => (pick -= price.probability) <= 0);

  return i !== -1 ? i : 0;
};

export const useWheel = (props: TWheelBase) => {
  const { prices } = props;
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');
  const [wheelRotationDeg, setWheelRotationDeg] = useState(0);

  const sectionAngle = 360 / prices.length;
  const delta = sectionAngle / 2;

  const startSpin = () => {
    setSpinning(!spinning);
  };

  const showResult = (str: string) => {
    setResult(str);
    console.log('Wheel result >>> ', str); // TODO:
  };

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
      startSpin();
      const i = findSectionIndex(delta);
      const value = prices[i].value;
      showResult(value);
    }, TIME_ROTATION);

    return () => clearInterval(spinInterval);
  }, [wheelRotationDeg]);

  return { wheelRotationDeg, spinning, startSpin };
};
