import React, { useState, useEffect } from "react";

const CardSkill = ({ title, icon, level }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (level === "good") {
      setColor("bg-green-300");
    } else if (level === "normal") {
      setColor("bg-blue-300");
    } else {
      setColor("");
    }
  }, [level]);

  return (
    <div className="p-4 rounded-md bg-white shadow-md shadow-indigo-200 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer ">
      <div className="flex flex-row items-center justify-start">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={`https://skillicons.dev/icons?i=${icon}`}
          alt={title}
        />
        <div className="ml-3 flex flex-col items-start justify-start">
          <div className="font-medium text-[14px] text-slate-600 mb-1">
            {title}
          </div>
          <div
            className={`${color} rounded-full py-1 px-3 text-[10px] font-medium min-w-[50px]`}
          >
            {level}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkill;
