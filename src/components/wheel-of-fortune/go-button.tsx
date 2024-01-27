import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export const GoButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="block-center size-36 rounded-full bg-[#171A2A] font-roboto shadow-[0px_0px_13px_6px_#f8f6f640]"
      {...props}
    >
      <div
        style={{ textShadow: '0px 0px 25px #000' }}
        className={clsx(
          'font-luckiest text-6xl text-[#b5aaec] transition-all',
          props.disabled ? 'opacity-50' : 'animate-pulse active:text-5xl'
        )}
      >
        Go!
      </div>
    </button>
  );
};
