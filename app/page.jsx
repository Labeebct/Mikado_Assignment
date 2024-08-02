import React from "react";
import ScrollingGrid from "./components/ScrollingGrid";
import Header from "./components/Header";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-16 h-auto">
      <Header />
      <ScrollingGrid />
    </div>
  );
};

export default page;
