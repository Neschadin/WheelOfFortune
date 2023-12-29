import { useEffect, useState } from 'react';

import { findHalfBaseInPercents, generatePastelColor } from '../utils/utils';

import { TPrices } from '../types';

export const WheelSegments = ({ prices }: { prices: TPrices }) => {
  const [backgroundColors, setBackgroundColors] = useState([] as string[]);
  const sectionAngle = 360 / prices.length;
  const halfBase = findHalfBaseInPercents(sectionAngle);
  const params = `50% 0%, ${50 - halfBase}% 100%, ${50 + halfBase}% 100%`;

  useEffect(() => {
    const colors = prices.map(generatePastelColor);
    setBackgroundColors(colors);
  }, []);

  const sections = prices.map((prize, i) => {
    const rotation = i * sectionAngle;
    const segmentStyle = {
      transform: `rotate(-${rotation}deg) translate(-50%, 0%)`,
      clipPath: `polygon(${params})`,
      backgroundColor: backgroundColors[i],
    };

    return (
      <div
        key={'key_' + i}
        className='flex-center absolute left-1/2 top-1/2 h-1/2 w-full origin-top-left'
        style={segmentStyle}
      >
        <span className='rotate-90 w-24 text-right'>{prize.value}</span>
      </div>
    );
  });

  return sections;
};
