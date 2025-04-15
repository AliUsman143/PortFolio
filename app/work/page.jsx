"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

// Complete project data
const workData = [
  {
    id: "01",
    image: "/assets/work/author.png",
    title: "Author Quotes Website",
    description: "A responsive website showcasing quotes from famous authors with a clean, user-friendly interface built with modern web technologies.",
    stack: ["HTML5", "CSS3", "Tailwind CSS", "Next.js"],
    live: "#",
    github: "https://github.com/AliUsman143/Author_Website",
  },
  {
    id: "02",
    image: "/assets/work/dawat.png",
    title: "Islamic Learning Platform",
    description: "An educational platform offering comprehensive Islamic courses with responsive design and intuitive navigation.",
    stack: ["HTML5", "CSS3", "JavaScript", "Next.js"],
    live: "#",
    github: "#",
  },
  {
    id: "03",
    image: "/assets/work/thapa.png",
    title: "Movie Streaming Clone",
    description: "A Netflix-inspired movie streaming platform with responsive design and movie categorization features.",
    stack: ["HTML5", "CSS3", "JavaScript", "React"],
    live: "#",
    github: "https://github.com/AliUsman143/thapaflix-movietemplete",
  },
  {
    id: "04",
    image: "/assets/work/voiceflex.png",
    title: "AI Voice Translation",
    description: "A cutting-edge voice translation platform leveraging AI technology for real-time multilingual communication.",
    stack: ["HTML5", "CSS3", "JavaScript", "React"],
    live: "#",
    github: "#",
  },
  {
    id: "05",
    image: "/assets/work/netflix.png",
    title: "Netflix UI Clone",
    description: "A responsive clone of Netflix's homepage interface with movie categories and responsive design.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    live: "#",
    github: "https://github.com/AliUsman143/Netflix-clone",
  },
  {
    id: "06",
    image: "/assets/work/dev.png",
    title: "Developer Resources Hub",
    description: "A comprehensive resource center for developers featuring documentation, tutorials, and coding references.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    live: "#",
    github: "https://github.com/AliUsman143/Devkuns",
  },
  {
    id: "07",
    image: "/assets/work/hugo.png",
    title: "Hugo Template",
    description: "A starter template for Hugo static site generator with TailwindCSS integration and responsive design.",
    stack: ["HTML5", "CSS3", "Hugo", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/AliUsman143/Hugoplate_templete",
  },
  {
    id: "08",
    image: "/assets/work/pinwheel.png",
    title: "Design System Platform",
    description: "A platform offering solutions for scaling design and development operations with enterprise features.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    live: "#",
    github: "https://github.com/AliUsman143/landwind-templete",
  },
  {
    id: "09",
    image: "/assets/work/windland.png",
    title: "Landing Page Template",
    description: "A modern landing page template with responsive design and smooth animations for various use cases.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    live: "#",
    github: "https://github.com/AliUsman143/landwind-templete",
  },
  {
    id: "10",
    image: "/assets/work/brith.png",
    title: "Educational Institute Website",
    description: "A website for an educational institute focusing on science and spirituality with responsive design.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    live: "#",
    github: "https://github.com/AliUsman143/British-Institute",
  }
];

const WorkSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Custom Arrow Components
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 bg-accent text-white rounded-full p-3 hover:bg-green-600 transition-all hidden md:block"
        aria-label="Previous project"
      >
        <FaArrowLeft className="w-5 h-5" />
      </motion.button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 bg-accent text-white rounded-full p-3 hover:bg-green-600 transition-all hidden md:block"
        aria-label="Next project"
      >
        <FaArrowRight className="w-5 h-5" />
      </motion.button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-pulse text-accent">Loading projects...</div>
      </div>
    );
  }

  return (
    <section id="work" className="py-5 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-10"
        >
          My Projects
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 p-4 rounded-xl border border-gray-700"
              >
                <span className="text-accent font-bold text-lg">
                  Project {workData[activeSlide].id}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-2">
                  {workData[activeSlide].title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {workData[activeSlide].description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workData[activeSlide].stack.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-700 text-accent px-4 py-2 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6">
                  {workData[activeSlide].live && (
                    <motion.div whileHover={{ y: -2 }}>
                      <Link
                        href={workData[activeSlide].live}
                        className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                        target="_blank"
                      >
                        <span className="bg-accent text-white p-3 rounded-full">
                          <BsArrowUpRight className="w-5 h-5" />
                        </span>
                        <span>Live Demo</span>
                      </Link>
                    </motion.div>
                  )}
                  {workData[activeSlide].github && (
                    <motion.div whileHover={{ y: -2 }}>
                      <Link
                        href={workData[activeSlide].github}
                        className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                        target="_blank"
                      >
                        <span className="bg-accent text-white p-3 rounded-full">
                          <BsGithub className="w-5 h-5" />
                        </span>
                        <span>View Code</span>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Slider Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 relative"
          >
            <Slider ref={sliderRef} {...settings}>
              {workData.map((item) => (
                <div key={item.id} className="px-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-gray-700"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default WorkSection;