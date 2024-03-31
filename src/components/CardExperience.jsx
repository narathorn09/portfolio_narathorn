import React from "react";
import { LuExternalLink } from "react-icons/lu";

const CardExperience = ({
  dateRange,
  subTitle,
  title,
  description,
  listWork,
  listSkill,
}) => {
  return (
    <div className="border border-indigo-600 rounded-md p-8 min-h-[300px] bg-white shadow-xl shadow-indigo-200 ">
      <time class="mb-1 text-sm font-medium leading-none text-gray-700 dark:text-gray-500">
        {dateRange}
      </time>
      <p class="mb-2 mt-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-500">
        {subTitle}
      </p>
      <h3 class="text-lg font-semibold text-slate-700 dark:text-white mt-4">
        {title}
      </h3>
      <p class="text-base text-wrap font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>

      <div className="mt-3 flex flex-row justify-start items-start space-x-4 mt-4 mb-6">
        {listWork?.map((work, i) => (
          <a
            href={`${work.url}`}
            target="_blank"
            className="uppercase flex justify-center items-center bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-500 text-white font-medium px-4 py-2 rounded-md  hover:bg-slate-600 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:-translate-4 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/50 hover:bg-gradient-to-r hover:from-slate-800 hover:via-slate-700 hover:to-slate-500"
          >
            work {i+1} <LuExternalLink className="ml-1 size-4" />
          </a>
        ))}
      </div>
      <div class="mt-3 flex -space-x-2 overflow-hidden justify-start">
        {listSkill?.map((item) => (
          <img
            class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={`https://skillicons.dev/icons?i=${item.icon}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardExperience;
