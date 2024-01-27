import { baseUrl, wheelIconParams } from '@/src/config';
import { getImgUrl } from '@/src/utils/image-urls';
import { remainingTime } from '@/src/utils/time-formaters';
import { useEffect, useState } from 'react';

const Title = () => (
  <div className="flex items-center">
    <picture className="mr-3 size-14">
      <img src={getImgUrl('winCelebration')} alt="" />
    </picture>

    <p className="font-roboto text-lg font-bold leading-8 tracking-[1.08px]">
      CONGRATS ON <span className="text-[#A99FDB]">YOUR WIN</span>!
    </p>
  </div>
);

const TitleVip = () => (
  <p className="font-roboto text-lg leading-8 tracking-[1.08px]">
    Hurray! You&apos;ve received{' '}
    <span className="font-bold text-[#A99FDB]">3 DAYS VIP ACCOUNT</span>. Lucky
    day!
  </p>
);

const Amount = ({ amount }: { amount: number }) => (
  <div className="relative mt-3 w-full text-center font-luckiest text-xl tracking-widest">
    {amount}
  </div>
);

const RemainTimeVip = ({ subEnd }: { subEnd: string }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <div className="relative mx-auto mt-5 flex h-8 w-11/12 items-center rounded-full bg-slate-800">
      <picture>
        <img
          className="absolute -left-px bottom-0 size-9"
          src={getImgUrl('newTimer')}
          alt=""
        />
      </picture>
      <time className="ml-14 font-roboto tracking-widest">
        {remainingTime(subEnd)}
      </time>
    </div>
  );
};

const Description = () => (
  <span className="text-center font-roboto text-lg leading-6 tracking-[1.08px] text-gray-500">
    Look for this item
    <br />
    in the{' '}
    <a
      href={baseUrl + 'items'}
      className="font-medium uppercase text-gray-200 underline"
    >
      ITEMS AND SKINS
    </a>{' '}
    menu
  </span>
);

const DescriptionVip = () => (
  <span className="text-center font-roboto text-lg leading-6 tracking-[1.08px] text-gray-500">
    Discount valid for the next 3 days
  </span>
);

export const ModalContentYourWin = ({ result }: { result: TResult }) => {
  const { id, amount, image_url, title, subEnd } = result;

  return (
    <div className="mx-auto flex h-[340px] w-[366px] flex-col items-center justify-between text-gray-200">
      {id !== 'vip3d' ? <Title /> : <TitleVip />}

      <div className="flex-center h-40 w-44 flex-col rounded-br-md rounded-tr-md border border-stone-800 border-l-purple-950 bg-gradient-to-b from-stone-950 to-stone-800">
        <picture>
          <img
            className={id !== 'vip3d' ? wheelIconParams[id] : 'w-20'}
            src={id !== 'vip3d' ? image_url : getImgUrl('vipFull')}
            alt={title}
          />
        </picture>

        {id !== 'vip3d' ? (
          <Amount amount={amount} />
        ) : (
          <RemainTimeVip subEnd={subEnd!} />
        )}
      </div>

      {id !== 'vip3d' ? <Description /> : <DescriptionVip />}
    </div>
  );
};
