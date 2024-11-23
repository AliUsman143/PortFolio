"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
const workData = [
  {
    id: "01",
    image: "/assets/work/author.png", // Replace with your image path
    title: "Frontend Project",
    description:
      "The website showcases a collection of quotes from famous authors. It offers a user-friendly interface to explore quotes by author.",
    stack: [{ name: "HTML5" }, { name: "CSS3" },{ name: "Tailwind" },{ name: "Next Js" }],
    live: "",
    github: "",
  },
  {
    id: "02",
    image: "/assets/work/brith.png", // Replace with your image path
    title: "Frontend Project",
    description: "The website appears to be a platform dedicated to showcasing about Brithish Institute , primarily in the fields of science and spirituality.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Tailwind" }],
    live: "",
    github: "",
  },
  {
    id: "03",
    image: "/assets/work/netflix.png", // Replace with your image path
    title: "Frontend Project",
    description: "This website shows the Netflix homepage, offering unlimited access to movies, TV shows, and more, with a simple sign-up process.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Tailwind" },{ name: "Next Js" }],
    live: "",
    github: "",
  },
  {
    id: "04",
    image: "/assets/work/dev.png", // Replace with your image path
    title: "Frontend Project",
    description: "This website Devkuns, which focuses on providing resources for developers, such as documentation, tutorials, and courses.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Tailwind" }],
    live: "",
    github: "",
  },
  {
    id: "05",
    image: "/assets/work/hugo.png", // Replace with your image path
    title: "Frontend Project",
    description: "This website  Hugoplate, built with Hugo and TailwindCSS. It's designed to help users quickly start their own Hugo projects.",
    stack: [{ name: "HTML5" }, { name: "CSS3" },  { name: "Tailwind" }],
    live: "",
    github: "",
  },
  {
    id: "06",
    image: "/assets/work/pinwheel.png", // Replace with your image path
    title: "Frontend Project",
    description: "This website  PinWeel, which offers solutions for scaling design and development operations. It specifically mentions Avocode Enterprise.",
    stack: [{ name: "HTML5" }, { name: "CSS3" },  { name: "Tailwind" }],
    live: "",
    github: "",
  },
  {
    id: "07",
    image: "/assets/work/thapa.png", // Replace with your image path
    title: "Frontend Project",
    description: "This website appears to be a movie streaming platform called ThapaFlix. It invites users to watch movies together, offering a variety of genres from dramas to action.",
    stack: [{ name: "HTML5" }, { name: "CSS3" },  { name: "Tailwind" },{ name: "Next Js" }],
    live: "",
    github: "",
  },
];

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10 bg-accent text-white rounded-md p-2 hover:bg-green-600"
      onClick={onClick}
    >
      <FaArrowLeft className="w-5 h-5" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10 bg-accent text-white rounded-md p-2 hover:bg-green-600"
      onClick={onClick}
    >
      <FaArrowRight className="w-5 h-5" />
    </button>
  );
};

const WorkSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current), // Update active slide
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="md:py-7 py-0">
      <div className="container mx-auto h-auto flex flex-col md:flex-row gap-8">
        {/* Slider Section */}
        <div className="w-full md:w-1/2 md:order-2 order-1  relative">
          <Slider {...settings}>
            {workData.map((item) => (
              <div key={item.id} className="p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Card Section */}
        <div className="mx-auto md:w-[450px] h-[60vh] group lg:p-6 md:order-1 order-2">
          <p className="md:text-6xl text-4xl leading-none text-gray-500 font-extrabold">
            {workData[activeSlide].id}
          </p>
          <h3 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize lg:py-4 py-1">
            {workData[activeSlide].title}
          </h3>
          <p className="md:mt-4 text-gray-300">
            {workData[activeSlide].description}
          </p>
          <ul className="flex gap-4 md:mt-4">
            {workData[activeSlide].stack.map((item, index) => (
              <li key={index} className="text-xl lg:py-1 text-accent">
                {item.name}
                {index !== workData[activeSlide].stack.length - 1 && ","}
              </li>
            ))}
          </ul>
          <hr className="border-2 border-accent mt-4" />
          <div className="mt-5 flex gap-4">
            <div>
              <Link
                href={workData[activeSlide].live}
                className="text-white group-hover:text-accent hover:scale-110"
              >
                <Tooltip title="Home" placement="top">
                  <BsArrowUpRight className="w-11 h-11 border rounded-full p-2 group-hover:border-accent transition-all duration-500 group-hover:bg-accent group-hover:text-primary" />
                </Tooltip>
              </Link>
            </div>
            <div>
              <Link
                href={workData[activeSlide].github}
                className="text-white group-hover:text-accent hover:scale-110"
              >
                <Tooltip title="Github" placement="top">
                  <BsGithub className="w-11 h-11 border rounded-full p-2 group-hover:border-accent transition-all duration-500 group-hover:bg-accent group-hover:text-primary" />
                </Tooltip>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
