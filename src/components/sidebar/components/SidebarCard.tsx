const GingerScienceCard = () => {
  return (
    <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-brand-700 via-brand-500 to-brand-300 pb-4">
      <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-brand-300 to-brand-600">
        <img
          src="/favicon.png"
          alt="Ginger Science Icon"
          className="h-12 w-12"
        />
      </div>

      <div className="mt-16 flex h-fit flex-col items-center text-white">
        <p className="text-lg font-bold">Ginger Science</p>
      </div>
    </div>
  );
};

export default GingerScienceCard;
