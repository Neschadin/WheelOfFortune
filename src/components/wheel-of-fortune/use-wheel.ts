import { useEffect, useState } from 'react';
import { useApiService } from '@/src/hooks/use-api-service';

const TIME_ROTATION = 7000;

export const useWheel = () => {
  const { getRoulettePrizes, getRouletteResult } = useApiService();
  const [sectionItems, setSectionItems] = useState([] as TSectionItems);
  const [isSpined, setIsSpined] = useState(false);
  const [result, setResult] = useState<TResult>();
  const [winIndex, setWinIndex] = useState<null | number>(null);
  const [wheelRotationDeg, setWheelRotationDeg] = useState(0);
  const [showWinResult, setShowWinResult] = useState(false);

  const sectionAngle = 360 / sectionItems.length;
  const delta = sectionAngle / 2;

  const startSpin = () => {
    setIsSpined(true);
  };

  const findWinIndex = () => {
    if (!result) return null;
    const i = sectionItems.findIndex((item) => item.id === result.id);
    return i === -1 ? null : i;
  };

  const findSectionIndex = (shift: number = 0) => {
    const currentSegment = ((wheelRotationDeg % 360) + shift) / sectionAngle;
    const i = Math.floor(currentSegment);
    return i >= sectionItems.length ? 0 : i;
  };

  useEffect(() => {
    getRoulettePrizes().then((res) => {
      setSectionItems(res.data);
    });
  }, []);

  useEffect(() => {
    if (!isSpined) return;
    getRouletteResult().then((res) => {
      const item = sectionItems.find((item) => item.id === res.data.id);
      setResult({ ...res.data, ...item });
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
    sectionItems,
    TIME_ROTATION,
    wheelRotationDeg,
    isSpined,
    startSpin,
    result,
    winIndex,
    showWinResult,
  };
};
