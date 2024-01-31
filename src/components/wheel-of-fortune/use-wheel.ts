import { apiService } from '@/src/utils/api-service';
import { useEffect, useState } from 'react';

const TIME_ROTATION = 7000;
const initSections = Array(10).fill({});

export const useWheel = (isSpined: boolean) => {
  const { getRoulettePrizes, getRouletteResult } = apiService;
  const [wheelSections, setWheelSections] = useState(initSections);
  const [result, setResult] = useState<TResult>();
  const [winIndex, setWinIndex] = useState<null | number>(null);
  const [wheelRotationDeg, setWheelRotationDeg] = useState(0);
  const [showWinResult, setShowWinResult] = useState(false);

  const sectionAngle = 360 / wheelSections.length;
  const delta = sectionAngle / 2;

  const findWinIndex = () => {
    if (!result) return null;
    const i = wheelSections.findIndex((item) => item.id === result.id);
    return i === -1 ? null : i;
  };

  const findSectionIndex = (shift: number = 0) => {
    const currentSegment = ((wheelRotationDeg % 360) + shift) / sectionAngle;
    const i = Math.floor(currentSegment);
    return i >= wheelSections.length ? 0 : i;
  };

  useEffect(() => {
    getRoulettePrizes().then((res) => setWheelSections(res));
  }, []);

  useEffect(() => {
    if (!isSpined) return;
    getRouletteResult().then((res) => {
      const item = wheelSections.find((item) => item.id === res.id);
      setResult({ ...res, ...item });
    });
  }, [isSpined]);

  // wheel rotation start;
  useEffect(() => {
    if (!result) return;
    const i = findWinIndex();
    if (i === null) return;

    const currSectionIndex = findSectionIndex();
    const remainingDeg = wheelRotationDeg % sectionAngle;
    const randomDeg = Math.floor(Math.random() * sectionAngle) - remainingDeg;
    const offsetToWinSection =
      (i - currSectionIndex) * sectionAngle + randomDeg;
    const totalRotation = offsetToWinSection + 360 * 4 - delta;

    setWheelRotationDeg((prev) => prev + totalRotation);
  }, [result]);

  useEffect(() => {
    if (!wheelRotationDeg || !result) return;

    const t = setTimeout(() => {
      setWinIndex(findWinIndex());
    }, TIME_ROTATION);

    return () => clearTimeout(t);
  }, [wheelRotationDeg]);

  useEffect(() => {
    if (winIndex === null) return;

    const t = setTimeout(() => {
      setShowWinResult(true);
    }, 2000);

    return () => clearTimeout(t);
  }, [winIndex]);

  return {
    wheelSections,
    TIME_ROTATION,
    wheelRotationDeg,
    isSpined,
    result,
    winIndex,
    showWinResult,
  };
};
