"use client";
import React from "react";

interface TabProps {
  title: string;
  index: number;
  activeIndex: number;
  tabImage: string;
  onClick: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({
  title,
  index,
  activeIndex,
  tabImage,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      aria-label={title}
      className={`flex flex-col font-light items-center justify-center transition-all duration-300 hover:opacity-100 cursor-pointer group ${
        activeIndex === index ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="w-full flex items-center justify-center">
        <img
          src={tabImage}
          alt={title}
          className="h-16 w-16 md:h-full md:w-full max-h-16 pt-1 2xl:max-h-20 rounded mb-2 transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <span className=" hidden md:flex text-sm 2xl:text-base transition-colors duration-200">
        {title}
      </span>
    </button>
  );
};

export default Tab;
