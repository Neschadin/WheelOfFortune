import { wheelIconParams } from '@/src/config';
import { clsx } from 'clsx';

type TProps = {
  wheelSections: TWheelSections;
  winIndex: null | number;
};

export const WheelSegments = ({ wheelSections, winIndex }: TProps) => {
  // if (!wheelSections.length) return null;

  const sectionAngle = 360 / wheelSections.length;
  const halfBase = 50 * Math.tan((sectionAngle / 2) * (Math.PI / 180));
  const params = `50% 0%, ${50 - halfBase}% 100%, ${50 + halfBase}% 100%`;

  const sections = wheelSections.map(({ id, image_url }, i) => {
    const rotation = i * sectionAngle;
    const segmentStyle = {
      transform: `rotate(-${rotation}deg) translate(-50%, 0%)`,
      clipPath: `polygon(${params})`,
    };

    return (
      <div
        key={'segmentKey_' + id + i}
        style={segmentStyle}
        className={clsx(
          { 'blur-sm brightness-50': winIndex !== null && winIndex !== i },
          { 'bg-zinc-900': i % 2 === 0 },
          'flex-center absolute left-1/2 top-1/2 h-1/2 w-full origin-top-left transition-all duration-1000'
        )}
      >
        <picture className="absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-1/2 -rotate-90">
          <img
            className={clsx(
              'h-auto transition-all',
              wheelIconParams.hasOwnProperty(id) ? wheelIconParams[id] : 'w-40',
              { 'brightness-125': winIndex !== null && winIndex === i }
            )}
            src={image_url}
            alt=""
          />
        </picture>
      </div>
    );
  });

  return sections;
};
