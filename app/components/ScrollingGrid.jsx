"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimationFrame from "./AnimationFrame";

const ScrollingGrid = () => {
  //   Grid frames for looping
  const frameContents = [
    {
      id: 1,
      name: "FingerSpelling",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/66q0dnTN8If5pnAxjGPiIZ/c7de4ea17570f90ac8d4da470f02f193/1_Intro_-_Portrait_1.mp4",
      thumbnail: "/finger.png",
      title: "FingerSpelling With Machine Learning",
      tags: ["Experience", "Products"],
    },
    {
      id: 2,
      name: "Bo",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/7pAXlJdKv3hvY4OAf5YWzz/7f0fa564c5a37c44b6551f786b15e1c3/3_____Portrait_-_Big.mp4",
      thumbnail: "/bo.png",
      title: "Bang & Olufsen - See yourself in Sound",
      tags: ["Experience"],
    },
    {
      id: 3,
      name: "Aurora",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/5aPyBNQQ3mGEpUwoYagcWF/3fd91496cde7c0310f098657e02a6dbb/Thumbnail_-_Video_-_Portrait_-_Big-NEW.mp4",
      thumbnail: "/aurora.png",
      title: "Aurora Solar - Hitting fast-forward on the solar future",
      tags: ["Branding"],
    },
    {
      id: 4,
      name: "Kids",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/T8eOREQYmmhzPEuwvmBz5/a5e99ab158c0b018bd70c0271e382c32/Thumbnail_-_Video_-_Landscape_-_Big.mp4",
      thumbnail: "/kids.png",
      title:
        "A delightful, welcoming, and adventurous identity for Netflix Kids",
      tags: ["Branding"],
    },
    {
      id: 5,
      name: "Dr",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/3kFoOlZnvRGIIegXSFvyMp/6d86ec2d81dcd798996a283a256ea855/Logo_animation_thumbnail_portrait.mp4",
      thumbnail: "/dr.png",
      title: "Ramasjang Krea App",
      tags: ["Products"],
    },
    {
      id: 6,
      name: "cando",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/10ZZz1KhM7aRrEpbZoNLEH/dcea53be951d0c59a886192595e87559/TWCDW-P_Cover.mp4",
      thumbnail: "/cando.png",
      title: "The Web Can Do What?! with Google",
      tags: ["Experience"],
    },
    {
      id: 7,
      name: "cando",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/4NaE4qNDp9U7JqahGGOFEr/54a653c7418676136529b5e7ed640c21/Thumbnail_hover_portrait.mp4",
      thumbnail: "/switch.png",
      title: "The best things are the Simple Things",
      tags: ["Branding", "E-commerse", "Platform"],
    },
    {
      id: 8,
      name: "year",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/12ZMYVLIBKAeMxprQpMwMG/69328a415938f4f64ca6fbc0002bd951/Thumbnail_-_Image_-_Portrait.mp4",
      thumbnail: "/year.png",
      title: "The best things are the Simple Things",
      tags: ["Products", "Experince", "Platform"],
    },
    {
      id: 9,
      name: "out",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/6QKdwyXpR9MCalPYHwkK5n/bde4f190f9896599d52bb4103cf14c35/Room_hero.mp4",
      thumbnail: "/out.png",
      title: "A state-of-the-art virtual exhibition",
      tags: ["Experince", "Platform"],
    },
    {
      id: 10,
      name: "FingerSpelling",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/66q0dnTN8If5pnAxjGPiIZ/c7de4ea17570f90ac8d4da470f02f193/1_Intro_-_Portrait_1.mp4",
      thumbnail: "/finger.png",
      title: "FingerSpelling With Machine Learning",
      tags: ["Experience", "Products"],
    },
    {
      id: 11,
      name: "Bo",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/7pAXlJdKv3hvY4OAf5YWzz/7f0fa564c5a37c44b6551f786b15e1c3/3_____Portrait_-_Big.mp4",
      thumbnail: "/bo.png",
      title: "Bang & Olufsen - See yourself in Sound",
      tags: ["Experience"],
    },
    {
      id: 12,
      name: "Aurora",
      video:
        "//videos.ctfassets.net/9uhkiji6mhey/5aPyBNQQ3mGEpUwoYagcWF/3fd91496cde7c0310f098657e02a6dbb/Thumbnail_-_Video_-_Portrait_-_Big-NEW.mp4",
      thumbnail: "/aurora.png",
      title: "Aurora Solar - Hitting fast-forward on the solar future",
      tags: ["Branding"],
    },
  ];

  const { scrollY } = useScroll();

  //Setting how much movement should be occur
  const leftColumnY = useTransform(scrollY, [0, 2000], [0, -200]);
  const centerColumnY = useTransform(scrollY, [0, 2000], [0, -600]);
  const rightColumnY = useTransform(scrollY, [0, 2000], [0, -1000]);

  const leftColumn = frameContents.filter((_, index) => index % 3 === 0);
  const centerColumn = frameContents.filter((_, index) => index % 3 === 1);
  const rightColumn = frameContents.filter((_, index) => index % 3 === 2);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-auto p-8 gap-x-4 gap-y-4">
      {/* Left Column */}
      <motion.div className="space-y-10" style={{ y: leftColumnY }}>
        {leftColumn.map((data, index) => (
          <AnimationFrame data={data} key={index} />
        ))}
      </motion.div>

      {/* Center Column with Animation */}
      <motion.div className="space-y-10" style={{ y: centerColumnY }}>
        {centerColumn.map((data, index) => (
          <AnimationFrame data={data} key={index} />
        ))}
      </motion.div>

      {/* Right Column */}
      <motion.div className="space-y-10" style={{ y: rightColumnY }}>
        {rightColumn.map((data, index) => (
          <AnimationFrame data={data} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingGrid;
