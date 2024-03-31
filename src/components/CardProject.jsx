import React from "react";
import { IoLogoGithub } from "react-icons/io";

const CardProject = ({
  dateRange,
  subTitle,
  title,
  description,
  listGit,
  className,
  listSkill,
}) => {
  return (
    <div
      className={`border-t-4 border-indigo-600 hover:border-slate-800 hover:bg-gray-50 hover:cursor-pointer rounded-md p-8 min-h-[300px] bg-white shadow-md shadow-indigo-200 transition duration-200 ease-in-out transform`}
    >
      {/* <time class="mb-1 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
        {dateRange}
      </time> */}
      <p class="mb-4 mt-1 text-sm font-medium leading-none text-gray-700 dark:text-gray-500">
        {subTitle}
      </p>
      <h3 class="text-lg font-semibold text-slate-700 dark:text-white">
        {title}
      </h3>
      <p class="text-base text-wrap font-normal text-gray-500 md:h-[100px] dark:text-gray-400">
        {description}
      </p>

      <div className="mt-3 flex flex-col md:flex-row justify-start items-start space-y-4 md:space-y-0 md:space-x-4 mt-4 mb-6">
        {listGit?.map((git, i) => (
          <div className="flex flex-row justify-center items-center ">
            <a
              href={`${git.url}`}
              target="_blank"
              className="uppercase flex justify-center items-center bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-500 text-white font-medium px-4 py-2 rounded-md  hover:bg-slate-600 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:-translate-4 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/50 hover:bg-gradient-to-r hover:from-slate-800 hover:via-slate-700 hover:to-slate-500"
            >
              {git.title} <IoLogoGithub className="ml-1 size-5" />
            </a>
          </div>
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

export default CardProject;
