// this component is not in use. for the future;

import { ReactNode, useState } from 'react';
import { CheckIcon } from '../icons';

interface CheckboxProps {
  label?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, checked, disabled, onClick } = props;
  const [isChecked, setIsChecked] = useState(checked || false);

  const onChange = () => {
    setIsChecked(!isChecked);
    onClick && onClick();
  };

  return (
    <label className="flex items-center">
      <div
        className={`relative size-[26px] cursor-pointer rounded border ${disabled ? 'border-neutral-600' : 'border-neutral-300'}`}
      >
        <div
          className={`block-center transition-all ${isChecked ? 'opacity-100' : 'opacity-0'}`}
        >
          <CheckIcon />
        </div>

        <input
          className="size-[26px] cursor-pointer appearance-none"
          type="checkbox"
          disabled={disabled}
          checked={isChecked}
          onChange={onChange}
        />
      </div>

      <div className="ml-9 cursor-pointer font-roboto uppercase tracking-widest">
        {label}
      </div>
    </label>
  );
};
