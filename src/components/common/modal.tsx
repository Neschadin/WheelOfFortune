import {
  KeyboardEvent,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { CloseIcon } from '../icons';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: TProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const handleKeyDown = (ev: KeyboardEvent<HTMLDialogElement>) => {
    if (ev.key === 'Escape') {
      onClose();
    }
  };

  const handleOutsideClick: MouseEventHandler<HTMLDialogElement> = (ev) => {
    const { currentTarget, clientX, clientY } = ev;
    const { left, right, top, bottom } = currentTarget.getBoundingClientRect();
    const isOutside =
      clientX < left || clientX > right || clientY < top || clientY > bottom;

    isOutside && onClose();
  };

  useEffect(() => {
    if (!ref) return;

    isOpen ? ref.current?.showModal() : ref.current?.close();
  }, [isOpen, ref]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      className="relative max-h-fit w-[600px] rounded-[10px] border border-blue-950 bg-stone-950 p-[74px] 
                 backdrop:bg-stone-950 backdrop:opacity-75"
      style={{ boxShadow: '0px 0px 14px 0 rgba(221 214 214 / 0.5)' }}
      onCancel={onClose}
      onKeyDown={handleKeyDown}
      onClick={handleOutsideClick}
    >
      <button className="absolute right-6 top-6" onClick={onClose}>
        <CloseIcon />
      </button>

      {children}
    </dialog>
  );
};
