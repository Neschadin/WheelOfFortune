import { useWheel } from '../hooks/useWheel';

import { Arrow, CenterCircle, WheelSegments } from '.';

import { TIME_ROTATION } from '../constants';
import { TWheelOfFortune } from '../types';

const WheelOfFortune = (props: TWheelOfFortune) => {
  const wheelRotationDeg = useWheel(props);

  return (
    <div className='relative h-full border rounded-full overflow-hidden bg-slate-50'>
      <div
        className='h-full w-full transition-transform'
        style={{
          transform: `rotate(${wheelRotationDeg}deg)`,
          transitionDuration: `${TIME_ROTATION}ms`,
        }}
      >
        <WheelSegments prices={props.prices} />
      </div>

      <div className='absolute -bottom-1 left-1/2 -translate-x-1/2'>
        <Arrow />
      </div>

      <div className='block-center'>
        <CenterCircle />
      </div>
    </div>
  );
};

export { WheelOfFortune };
