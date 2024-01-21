import { clsx } from 'clsx';

import { TPrices } from '../../types';
import { getImgUrl } from '../../utils/imageUrls';

export const WheelSegments = ({ prices }: { prices: TPrices }) => {
  const sectionAngle = 360 / prices.length;
  const halfBase = 50 * Math.tan((sectionAngle / 2) * (Math.PI / 180));
  const params = `50% 0%, ${50 - halfBase}% 100%, ${50 + halfBase}% 100%`;

  const sections = prices.map((prize, i) => {
    const rotation = i * sectionAngle;
    const segmentStyle = {
      transform: `rotate(-${rotation}deg) translate(-50%, 0%)`,
      clipPath: `polygon(${params})`,
    };

    return (
      <div
        key={'segmentKey_' + i}
        style={segmentStyle}
        className={clsx(
          { 'bg-zinc-900': i % 2 === 0 },
          'flex-center absolute left-1/2 top-1/2 h-1/2 w-full origin-top-left'
        )}
      >
        <picture className="absolute bottom-8 left-1/2 w-24 -translate-x-1/2 rotate-90">
          <img
            src={getImgUrl('') || prize.value}
            alt={prize.value || 'Prize icon'}
          />
        </picture>
      </div>
    );
  });

  return sections;
};
