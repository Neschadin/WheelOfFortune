import { ButtonHTMLAttributes } from 'react';

export const GoButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="block-center go-btn flex-center size-full rounded-full bg-[#171A2A]"
      {...props}
    >
      <span className="font-luckiest text-6xl text-[#b5aaec]">Go!</span>
    </button>
  );
};
