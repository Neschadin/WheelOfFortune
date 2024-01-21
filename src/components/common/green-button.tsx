import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const GreenButton = ({ children, ...otherProps }: IProps) => {
  return (
    <button
      className="h-14 w-52 shrink-0 rounded-[10px] text-xl font-extrabold text-neutral-200 active:text-2xl"
      style={{
        boxShadow: '0px 0px 18px 0px rgba(1, 210, 131, 0.60)',
        background:
          'linear-gradient(180deg, #5EAD90 0%, #01965E 19%, #01965E 82%, #5EAD90 100%)',
      }}
      {...otherProps}
    >
      <span
        className=" uppercase leading-7 tracking-wide"
        style={{ textShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)' }}
      >
        {children}
      </span>
    </button>
  );
};
