import { getImgUrl } from '@/src/utils/image-urls';
import { GreenShadowIcon } from '.';

export const DropGiftIcon = () => {
  return (
    <picture className="relative block size-[105px]">
      <img
        className="block-center h-3/4 w-auto"
        src={getImgUrl('dropbox')}
        alt=""
      />
      <div className="block-center animate-size-opacity size-full brightness-200">
        <GreenShadowIcon />
      </div>
      <div className="block-center animate-size-opacity size-2/3 brightness-200">
        <GreenShadowIcon />
      </div>
      <img
        className="block-center size-[30px]"
        src={getImgUrl('neonGift')}
        alt=""
      />
    </picture>
  );
};
