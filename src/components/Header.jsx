import React from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";

const Header = () => {
  return (
    
      <div className=" inset-x-px top-0 flex items-center justify-between px-[40px] md:px-[165px] py-[17px] drop-shadow-md bg-white dark:bg-black z-10">
        <h1 className="text-indigo-800 font-bold text-md">NARATHORN</h1>
        <nav>
          <DarkModeSwitcher />
        </nav>
      </div>
    
  );
};

export default Header;
