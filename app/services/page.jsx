"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaPenNib, FaSearch } from "react-icons/fa"; // Icons added

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Crafting high-performance, scalable, and responsive websites using the latest technologies.",
    icon: <FaCode className="text-accent text-4xl" />,
    href: "/web-development",
  },
  {
    num: "02",
    title: "AI-Powered Solutions",
    description:
      "Integrating AI tools like ChatGPT to enhance user experience and automate workflows.",
    icon: <FaBrain className="text-accent text-4xl" />,
    href: "/ai-solutions",
  },
  {
    num: "03",
    title: "Branding & Logo Design",
    description:
      "Creating stunning, memorable logos and branding assets for businesses and startups.",
    icon: <FaPenNib className="text-accent text-4xl" />,
    href: "/branding",
  },
  {
    num: "04",
    title: "SEO & Performance Optimization",
    description:
      "Boosting your website’s ranking with advanced SEO techniques and speed optimization.",
    icon: <FaSearch className="text-accent text-4xl" />,
    href: "/seo-optimization",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.8 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="group p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-4xl font-bold text-white">{item.num}</div>
                {item.icon}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent">
                {item.title}
              </h2>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <div className="border-b border-white/20 w-2/3"></div>
                {/* <Link
                  href={item.href}
                  className="text-white hover:text-accent transition-transform transform hover:scale-110"
                >
                  <BsArrowDownRight className="w-10 h-10 border border-gray-600 rounded-full p-2 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-500" />
                </Link> */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
