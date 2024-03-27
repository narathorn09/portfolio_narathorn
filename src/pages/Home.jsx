import { useState } from "react";
import Header from "../components/Header";
import { IoIosSend } from "react-icons/io";

const Home = () => {
  const skillItems = [
    { icon: "js" },
    { icon: "ts" },
    { icon: "html" },
    { icon: "css" },
    { icon: "mysql" },
    { icon: "mongodb" },
    { icon: "react" },
    { icon: "vue" },
    { icon: "nodejs" },
    { icon: "django" },
    { icon: "mui" },
    { icon: "git" },
    { icon: "postman" },
    { icon: "vscode" },
    { icon: "docker" },
    { icon: "figma" },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <section
          id="sec1"
          className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 gap-[110px] py-[40px] px-[40px] md:py-[100px] md:px-[165px]"
        >
          <Header />

          <div className="flex flex-col items-start justify-center mt-12 md:mt-0">
            <div className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent text-[40px] md:text-[60px] font-bold leading-[60px]">
              Hi! This is Narathorn Noophum
            </div>
            <div className="text-white text-[18px] font-thin leading-[30px] mt-4">
              I am a highly passionate and dedicated full-stack developer with a
              flair for creative design.
            </div>
            <div className="mt-8">
              <a
                href="mailto:narathorn.work@gmail.com"
                className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 text-slate-950 font-medium px-4 py-2 rounded-md hover:bg-slate-600 hover:text-white cursor-pointer flex items-center"
              >
                <span className="flex justify-center items-center" >
                  Contact now! <IoIosSend class="ml-1 size-5" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <img className="opacity-100" src="./src/assets/circle.svg" />
          </div>
        </section>
        <section
          id="sec3"
          className="flex flex-col justify-center items-center py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          {/* <div className="mb-12 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 h-[1px] w-full"></div> */}
          <div className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold leading-[60px]">
            ABOUT ME
          </div>
          <div className="text-white text-[18px] font-thin leading-[30px]">
            My name is Narathorn Noophum. My nickname is Fan. I’m 22 years old.
          </div>
          {/* <div className="mt-12 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 h-[1px] w-full"></div> */}
        </section>
        <section
          id="sec3"
          className="grid grid-cols-1 md:grid-cols-2 gap-[110px] py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="">
            <div className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold leading-[60px]">
              EDUCATION
            </div>
            <div>
              <ol class="relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2020 - 2024
                  </time>
                  <h3 class="text-lg font-semibold text-white dark:text-white">
                    PRINCE OF SONGKLA UNIVERSITY
                  </h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Faculty of Science | Computer Science
                  </p>
                  <p class="mb-4 text-xl text-base font-bold bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent  dark:text-gray-400">
                    GPA 3.81
                  </p>
                </li>
              </ol>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <img className="size-80" src="./src/assets/element_1.svg" />
            </div>
            <div className="hidden md:flex justify-center items-center">
              <img className="size-80" src="./src/assets/element_2.svg" />
            </div>
            <div className="hidden md:flex justify-center items-center">
              <img className="size-80" src="./src/assets/element_3.svg" />
            </div>
          </div>
          <div className="">
            <div className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold leading-[60px]">
              EXPERIENCE
            </div>
            <div>
              <ol class="relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
                    September 2023 - March 2024
                  </time>
                  <p class="mb-2 mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Stream South Technology Co.
                  </p>
                  <h3 class="text-lg font-semibold text-white dark:text-white">
                    FULL STACK DEVELOPER
                  </h3>
                  <p class="text-base text-wrap font-normal text-gray-500 dark:text-gray-400">
                    I interned in a Full Stack Developer position, utilizing
                    ReactJs, NodeJs, MongoDB, Powerapps, PowerAutomate and
                    Django.
                  </p>
                  <div className="mt-3 flex flex-col justify-start items-start space-y-4">
                    <a
                      href="https://archive.sci.psu.ac.th/herbarium-home"
                      target="_blank"
                      className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 text-slate-950 font-medium px-4 py-2 rounded-md  hover:bg-slate-600 hover:text-white cursor-pointer"
                    >
                      Work example 1!
                    </a>
                    <a
                      href="https://www.thaihia.in.th/"
                      target="_blank"
                      className="bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 text-slate-950 font-medium px-4 py-2 rounded-md  hover:bg-slate-600 hover:text-white cursor-pointer"
                    >
                      Work example 2!
                    </a>
                  </div>
                </li>
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
                    August 2023
                  </time>
                  <p class="mb-2 mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Mini Project
                  </p>
                  <h3 class="text-lg font-semibold text-white dark:text-white">
                    REVIEW ANIME SYSTEM
                  </h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    I have developed a review anime system utilizing Vue.js,
                    Spring Boot, Antd and MySQL
                  </p>
                </li>
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
                    June 2023 - October 2023
                  </time>
                  <p class="mb-2 mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Final Project
                  </p>
                  <h3 class="text-lg font-semibold text-white dark:text-white">
                    EVIDENCE MANAGEMENT SYSTEM
                  </h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    I am developing an evidence management system for Forensic
                    Science Center 9, utilizing React.js, Node.js, Express.js,
                    MUI, Antd, and MySQL.
                  </p>
                </li>
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
                    April 2023 - June 2023
                  </time>
                  <p class="mb-2 mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Stream South Technology Co.
                  </p>
                  <h3 class="text-lg font-semibold text-white dark:text-white">
                    FULL STACK DEVELOPER
                  </h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    I interned in a Full Stack Developer position, utilizing
                    ReactJs, NodeJs, MongoDB, and GraphQL. Work example :
                    https://archive.sci.psu.ac.th/
                  </p>
                </li>
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
                    January 2023 - February 2023
                  </time>
                  <p class="mb-2 mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Mini Project
                  </p>
                  <h3 class="text-lg font-semibold text-white dark:text-white">
                    FOOD ORDERING SYSTEM
                  </h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    I have developed a food ordering system utilizing React.js,
                    Node.js, Express.js, MUI, and MySQL
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section
          id="sec4"
          className="flex flex-col items-center justify-center py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="mb-4 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold leading-[60px]">
            SKILLS
          </div>
          <div className="grid grid-cols-4 md:grid-cols-12 gap-5">
            {skillItems.map((item) => (
              <img src={`https://skillicons.dev/icons?i=${item.icon}`} />
            ))}
          </div>
        </section>
        <section
          id="sec4"
          className="flex flex-col items-center justify-center py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="mb-4 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold leading-[60px]">
            ...
          </div>
          <div className="grid grid-cols-4 md:grid-cols-9 gap-5"></div>
        </section>
      </div>
    </>
  );
};

export default Home;
