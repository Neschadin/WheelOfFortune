import { ReactNode } from 'react';
import { CheckIcon } from '../icons';

interface CheckboxProps {
  children: ReactNode;
  checked: boolean;
}

export const CheckboxRow = ({ children, checked }: CheckboxProps) => {
  return (
    <label className="flex items-center">
      <div className="relative size-4 shrink-0 rounded border border-neutral-300 md:size-5 xl:size-7">
        <div
          className={`block-center transition-all ${checked ? 'opacity-100' : 'opacity-0'}`}
        >
          <CheckIcon />
        </div>
      </div>

      <span className="ml-7 truncate font-roboto uppercase tracking-widest md:ml-9">
        {children}
      </span>
    </label>
  );
};
