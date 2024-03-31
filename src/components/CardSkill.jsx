import React from "react";
import { IoLogoGithub } from "react-icons/io";

const CardSkill = ({ title, icon }) => {
  return (
    <div className="p-4 min-w-[200px] rounded-md bg-white drop-shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 hover:[&_div]:text-white">
      <div className="flex flex-row items-center justify-start">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src={`https://skillicons.dev/icons?i=${icon}`}
          alt={title}
        />
        <div className="ml-3 font-medium text-nowrap ">{title}</div>
      </div>
    </div>
  );
};

export default CardSkill;
