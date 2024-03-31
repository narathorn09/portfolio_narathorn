import React from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { AiFillThunderbolt } from "react-icons/ai";

const Header = () => {
  return (
    <div className=" inset-x-px top-0 flex items-center justify-between px-[40px] md:px-[165px] py-[17px] drop-shadow-md bg-white dark:bg-slate-900 z-100">
      <div className="flex items-center justify-center">
        <div className="bg-indigo-600 dark:bg-white text-white flex items-center justify-center rounded-full size-7 py-1 px-1 drop-shadow-sm">
          <AiFillThunderbolt className="dark:text-indigo-700" />
        </div>
        <h1 className="text-indigo-700 dark:text-white font-bold text-xl ml-2">
          FNNz
        </h1>
      </div>
      {/* <nav>
        <DarkModeSwitcher />
      </nav> */}
    </div>
  );
};

export default Header;
