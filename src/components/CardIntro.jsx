import React from "react";
import { IoLogoGithub } from "react-icons/io";

const CardIntro = ({ title, description, listItem }) => {
  return (
    <div className="border rounded-md p-8 bg-white shadow-xl shadow-indigo-100 space-y-3">
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-300 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold">
        {title}
      </div>
      <div className="text-slate-600 text-[18px] font-thin">
        {description}
      </div>
      <div class="mt-3 flex -space-x-2 overflow-hidden">
        {listItem.map((item) => (
          <img
            class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={`https://skillicons.dev/icons?i=${item.icon}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardIntro;
