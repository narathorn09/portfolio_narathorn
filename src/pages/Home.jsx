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
  const frontendItems = [{ icon: "react" }, { icon: "vite" }, { icon: "vue" }];
  const backendItems = [
    { icon: "nodejs" },
    { icon: "express" },
    { icon: "django" },
  ];
  const designItems = [{ icon: "figma" }];

  return (
    <>
      <div className="">
        <Header />
        <section
          id="sec1"
          className=" bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600  grid grid-cols-1 md:grid-cols-2 gap-[110px]  px-[40px] py-[100px] md:px-[165px]"
        >
          <div className="flex flex-col items-start justify-center mt-12 md:mt-0">
            <div className="text-white text-[40px] md:text-[50px] font-bold leading-[60px]">
              Hello Word!
            </div>
            <div className="text-white text-[40px] md:text-[50px] font-bold leading-[60px]">
              Narathorn Noophum
            </div>
            <div className="text-white text-[18px] font-thin leading-[30px] mt-4">
              I am a highly passionate and dedicated full-stack developer with a
              flair for creative design.
            </div>
            <div className="mt-8">
              <a
                href="mailto:narathorn.work@gmail.com"
                className="bg-white text-slate-950 font-medium px-4 py-2 rounded-md hover:text-indigo-900 cursor-pointer flex items-center"
              >
                <span className="flex justify-center items-center">
                  Contact now! <IoIosSend class="ml-1 size-5" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            {/* <img className="opacity-100" src="/circle.svg" /> */}
          </div>
        </section>
        <section
          id="sec3"
          className=" grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-[110px] py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="border border-indigo-600 rounded-md p-8 hover:bg-indigo-400 hover:cursor-pointer hover:text-white transition-colors duration-300 ease-in-out">
            <div className="text-indigo-500 text-[30px] md:text-[30px] font-bold leading-[60px]">
              FRONTEND
            </div>
            <div className="text-slate-600 text-[18px] font-thin leading-[30px]">
              My name is Narathorn Noophum. My nickname is Fan. I’m 22 years
              old.
            </div>
            <div class="mt-3 flex -space-x-2 overflow-hidden">
              {frontendItems.map((item) => (
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src={`https://skillicons.dev/icons?i=${item.icon}`}
                />
              ))}
            </div>
          </div>

          <div className="border border-indigo-600 rounded-md p-8">
            <div className="text-indigo-500 text-[30px] md:text-[30px] font-bold leading-[60px]">
              BACKEND
            </div>
            <div className="text-slate-600 text-[18px] font-thin leading-[30px]">
              My name is Narathorn Noophum. My nickname is Fan. I’m 22 years
              old.
            </div>
            <div class="mt-3 flex -space-x-2 overflow-hidden">
              {backendItems.map((item) => (
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src={`https://skillicons.dev/icons?i=${item.icon}`}
                />
              ))}
            </div>
          </div>
          <div className="border border-indigo-600 rounded-md p-8">
            <div className="text-indigo-500 text-[30px] md:text-[30px] font-bold leading-[60px]">
              DESIGN
            </div>
            <div className="text-slate-600 text-[18px] font-thin leading-[30px]">
              My name is Narathorn Noophum. My nickname is Fan. I’m 22 years
              old.
            </div>
            <div class="mt-3 flex -space-x-2 overflow-hidden">
              {designItems.map((item) => (
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src={`https://skillicons.dev/icons?i=${item.icon}`}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          id="sec3"
          className=" grid grid-cols-1 md:grid-cols-2 gap-[110px] py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="flex items-center justify-center">
            <div className="bg-indigo-600  rounded-full size-80">
              <img
                className="object-cover w-full h-full rounded-full"
                src="/profile.png"
                alt="Profile"
              />
            </div>
          </div>
          <div className="">
            <div className="text-indigo-500 text-[30px] md:text-[30px] font-bold leading-[60px]">
              ABOUT ME
            </div>
            <div className="break-words text-slate-600 text-[18px] font-thin leading-[30px]">
              My name is Narathorn Noophum. My nickname is Fan. I’m 22 years
              old. 17 min read UX, Typography, Design, CSS Share on Twitter,
              LinkedIn Heydon Pickering About The Author Heydon Pickering
              (@heydonworks) has worked with The Paciello Group, The BBC,
              Smashing Magazine, and Bulb Energy as a designer, engineer,
              writer, editor, and … More about Heydon ↬ Email Newsletter Your
              (smashing) email Weekly tips on front-end & UX. Trusted by
              200,000+ folks. Netlify Compose 2024 Register! Boost your skills
            </div>
          </div>
        </section>
        <section
          id="sec3"
          className=" grid grid-cols-1 md:grid-cols-2 gap-[110px] py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="">
            <div className="text-indigo-500 text-[30px] md:text-[30px] font-bold leading-[60px]">
              EDUCATION
            </div>
            <div className="break-words text-indigo-600 text-[18px] font-thin leading-[30px]">
              <ol class="relative border-s border-indigo-400 dark:border-gray-700">
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-indigo-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-gray-500">
                    2020 - 2024
                  </time>
                  <h3 class="text-lg font-semibold text-slate-600 dark:text-white">
                    PRINCE OF SONGKLA UNIVERSITY
                  </h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Faculty of Science | Computer Science
                  </p>
                  <p class="mb-4 text-xl text-base font-bold text-indigo-400 dark:text-gray-400">
                    GPA 3.81
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-indigo-600  rounded-full size-80">
              <img
                className="object-cover w-full h-full rounded-full"
                // src="/profile.png"
                alt="Profile"
              />
            </div>
          </div>
        </section>
        <section
          id="sec3"
          className="bg-white grid grid-cols-1 md:grid-cols-2 gap-[110px] py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
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
              </ol>
            </div>
          </div>

          <div>
            {" "}
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
              {" "}
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
        </section>
        <section
          id="sec4"
          className="flex flex-col items-center justify-center py-[40px] px-[40px] md:py-[80px] md:px-[165px]"
        >
          <div className="mb-4 text-indigo-500 text-[30px] md:text-[30px] font-bold leading-[60px]">
            SKILLS
          </div>
          <div className="">
            {skillItems.map((item) => (
              <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={`https://skillicons.dev/icons?i=${item.icon}`} />
            ))}
          </div>
        </section>
        <section
          id="sec4"
          className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 flex flex-col items-center justify-center py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="mb-4   text-[30px] md:text-[30px] font-bold leading-[60px]">
          </div>
          <div className="grid grid-cols-4 md:grid-cols-9 gap-5"></div>
        </section>
      </div>
    </>
  );
};

export default Home;
