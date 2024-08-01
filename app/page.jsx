import React from "react";
import AnimationFrame from "./components/AnimationFrame";

const page = () => {
  const frameContents = [
    {
      id: 1,
      name: "FingerSpelling",
      video: "//videos.ctfassets.net/9uhkiji6mhey/66q0dnTN8If5pnAxjGPiIZ/c7de4ea17570f90ac8d4da470f02f193/1_Intro_-_Portrait_1.mp4",
      title: "FingerSpelling With Machine Learning",
      tags: ["Experience", "Products"],
    },
    {
      id: 2,
      name: "Bo",
      video: "//videos.ctfassets.net/9uhkiji6mhey/7pAXlJdKv3hvY4OAf5YWzz/7f0fa564c5a37c44b6551f786b15e1c3/3_____Portrait_-_Big.mp4",
      title: "Bang & Olufsen - See yourself in Sound",
      tags: ["Experience"],
    },
    {
      id: 3,
      name: "Aurora",
      video: "//videos.ctfassets.net/9uhkiji6mhey/5aPyBNQQ3mGEpUwoYagcWF/3fd91496cde7c0310f098657e02a6dbb/Thumbnail_-_Video_-_Portrait_-_Big-NEW.mp4",
      title: "Aurora Solar - Hitting fast-forward on the solar future",
      tags: ["Branding"],
    },
    {
      id: 4,
      name: "Kids",
      video: "//videos.ctfassets.net/9uhkiji6mhey/T8eOREQYmmhzPEuwvmBz5/a5e99ab158c0b018bd70c0271e382c32/Thumbnail_-_Video_-_Landscape_-_Big.mp4",
      title:
        "A delightful, welcoming, and adventurous identity for Netflix Kids",
      tags: ["Branding"],
    },
  ];

  return (
    <div className="w-full justify-around p-8 gap-y-10 h-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {frameContents.map((data) => (
        <AnimationFrame data={data} key={data.id} />
      ))}
    </div>
  );
};

export default page;
