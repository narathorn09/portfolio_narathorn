import { useState, useRef } from "react";
import Header from "../components/Header";
import { IoIosSend } from "react-icons/io";
import { useIsVisible } from "../utils/UseIsVisible";
import CardExperience from "../components/CardExperience";
import CardProject from "../components/CardProject";
import CardSkill from "../components/CardSkill";
import CardIntro from "../components/CardIntro";
import skillItems from "../JSON/skillItems";
import introItems from "../JSON/introItems";
import experienceItems from "../JSON/experienceItems";
import projectItems from "../JSON/projectItems";

const Home = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div>
      <Header />
      <section
        id="sec1"
        className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600  grid grid-cols-1 md:grid-cols-2 gap-[110px]  px-[40px] py-[100px] md:px-[165px]"
      >
        <div className="flex flex-col items-start justify-center mt-12 md:mt-0">
          <div className="uppercase text-white text-[40px] md:text-[50px] font-bold leading-[60px]">
            Hello World!
          </div>
          <div className="uppercase text-white text-[40px] md:text-[50px] font-bold leading-[60px]">
            Narathorn Noophum
          </div>
          <div className="text-white text-[18px] font-thin mt-4">
            I am a highly passionate and dedicated full-stack developer with a
            flair for creative design.
          </div>
          <div className="mt-8">
            <a
              href="mailto:narathorn.work@gmail.com"
              className="relative bg-white text-slate-950 font-medium px-4 py-2 rounded-md hover:text-indigo-900 cursor-pointer flex items-center"
            >
              <span className="flex justify-center items-center">
                Contact now! <IoIosSend class="ml-1 size-5" />
              </span>
              {/* <span class="absolute -top-1 -right-1 flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span> */}
            </a>
          </div>
        </div>
      </section>
      <section
        id="sec2"
        className={`grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-[40px] py-[40px] px-[40px] md:py-[60px] md:px-[165px]`}
      >
        {introItems.map((item) => (
          <CardIntro
            title={item.title}
            description={item.description}
            listItem={item.listItem}
          />
        ))}
      </section>
      <section
        id="sec3"
        className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-[40px] py-[40px] px-[40px] md:py-[60px] md:px-[165px] transition-opacity ease-in duration-700  bg-white`}
      >
        <div className="flex items-center justify-center">
          <div className="bg-indigo-600  rounded-full size-[300px] md:size-[400px] drop-shadow-2xl">
            <img
              className="object-cover w-full h-full rounded-full bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-600"
              src="/profile.png"
              alt="Profile"
            />
          </div>
        </div>
        <div>
          <div className="p-8 rounded-md bg-white shadow-xl shadow-indigo-100 border-l-4 border-indigo-600">
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-300 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold leading-[60px]">
              ABOUT ME
            </div>
            <div className="break-words text-[16px] font-thin leading-[30px]">
              My name is Narathorn Noophum. My nickname is Fan. I’m 22 years
              old.
            </div>
          </div>
          <div className="p-8 mt-4 rounded-md bg-white shadow-xl shadow-indigo-100 border-l-4 border-indigo-600">
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-300 bg-clip-text text-transparent text-[30px] md:text-[30px] font-bold leading-[60px]">
              EDUCATION
            </div>

            <time class="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-gray-500">
              2020 - 2024
            </time>
            <h3 class="text-lg font-semibold text-slate-600 dark:text-white">
              PRINCE OF SONGKLA UNIVERSITY
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Faculty of Science | Computer Science
            </p>
            <div className="flex flex-col md:flex-row md:space-x-3 ">
              <p className="uppercase mt-4 flex justify-center items-center w-[100px] bg-gradient-to-r font-medium from-indigo-800 via-indigo-700 to-indigo-500 rounded-full text-white px-4 py-2">
                GPA 3.81
              </p>
              <p className="uppercase mt-4 flex justify-center items-center w-[200px] bg-gradient-to-r font-medium from-indigo-800 via-indigo-700 to-indigo-500 rounded-full text-white px-4 py-2">
                first-class honors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sec5"
        className="bg-white  py-[40px] px-[40px] md:py-[60px] md:px-[165px] bg-slate-50"
      >
        <div className="mb-8 text-center bg-gradient-to-r from-indigo-800 to-indigo-400 bg-clip-text text-transparent text-[30px] md:text-[40px] font-bold leading-[60px]">
          EXPERIENCE
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {experienceItems.map((experienceItem) => (
            <CardExperience
              dateRange={experienceItem.dateRange}
              subTitle={experienceItem.subTitle}
              title={experienceItem.title}
              description={experienceItem.description}
              listWork={experienceItem.listWork}
              listSkill={experienceItem.listSkill}
            />
          ))}
        </div>
      </section>
      <section
        id="sec6"
        className="bg-white  py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
      >
        <div className="mb-8 text-center bg-gradient-to-r from-indigo-800 to-indigo-400 bg-clip-text text-transparent text-[30px] md:text-[40px] font-bold leading-[60px]">
          PROJECT
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectItems.map((projectItem, index) => (
            <CardProject
              dateRange={projectItem.dateRange}
              subTitle={projectItem.subTitle}
              title={projectItem.title}
              description={projectItem.description}
              listGit={projectItem.listGit}
              listSkill={projectItem.listSkill}
              className={ index === 3 ? "md:col-start-2" : ""}
            />
          ))}
        </div>
      </section>
      <section
        id="sec7"
        className="flex flex-col items-center justify-center py-[40px] px-[40px] md:py-[80px] md:px-[165px] bg-slate-50"
      >
        <div className="mb-8  text-center bg-gradient-to-r from-indigo-800 to-indigo-400 bg-clip-text text-transparent text-[30px] md:text-[40px] font-bold leading-[60px]">
          SKILLS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {skillItems.map((item) => (
            <CardSkill icon={item.icon} title={item.title} level={item.level}/>
          ))}
        </div>
      </section>
      <section
        id="sec8"
        className="bg-white flex flex-col items-center justify-center py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
      >
        <div className="mb-4   text-[30px] md:text-[30px] font-bold leading-[60px]"></div>
        <div className="grid grid-cols-4 md:grid-cols-9 gap-5"></div>
      </section>
    </div>
  );
};

export default Home;
