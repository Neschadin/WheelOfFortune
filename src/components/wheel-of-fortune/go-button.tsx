import clsx from 'clsx';

type TProps = { startSpin: () => void; spinning: boolean };

export const GoButton = ({ startSpin, spinning }: TProps) => {
  return (
    <button
      className="block-center h-36 w-36 rounded-full bg-[#171A2A] font-roboto shadow-[0px_0px_13px_6px_#f8f6f640]"
      onClick={startSpin}
      disabled={spinning}
    >
      <div
        style={{ textShadow: '0px 0px 25px #000' }}
        className={clsx('font-luckiest text-6xl text-[#A99FDB]', {
          'animate-pulse': !spinning,
        })}
      >
        Go!
      </div>
    </button>
  );
};