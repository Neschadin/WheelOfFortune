import clsx from 'clsx';

type TProps = { startSpin: () => void; isSpined: boolean };

export const GoButton = ({ startSpin, isSpined }: TProps) => {
  return (
    <button
      className="block-center size-36 rounded-full bg-[#171A2A] font-roboto shadow-[0px_0px_13px_6px_#f8f6f640]"
      onClick={startSpin}
      disabled={isSpined}
    >
      <div
        style={{ textShadow: '0px 0px 25px #000' }}
        className={clsx(
          'font-luckiest text-6xl text-[#b5aaec] transition-all',
          !isSpined ? 'animate-pulse active:text-5xl' : 'opacity-50'
        )}
      >
        Go!
      </div>
    </button>
  );
};
