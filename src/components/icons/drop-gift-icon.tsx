import { getImgUrl } from '@/src/utils/imageUrls';
import { GreenShadowIcon } from '.';

export const DropGiftIcon = () => {
  return (
    <picture className="relative block size-[105px]">
      <img
        className="block-center h-3/4 w-auto"
        src={getImgUrl('dropbox')}
        alt=""
      />
      <div className="block-center">
        <GreenShadowIcon />
      </div>
      <img className="block-center size-8" src={getImgUrl('neonGift')} alt="" />
    </picture>
  );
};
