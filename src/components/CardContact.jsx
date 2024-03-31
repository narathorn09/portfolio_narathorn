import React, { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";

const CardContact = ({ icon, title, href }) => {
  return (
    <a
      href={`${href}`}
      className="px-4 py-2 flex justify-start items-center rounded-md bg-transparent border-b border-white  duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer "
    >
      <div className="text-white mr-2">{icon}</div>
      <div className="text-white ml-2">{title}</div>
    </a>
  );
};

export default CardContact;
