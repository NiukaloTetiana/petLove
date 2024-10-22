import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="container pb-[412px] md:pb-[512px] lg:px-[32px] lg:pb-[400px]">
        <div className="bg-home flex flex-col gap-[24px] rounded-b-[30px] bg-[#f6b83d] px-5 pb-[50px] pt-[32px] md:gap-[32px] md:rounded-b-[60px] md:px-[32px] md:pb-[44px] md:pt-[84px] lg:flex-row lg:gap-[73px] lg:px-[64px]">
          <h1 className="text-[50px] font-bold leading-[0.96] tracking-[-0.03em] text-white md:text-[80px] lg:w-[760px] lg:text-[90px]">
            Take good <span className="opacity-40">care</span> of your small
            pets
          </h1>
          <p className="text-[14px] font-medium leading-[1.29] tracking-[-0.02em] text-white md:ml-auto md:w-[255px] md:text-[18px] md:leading-[1.22] lg:mt-auto">
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
