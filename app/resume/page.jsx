"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

// Experience Data
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

// Education Data
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
    deg: "BSCS(Computer Science)",
    mark: "CGPA: 3.74",
    school: "National Textile University",
  },
];

// Skills Data
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

// About Data
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

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("education");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Matches transition duration
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-4">My Experience</h2>
            <p className="mb-6">
              I worked as a <span className="font-bold text-accent">Web Developer</span> at{" "}
              <span className="font-bold text-accent">Cyverix Software House</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[400px]">
              {experi.map((item, index) => (
                <div key={index} className="p-5 bg-[#232229] rounded-lg shadow-lg">
                  <div className="text-xs text-accent mb-2">{item.year}</div>
                  <div className="text-white font-semibold">{item.dev}</div>
                  <div className="text-xs text-gray-500">
                    <span className="text-accent text-xl">•</span> {item.int}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "education":
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-4">My Education</h2>
            <p className="mb-6">Graduating with high grades my CGPA till now is 3.67.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[400px]">
              {education.map((item, index) => (
                <div key={index} className="p-5 bg-[#232229] rounded-lg shadow-lg">
                  <div className="text-xs text-accent mb-2">{item.year}</div>
                  <div className="text-white font-semibold">{item.deg}</div>
                  <div className="text-white font-semibold">{item.mark}</div>
                  <div className="text-xs text-gray-500">
                    <span className="text-accent text-xl">•</span> {item.school}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "skills":
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
            <div className="flex flex-wrap gap-6">
              {skills.map((skill, index) => (
                <Tooltip key={index} title={skill.title} placement="top">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#232229] rounded-lg shadow-lg p-4"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.title}
                      width={80}
                      height={80}
                      className="h-20 w-20"
                    />
                  </motion.div>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        );

      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            {about.map((item, index) => (
              <div key={index} className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-4">
                <div>
                  <div><span className="text-gray-400">Name: </span>{item.name}</div>
                  <div><span className="text-gray-400">Phone: </span>{item.phone}</div>
                  <div><span className="text-gray-400">CNIC: </span>{item.cnic}</div>
                  <div><span className="text-gray-400">Religion: </span>{item.Religion}</div>
                </div>
                <div>
                  <div><span className="text-gray-400">Fname: </span>{item.fname}</div>
                  <div><span className="text-gray-400">Date of Birth: </span>{item.dob}</div>
                  <div><span className="text-gray-400">Nationality: </span>{item.nationality}</div>
                  <div><span className="text-gray-400">Address: </span>{item.addess}</div>
                </div>
              </div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Loading spinner can be added here */}
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Tabs + Button */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-4 text-center rounded-xl"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 lg:w-[26vw] rounded-xl text-xl ${
                  activeTab === tab.id
                    ? "bg-accent text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-accent hover:text-white"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <a href="/assets/files/ali_usman.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="contained"
                  color="primary"
                  className="bg-accent text-gray-600 px-6 py-3 mt-4"
                >
                  <FaEye className="text-xl" />
                  <span className="ml-3 font-bold">View My CV</span>
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Tab Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-primary mx-auto px-6 py-4 rounded-lg w-full"
          >
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}