import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 px-[40px] md:px-[165px] bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600">
      <div className="w-full h-[1px] bg-white opacity-40"></div>
      <div className="text-nowrap opacity-80 text-white text-[14px] md:text-[16px] flex items-center justify-center px-[40px] md:px-[165px] py-[17px] z-10">
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
