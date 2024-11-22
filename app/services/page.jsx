"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehender",
    href: "",
  },
  {
    num: "02",
    title: "ChatGpt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehender",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehender",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehender",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
          }}
          className="grid grid-col-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => (
            <div key={index} className="mb-8 group">
              {/* Top Section */}
              <div className="flex items-center justify-between mb-4 group">
                <div className="text-4xl font-bold group-hover:text-accent  ">{item.num}</div>
                <Link href={item.href} className="text-white group-hover:text-accent hover:scale-110">
                  <BsArrowDownRight   className="w-11 h-11 border  rounded-full p-2 transition-all duration-1000 group-hover:-rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-primary "/>
                </Link>
              </div>
              {/* Title */}
              <h2 className="text-2xl font-semibold text-white mb-2">
                {item.title}
              </h2>
              {/* Description */}
              <p className="text-white/70 mb-4">{item.description}</p>
              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
