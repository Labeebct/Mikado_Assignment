"use client";
import React, { useState } from "react";

const AnimationFrame = ({ data }) => {

  //State for changing thumbnail image to video while hovering
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => setIsPlaying(true);
  const handleMouseLeave = () => setIsPlaying(false);

  return (
    <div className="h-auto w-[380px] cursor-pointer bg-white m-auto flex flex-col">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full overflow-hidden transition-all duration-100 h-auto flex justify-center items-center"
      >
        {isPlaying ? (
          <video autoPlay={isPlaying} preload="auto" muted loop src={data.video}></video>
        ) : (
          <img src={data.thumbnail} alt="" />
        )}
      </div>
      <div className="w-full my-5 font-merriweather font-[500] text-[1.34rem]">
        {data.title} 
      </div>
      <div className="flex items-center gap-2 w-full my-2">
        {data?.tags?.map((tag) => ( //Looping the tags
          <h1 key={tag} className="underline opacity-40">
            {tag}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default AnimationFrame;
