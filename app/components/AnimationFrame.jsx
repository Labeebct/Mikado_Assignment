import React from "react";

const AnimationFrame = ({ data }) => {
  return (
    <div className="h-[630px] w-[380px] bg-white m-auto flex flex-col">
      <div className="w-full h-auto flex justify-center items-center">
        <video className="h-full" src={data.video} muted loop autoPlay></video>
      </div>
      <div className="w-full my-5 font-merriweather font-[500] text-[1.34rem]">
        {data.title}
      </div>
      <div className="flex items-center gap-2 w-full my-2">
        {data?.tags?.map((tag) => (
          <h1 className="underline opacity-40">{tag}</h1>
        ))}
      </div>
    </div>
  );
};

export default AnimationFrame;
