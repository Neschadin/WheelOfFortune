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

  const sectionAngle = 360 / sectionItems.length;
  const delta = sectionAngle / 2;

  const startSpin = () => {
    setIsSpined(!isSpined);
  };

  // const showResult = (i: number) => {
  //   setWinIndex(i);
  //   console.log('Wheel result >>> ', i); // TODO:
  // };

  const findWinIndex = () => {
    if (!result) return;
    const i = sectionItems.findIndex((item) => item.id === result.id);
    if (i !== -1) return i;
  };

  const findSectionIndex = (shift: number = 0) => {
    const currentSegment = ((wheelRotationDeg % 360) + shift) / sectionAngle;
    const i = Math.floor(currentSegment);
    return i >= sectionItems.length ? 0 : i;
  };

  useEffect(() => {
    getRoulettePrizes().then((res) => setSectionItems(res.data));
  }, []);

  useEffect(() => {
    if (!isSpined) return;
    getRouletteResult().then((res) => setResult(res.data));
  }, [isSpined]);

  // wheel rotation start;
  useEffect(() => {
    if (!result) return;
    const i = findWinIndex();
    if (!i) return;

    const currSectionIndex = findSectionIndex();
    const remainingDeg = wheelRotationDeg % sectionAngle;
    const randomDeg = Math.floor(Math.random() * sectionAngle) - remainingDeg;
    const offsetToWinSection =
      (i - currSectionIndex) * sectionAngle + randomDeg;
    const totalRotation = offsetToWinSection + 360 * 5 - delta;

    setWheelRotationDeg((prev) => prev + totalRotation);
  }, [result]);

  useEffect(() => {
    if (!wheelRotationDeg || !result) return;

    const spinTimeout = setTimeout(() => {
      const i = findWinIndex();
      i && setWinIndex(i);
      // showResult(i);
    }, TIME_ROTATION);

    return () => clearTimeout(spinTimeout);
  }, [wheelRotationDeg]);

  return {
    sectionItems,
    TIME_ROTATION,
    wheelRotationDeg,
    isSpined,
    startSpin,
    winIndex,
  };
};
