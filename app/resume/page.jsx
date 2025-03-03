"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
const experi = [
  {
    year: "2024 - Present",
    dev: "Next Js",
    int: "Tech Solution Inc.",
  },
  {
    year: "2023 - Present",
    dev: "HTML CSS",
    int: "Tech Solution Inc.",
  },
  {
    year: "2023 - Present",
    dev: "Bootstrap5",
    int: "Tech Solution Inc.",
  },
  {
    year: "2023 - Present",
    dev: "TailWind CSS",
    int: "Tech Solution Inc.",
  },
  {
    year: "2023 - Present",
    dev: "Full Stack Developer",
    int: "Tech Solution Inc.",
  },
];
const education = [
  {
    year: "2019 - 20",
    deg: "Matric",
    mark: "Marks: 1019",
    school: "Workers Welfare School",
  },
  {
    year: "2021 - 22",
    deg: "Inter",
    mark: "Marks: 996",
    school: "The New City School",
  },
  {
    year: "2012 - Present",
    deg: "BSCS( Computer Science )",
    mark: "CGPA: 3.74",
    school: "National Textile University",
  },
];
const skills = [
  { title: "Next.js", src: "/assets/skills/next.svg" },
  { title: "React.js", src: "/assets/skills/react.svg" },
  { title: "JavaScript", src: "/assets/skills/js.svg" },
  { title: "Redux-Toolkit", src: "/assets/skills/redux.png" },
  { title: "Shadcn", src: "/assets/skills/chadcn.png" },
  { title: "Tailwind CSS", src: "/assets/skills/tailwind.svg" },
  { title: "Bootstrap 5", src: "/assets/skills/bot.png" },
  { title: "HTML", src: "/assets/skills/html.svg" },
  { title: "CSS", src: "/assets/skills/css.svg" },
];
const about = [
  {
    name: "Muhammad Ali Usman",
    fname: "Ijaz Ahmad",
    phone: "(+92) 305-1023906",
    dob: "25-12-2003",
    cnic: "33101-8848463-9",
    nationality: "Muslim",
    Religion: "Islam",
    addess: "Chak Jhumra, Faisal Town",
  },
];
const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
  ];

  const tabContent = {
    experience: (
      <div className="text-left max-w-full mx-auto ">
        <h2 className="text-3xl  font-semibold mb-4">My Experience</h2>
        <p className="mb-6">
          I worked as a{" "}
          <span className="font-bold text-accent">Web Developer</span> at{" "}
          <span className="font-bold text-accent">Cyverix Software House</span>,
          contributing to several projects. I have expertise in{" "}
          <span className="font-bold text-accent">
            HTML, CSS, Bootstrap 5, Tailwind CSS, JavaScript, React.js{" "}
          </span>
          . Currently, I am working on{" "}
          <span className="font-bold text-accent">Next.js projects</span>,
          focusing on modern web development and performance optimization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-scroll max-h-[400px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800">
          {experi.map((item, index) => {
            return (
              <div
                key={index}
                className="p-5 bg-[#232229] rounded-lg shadow-lg"
              >
                <div className="text-xs text-accent mb-2">{item.year}</div>
                <div className="text-white font-semibold">{item.dev}</div>
                <div className="text-xs text-gray-500">
                  <span className="text-accent text-xl">•</span> {item.int}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ),
    education: (
      <div className="text-left max-w-full mx-auto ">
        <h2 className="text-3xl  font-semibold mb-4">My Education</h2>
        <p className="">
          Learned a lot from this institute including time management, effective
          communication, discipline etc.
        </p>
        <p className="mb-6">
          Graduating with high grades my CGPA till now is 3.67.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-scroll max-h-[400px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800">
          {education.map((item, index) => {
            return (
              <div
                key={index}
                className="p-5 bg-[#232229] rounded-lg shadow-lg"
              >
                <div className="text-xs text-accent mb-2">{item.year}</div>
                <div className="text-white font-semibold">{item.deg}</div>
                <div className="text-white font-semibold">{item.mark}</div>
                <div className="text-xs text-gray-500">
                  <span className="text-accent text-xl">•</span> {item.school}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ),
    skills: (
      <div className="text-left max-w-full mx-auto ">
        <h2 className="text-3xl  font-semibold mb-4">My Skills</h2>
        <p className="mb-6">
          I have a lot of skills in Web Developement like Nextjs, Reactjs,
          JavaScript, Dynamic Data Handling, Redux-Toolkit, Material UI, Shadcn,
          Tailwind Css, Flow Bit, Flow Element, Bootstrip5, Html 5, Css . Now, I
          am working on Next Js Projects.
        </p>

        <div className="flex flex-wrap gap-6">
          {skills.map((skill, index) => (
            <Tooltip key={index} title={skill.title} placement="top">
              <div className="bg-[#232229] rounded-lg shadow-lg p-4">
                <Image
                  src={skill.src}
                  alt={skill.title}
                  width={80}
                  height={80}
                  className="h-20 w-20"
                />
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    ),
    about: (
      <div className="text-left max-w-full mx-auto ">
        <h2 className="text-3xl  font-semibold mb-4">About Me</h2>
        <p className="">
          Learned a lot from this institute including time management, effective
          communication, discipline etc.
        </p>

        {about.map((item, index) => {
          return (
            <div key={index}>
              {/* name fname  */}
              <div className="grid lg:grid-cols-2 grid-cols-1 mt-4">
                <div>
                  <div>
                    <span className="text-gray-400">Name: </span>
                    {item.name}
                  </div>
                  <div>
                    <span className="text-gray-400">Phone: </span>
                    {item.phone}
                  </div>
                  <div>
                    <span className="text-gray-400">CNIC: </span>
                    {item.cnic}
                  </div>
                  <div>
                    <span className="text-gray-400">Religion: </span>
                    {item.Religion}
                  </div>
                </div>
                <div>
                  {" "}
                  <div>
                    <span className="text-gray-400 ">Fname: </span>
                    {item.fname}
                  </div>
                  <div>
                    <span className="text-gray-400 ">Date of Birth: </span>
                    {item.dob}
                  </div>
                  <div className="">
                    <span className="text-gray-400">Nationality: </span>
                    {item.nationality}
                  </div>
                  <div className="">
                    <span className="text-gray-400">Address: </span>
                    {item.addess}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),
  };

  return (
    <section className="py-5">
      <div className="container mx-auto">
        {/* Flexbox layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs Section */}
          <div className="flex flex-col gap-4 text-center rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 lg:w-[26vw] items-center rounded-xl  text-xl ${
                  activeTab === tab.id
                    ? "bg-accent text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-accent hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="bg-primary   mx-auto  px-6  rounded-lg">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
