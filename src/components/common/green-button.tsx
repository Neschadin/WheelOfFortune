import { ButtonHTMLAttributes } from 'react';

export const GreenButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="outline-inset group h-14 w-52 shrink-0 rounded-[10px] outline-2"
      style={{
        boxShadow: '0px 0px 18px 0px rgba(1, 210, 131, 0.60)',
        background:
          'linear-gradient(180deg, #5EAD90 0%, #01965E 19%, #01965E 82%, #5EAD90 100%)',
      }}
      {...props}
    >
      <span
        style={{ textShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)' }}
        className="text-xl font-extrabold uppercase leading-7 tracking-wide text-neutral-200 transition-all 
                   active:text-xl active:text-neutral-400 group-hover:text-2xl group-disabled:animate-pulse"
      >
        {props.children}
      </span>
    </button>
  );
};
