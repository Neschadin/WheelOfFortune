import { baseUrl } from '@/src/config';
import { getImgUrl } from '@/src/utils/imageUrls';

export const ModalContentSignIn = ({ isGoBtn }: { isGoBtn?: boolean }) => {
  const handleSignInBtn = () => {
    const url = `${baseUrl}api/player/auth${isGoBtn ? '?source=wheel' : ''}`;
    window.location.href = url;
  };

  return (
    <div className="mx-auto mt-10 w-[366px]">
      <p className="mb-14 text-center font-roboto text-lg leading-8 tracking-[1.08px] text-gray-500">
        To spin the wheel, you need to log in to your{' '}
        <span className="font-bold">STEAM</span> account
      </p>

      <button
        className="group mx-auto flex h-12 w-64 shrink-0 items-center rounded-xl 
                 bg-[#FCE305] active:shadow-inner active:shadow-black"
        onClick={handleSignInBtn}
      >
        <picture className="ml-4 mr-5 h-[22px] w-[50px] group-active:translate-y-px">
          <img src={getImgUrl('SteamImg')} alt="" />
        </picture>
        <span className="font-roboto text-sm font-bold leading-6 tracking-[1.96px] group-active:translate-y-px">
          Sign in <span className="font-black">STEAM</span>
        </span>
      </button>
    </div>
  );
};
