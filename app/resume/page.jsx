"use client";
import React, { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
  ];

  const tabContent = {
    education: (
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Degree</th>
            <th className="py-2">Institution</th>
            <th className="py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor's in Computer Science</td>
            <td>XYZ University</td>
            <td>2020-2024</td>
          </tr>
          <tr>
            <td>Intermediate</td>
            <td>ABC College</td>
            <td>2018-2020</td>
          </tr>
        </tbody>
      </table>
    ),
    experience: (
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Position</th>
            <th className="py-2">Company</th>
            <th className="py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frontend Developer</td>
            <td>ABC Solutions</td>
            <td>2023-Present</td>
          </tr>
          <tr>
            <td>Intern</td>
            <td>XYZ Tech</td>
            <td>2022</td>
          </tr>
        </tbody>
      </table>
    ),
    skills: (
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>HTML & CSS</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
    about: (
      <p className="text-left">
        Hello! I'm a passionate web developer with a keen interest in building
        dynamic and interactive user interfaces. I love learning new
        technologies and improving my skills continuously.
      </p>
    ),
  };

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Resume</h2>

        {/* Flexbox layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs Section */}
          <div className="flex flex-col gap-4 lg:w-1/4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-left ${
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
          <div className="bg-primary p-6 rounded-lg shadow-md lg:w-3/4">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
