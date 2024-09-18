import { Rings } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#262626] opacity-30 backdrop-blur-sm">
      <Rings
        visible={true}
        height="120"
        width="120"
        color="#F6B83D"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
