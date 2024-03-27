import React from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";

const Header = () => {
  return (
    
      <div className="absolute inset-x-px top-0 flex items-center justify-between px-[40px] md:px-[165px] py-[17px] drop-shadow-md bg-transparent dark:bg-black z-10">
        <h1 className="text-white">NARATHORN</h1>
        <nav>
          <DarkModeSwitcher />
        </nav>
      </div>
    
  );
};

export default Header;
