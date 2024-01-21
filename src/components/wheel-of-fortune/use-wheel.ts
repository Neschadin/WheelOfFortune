import { useEffect, useState } from 'react';

import { TPrices } from '../../types';

const TIME_ROTATION = 7000;

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
  const [hasSpined, setHasSpined] = useState(false);
  const [winIndex, setWinIndex] = useState<null | number>(null);
  const [wheelRotationDeg, setWheelRotationDeg] = useState(0);

  const sectionAngle = 360 / prices.length;
  const delta = sectionAngle / 2;

  const startSpin = () => {
    setHasSpined(!hasSpined);
  };

  const showResult = (i: number) => {
    setWinIndex(i);
    console.log('Wheel result >>> ', i); // TODO:
  };

  const findSectionIndex = (shift: number = 0) => {
    const currentSegment = ((wheelRotationDeg % 360) + shift) / sectionAngle;
    const i = Math.floor(currentSegment);
    return i >= prices.length ? 0 : i;
  };

  // prize section generation;
  useEffect(() => {
    if (!hasSpined) return;

    const winProbability = generateWinProbability(prices);
    const currSectionIndex = findSectionIndex();

    const remainingDeg = wheelRotationDeg % sectionAngle;
    const randomDeg = Math.floor(Math.random() * sectionAngle) - remainingDeg;
    const offsetToWinSection =
      (winProbability - currSectionIndex) * sectionAngle + randomDeg;
    const totalRotation = offsetToWinSection + 360 * 5 - delta;

    setWheelRotationDeg((prev) => prev + totalRotation);
  }, [hasSpined]);

  // wheel rotation start;
  useEffect(() => {
    if (!wheelRotationDeg) return;

    const spinTimeout = setTimeout(() => {
      // startSpin();
      const i = findSectionIndex(delta);
      // const value = prices[i].value;
      showResult(i);
    }, TIME_ROTATION);

    return () => clearTimeout(spinTimeout);
  }, [wheelRotationDeg]);

  return { TIME_ROTATION, wheelRotationDeg, hasSpined, startSpin, winIndex };
};
