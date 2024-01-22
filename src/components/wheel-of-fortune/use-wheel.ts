import { useEffect, useState } from 'react';

const TIME_ROTATION = 7000;

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch wheel meta');
    }

    return await response.json();
  } catch (error) {
    console.log('error >> ', error);
  }
};

// const generateWinProbability = () => {
//   const sum = prices.reduce(
//     (accumulator, price) => accumulator + price.probability,
//     0
//   );
//   let pick = Math.random() * sum;
//   const i = prices.findIndex((price) => (pick -= price.probability) <= 0);

//   return i !== -1 ? i : 0;
// };

export const useWheel = () => {
  const [sectionItems, setSectionItems] = useState([] as TSectionItems);
  const [isSpined, setIsSpined] = useState(false);
  const [winIndex, setWinIndex] = useState<null | number>(null);
  const [wheelRotationDeg, setWheelRotationDeg] = useState(0);

  const sectionAngle = 360 / sectionItems.length;
  const delta = sectionAngle / 2;

  const startSpin = () => {
    setIsSpined(!isSpined);
  };

  const showResult = (i: number) => {
    setWinIndex(i);
    console.log('Wheel result >>> ', i); // TODO:
  };

  const findSectionIndex = (shift: number = 0) => {
    const currentSegment = ((wheelRotationDeg % 360) + shift) / sectionAngle;
    const i = Math.floor(currentSegment);
    return i >= sectionItems.length ? 0 : i;
  };

  useEffect(() => {
    fetchData('https://youwin.gg/api/meta/wheel').then(setSectionItems);
  }, []);

  useEffect(() => {
    if (!isSpined) return;
    fetchData('https://youwin.gg/api/meta/wheel/result').then(console.log);
  }, [isSpined]);

  // prize section generation;
  useEffect(() => {
    if (!isSpined) return;

    // const winProbability = generateWinProbability(sectionItems);
    const winProbability = 0;
    const currSectionIndex = findSectionIndex();

    const remainingDeg = wheelRotationDeg % sectionAngle;
    const randomDeg = Math.floor(Math.random() * sectionAngle) - remainingDeg;
    const offsetToWinSection =
      (winProbability - currSectionIndex) * sectionAngle + randomDeg;
    const totalRotation = offsetToWinSection + 360 * 5 - delta;

    setWheelRotationDeg((prev) => prev + totalRotation);
  }, [isSpined]);

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

  return {
    sectionItems,
    TIME_ROTATION,
    wheelRotationDeg,
    isSpined,
    startSpin,
    winIndex,
  };
};
