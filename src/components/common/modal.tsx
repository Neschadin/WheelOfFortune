import { KeyboardEvent, MouseEventHandler, useEffect, useRef } from 'react';
import { useWheelCtx } from '@/src/providers/wheel-provider';
import { ModalContentSignIn } from '@/src/pages-content/home/modal-content-sign-in';
import { ModalContentYourWin } from '@/src/pages-content/home/modal-content-your-win';
import { CloseIcon } from '../icons';

export const Modal = () => {
  const { isModalOpen, result, closeModal } = useWheelCtx();
  const ref = useRef<HTMLDialogElement | null>(null);

  const handleClose = () => {
    closeModal();
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

    isModalOpen ? ref.current?.showModal() : ref.current?.close();
  }, [isModalOpen, ref]);

  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  return (
    <dialog
      ref={ref}
      className="relative w-80 max-w-[600px] rounded-[10px] bg-stone-950 px-4 py-8 sm:w-full sm:p-[74px]"
      onCancel={handleClose}
      onKeyDown={handleKeyDown}
      onClick={handleOutsideClick}
    >
      <button className="absolute right-6 top-6" onClick={handleClose}>
        <CloseIcon />
      </button>

      {result ? (
        <ModalContentYourWin result={result} />
      ) : (
        <ModalContentSignIn />
      )}
    </dialog>
  );
};
