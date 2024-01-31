import { ButtonHTMLAttributes } from 'react';

export const GreenButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="green-btn outline-inset group h-14 w-52 shrink-0 rounded-[10px] outline-2 transition-all hover:scale-105"
      {...props}
    >
      <span
        className="text-xl font-extrabold uppercase leading-7 tracking-wide text-neutral-200
                   group-hover:text-white group-active:text-xl group-active:text-neutral-400"
      >
        {props.children}
      </span>
    </button>
  );
};
