import React from "react";

const CardIntro = ({ title, description, listItem }) => {
  return (
    <div className="border rounded-md p-8 bg-white shadow-xl shadow-indigo-100 space-y-3 z-10">
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-300 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold">
        {title}
      </div>
      <div className="text-slate-600 text-[16px] font-thin md:h-[55px]">{description}</div>
      <div className="mt-3 flex -space-x-2 overflow-hidden">
        {listItem.map((item, i) => (
          <img
            key={i}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={`https://skillicons.dev/icons?i=${item.icon}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardIntro;
