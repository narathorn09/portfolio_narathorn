import React from "react";
// import DarkModeSwitcher from "./DarkModeSwitcher";
import { IoLogoGithub } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <div className="inset-x-px top-0 flex items-center justify-between px-[40px] md:px-[165px] py-[17px] drop-shadow-md bg-white dark:bg-slate-900">
      <div className="flex items-center justify-center">
        <div className="bg-indigo-600 dark:bg-white text-white flex items-center justify-center rounded-full size-7 py-1 px-1 drop-shadow-sm">
          <AiFillThunderbolt className="dark:text-indigo-700" />
        </div>
        <h1 className="text-indigo-700 dark:text-white font-bold text-xl ml-2">
          FNNz
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <a
          href={`https://web.facebook.com/profile.php?id=100004325625978`}
          target="_blank"
          className=" uppercase flex justify-center items-center bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-500 text-white font-medium px-1 py-1 rounded-full  hover:bg-slate-600 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:-translate-4 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/50 hover:bg-gradient-to-r hover:from-slate-800 hover:via-slate-700 hover:to-slate-500"
        >
          <FaFacebook className="size-5" />
        </a>
        <a
          href={`https://github.com/narathorn09?tab=repositories`}
          target="_blank"
          className=" uppercase flex justify-center items-center bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-500 text-white font-medium px-1 py-1 rounded-full  hover:bg-slate-600 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:-translate-4 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/50 hover:bg-gradient-to-r hover:from-slate-800 hover:via-slate-700 hover:to-slate-500"
        >
          <IoLogoGithub className="size-5" />
        </a>
      </div>

      {/* <nav>
        <DarkModeSwitcher />
      </nav> */}
    </div>
  );
};

export default Header;
