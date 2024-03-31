import { useState, useRef } from "react";
import Header from "../components/Header";
import { IoIosSend } from "react-icons/io";
import { useIsVisible } from "../utils/UseIsVisible";
import CardExperience from "../components/CardExperience";
import CardProject from "../components/CardProject";
import CardSkill from "../components/CardSkill";

const Home = () => {
  const skillItems = [
    { icon: "js", title: "JavaScript" },
    { icon: "ts", title: "TypeScript" },
    { icon: "html", title: "HTML" },
    { icon: "css", title: "CSS" },
    { icon: "mysql", title: "MySQL" },
    { icon: "mongodb", title: "MongoDB" },
    { icon: "react", title: "React" },
    { icon: "redux", title: "Redux" },
    { icon: "tailwind", title: "Tailwind" },
    { icon: "vue", title: "Vue.js" },
    { icon: "nodejs", title: "Node.js" },
    { icon: "django", title: "Django" },
    { icon: "mui", title: "Material-UI" },
    { icon: "git", title: "Git" },
    { icon: "postman", title: "Postman" },
    { icon: "vscode", title: "VS Code" },
    { icon: "docker", title: "Docker" },
    { icon: "figma", title: "Figma" },
  ];
  
  const frontendItems = [{ icon: "react" }, { icon: "vite" }, { icon: "vue" }];
  const backendItems = [
    { icon: "nodejs" },
    { icon: "express" },
    { icon: "django" },
  ];

  const experienceItems = [
    {
      dateRange: "September 2023 - March 2024",
      subTitle: "Stream South Technology Co.",
      title: "FULL STACK DEVELOPER",
      description:
        "I interned in a Full Stack Developer position, utilizing ReactJs, NodeJs, MongoDB, Powerapps, PowerAutomate and Django.",
      listWork: [
        { title: "HIA", url: "https://www.thaihia.in.th/" },
        {
          title: "Herbarium",
          url: "https://archive.sci.psu.ac.th/herbarium-home",
        },
      ],
      listSkill: [
        { icon: "react" },
        { icon: "nodejs" },
        { icon: "express" },
        { icon: "mongodb" },
        { icon: "django" },
      ],
    },

    {
      dateRange: "April 2023 - June 2023",
      subTitle: "Stream South Technology Co.",
      title: "FULL STACK DEVELOPER",
      description:
        "I interned in a Full Stack Developer position, utilizing ReactJs, NodeJs, MongoDB, and GraphQL.",
      listWork: [{ title: "ARCHIVE", url: "https://archive.sci.psu.ac.th/" }],
      listSkill: [
        { icon: "react" },
        { icon: "nodejs" },
        { icon: "express" },
        { icon: "mongodb" },
        { icon: "graphql" },
      ],
    },
  ];
  const projectItems = [
    {
      subTitle: "Mini Project",
      title: "BOOKING SYSTEM",
      description:
        " I have developed a booking system utilizing React.js + Vite, Node.js, Express.js and MongoDB",
      listGit: [
        {
          title: "frontend",
          url: "https://github.com/narathorn09/frontend_booking_funch",
        },
        {
          title: "backend",
          url: "https://github.com/narathorn09/backend_booking_funch",
        },
      ],
      listSkill: [{ icon: "react" }, { icon: "vite" }, { icon: "tailwind" }, { icon: "nodejs" },{ icon: "express" }, { icon: "mongodb" }],
    },
    {
      subTitle: " Mini Project",
      title: "REVIEW ANIME SYSTEM",
      description:
        " I have developed a review anime system utilizing Vue.js,Spring Boot, Antd and MySQL",
      listGit: [
        {
          title: "frontend",
          url: "https://github.com/narathorn09/Miniproject_frontend",
        },
        {
          title: "backend",
          url: "https://github.com/narathorn09/Miniproject_backend",
        },
      ],
      listSkill: [{ icon: "vuejs" }, { icon: "spring" }, { icon: "mysql" }],
    },
    {
      subTitle: "Final Project",
      title: "EVIDENCE MANAGEMENT SYSTEM",
      description:
        "I am developing an evidence management system for Forensic Science Center 9, utilizing React.js, Node.js, Express.js, MUI, Antd, and MySQL.",
      listGit: [
        {
          title: "frontend",
          url: "https://github.com/narathorn09/evidence-frontend",
        },
        {
          title: "backend",
          url: "https://github.com/narathorn09/evidence-backend",
        },
      ],
      listSkill: [{ icon: "react" }, { icon: "nodejs" }, { icon: "express" }, { icon: "mui" }, { icon: "mysql" }],
    },

    {
      subTitle: "Mini Project",
      title: "FOOD ORDERING SYSTEM",
      description:
        "I have developed a food ordering system utilizing React.js, Node.js, Express.js, MUI, and MySQL",
        listGit: [
          {
            title: "git repository",
            url: "https://github.com/narathorn09/se-project",
          },
        ],
        listSkill: [{ icon: "react" }, { icon: "nodejs" }, { icon: "express" }, { icon: "mui" }, { icon: "mysql" }],

    },
  ];
  const designItems = [{ icon: "figma" }];

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <>
      <div className="">
        <Header />
        <section
          id="sec1"
          className=" bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600  grid grid-cols-1 md:grid-cols-2 gap-[110px]  px-[40px] py-[100px] md:px-[165px]"
        >
          <div className="flex flex-col items-start justify-center mt-12 md:mt-0">
            <div className="uppercase text-white text-[40px] md:text-[50px] font-bold leading-[60px]">
              Hello World!
            </div>
            <div className="uppercase text-white text-[40px] md:text-[50px] font-bold leading-[60px]">
              Narathorn Noophum
            </div>
            <div className="text-white text-[18px] font-thin leading-[30px] mt-4">
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

          <div className="hidden md:block">
            {/* <img className="opacity-100" src="/circle.svg" /> */}
          </div>
        </section>
        <section
          // id="sec3"
          className={`grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-[110px] py-[40px] px-[40px] md:py-[60px] md:px-[165px] transition-opacity
          `}
        >
          <div className="border border-indigo-600 rounded-md p-8 ">
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
          id="sec8"
          ref={ref1}
          className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-[110px] py-[40px] px-[40px] md:py-[60px] md:px-[165px] transition-opacity
          ease-in
          duration-700
          ${isVisible1 ? "opacity-100" : "opacity-0"}`}
          // className=" grid grid-cols-1 md:grid-cols-2 gap-[110px] py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="flex items-center justify-center">
            <div className="bg-indigo-600  rounded-full size-80">
              <img
                className="object-cover w-full h-full rounded-full bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600"
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
          </div>
          <div className="flex items-center justify-center ">
            <div className="bg-indigo-600  w-full h-full rounded-md">
              <img
                className="object-cover w-full h-full rounded-full"
                // src="/profile.png"
                // alt="Profile"
              />
            </div>
          </div>
        </section>
        <section
          id="sec3"
          className="bg-white  py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
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
          id="sec3"
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
              />
            ))}
          </div>
        </section>
        <section
          id="sec4"
          className="flex flex-col items-center justify-center py-[40px] px-[40px] md:py-[80px] md:px-[165px]"
        >
          <div className="mb-4 text-indigo-500 text-[30px] md:text-[30px] font-bold leading-[60px]">
            SKILLS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {skillItems.map((item) => (
              <CardSkill
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
        </section>
        <section
          id="sec4"
          className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 flex flex-col items-center justify-center py-[40px] px-[40px] md:py-[60px] md:px-[165px]"
        >
          <div className="mb-4   text-[30px] md:text-[30px] font-bold leading-[60px]"></div>
          <div className="grid grid-cols-4 md:grid-cols-9 gap-5"></div>
        </section>
      </div>
    </>
  );
};

export default Home;
