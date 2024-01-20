export const CenterCircles = () => {
  return (
    <div
      className="block-center h-full w-full rounded-full"
      style={{ boxShadow: 'inset 0px 0px 15px 36px rgba(221 214 254 / 0.1)' }}
    >
      <div className="block-center h-[96%] w-[96%] rounded-full outline outline-4 outline-violet-200/10">
        <div
          className="block-center h-1/2 w-1/2 rounded-full border-2 border-zinc-950 bg-gradient-to-t 
                     from-[#171A2A] from-20% via-[#343640] to-[#171A2A] to-80% shadow-xl
                     "
        >
          <div className="block-center h-5/6 w-5/6 rounded-full bg-zinc-950" />
        </div>
      </div>
    </div>
  );
};
