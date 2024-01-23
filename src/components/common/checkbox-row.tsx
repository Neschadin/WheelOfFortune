import { ReactNode } from 'react';
import { CheckIcon } from '../icons';

interface CheckboxProps {
  label?: ReactNode;
  checked?: boolean;
}

export const CheckboxRow = ({ label, checked }: CheckboxProps) => {
  return (
    <label className="flex items-center">
      <div className="relative size-[26px] rounded border border-neutral-300">
        <div
          className={`block-center transition-all ${checked ? 'opacity-100' : 'opacity-0'}`}
        >
          <CheckIcon />
        </div>
      </div>

      <div className="ml-9 font-roboto uppercase tracking-widest">{label}</div>
    </label>
  );
};
