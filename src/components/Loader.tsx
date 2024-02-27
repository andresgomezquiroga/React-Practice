import { LineWave } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center bg-slate-800 h-[100vh]">
      <LineWave
        visible={true}
        height="300"
        width="400"
        color="blue"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};
