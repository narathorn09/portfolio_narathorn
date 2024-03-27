import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference in local storage or based on browser settings
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem("color-theme");
    setIsDarkMode(
      storedTheme === "dark" || (storedTheme === null && prefersDarkMode)
    );

    // Apply the theme class to the document element
    document.documentElement.classList.toggle(
      "dark",
      storedTheme === "dark" || (storedTheme === null && prefersDarkMode)
    );
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("color-theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <div className="mr-3 relative w-11 h-6 bg-gray-200 rounded-full dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      {isDarkMode ? (
        <MdDarkMode className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      ) : (
        <MdLightMode className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      )}
      {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isDarkMode ? "Dark" : "Light"}
      </span> */}
    </label>
  );
};

export default DarkModeSwitcher;
