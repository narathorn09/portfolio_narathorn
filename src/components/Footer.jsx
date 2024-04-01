import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 px-[60px] bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600">
      <div className="text-nowrap text-white border-t border-white text-[12px] md:text-[16px] flex items-center justify-center px-[40px] md:px-[165px] py-[17px] dark:bg-black z-10">
        ©
        <a href="/" className="px-1">
          FNNz
        </a>
        , All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
