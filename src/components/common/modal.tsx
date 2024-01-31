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
  onClose?: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: TProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const handleClose = () => {
    onClose && onClose();
    ref.current?.close();
  };

  const handleKeyDown = (ev: KeyboardEvent<HTMLDialogElement>) => {
    if (ev.key === 'Escape') {
      handleClose();
    }
  };

  const handleOutsideClick: MouseEventHandler<HTMLDialogElement> = (ev) => {
    const { currentTarget, clientX, clientY } = ev;
    const { left, right, top, bottom } = currentTarget.getBoundingClientRect();
    const isOutside =
      clientX < left || clientX > right || clientY < top || clientY > bottom;

    isOutside && handleClose();
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
      className="relative max-h-fit w-[600px] rounded-[10px] bg-stone-950 p-[74px]"
      onCancel={handleClose}
      onKeyDown={handleKeyDown}
      onClick={handleOutsideClick}
    >
      <button className="absolute right-6 top-6" onClick={handleClose}>
        <CloseIcon />
      </button>

      {children}
    </dialog>
  );
};
