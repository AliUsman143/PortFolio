"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaBrain, FaPenNib, FaSearch } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    num: "01",
    title: "Web Development",
    description: "Crafting high-performance, scalable, and responsive websites using the latest technologies.",
    icon: <FaCode className="text-accent text-4xl" />,
    href: "/web-development",
  },
  {
    id: 2,
    num: "02",
    title: "AI-Powered Solutions",
    description: "Integrating AI tools like ChatGPT to enhance user experience and automate workflows.",
    icon: <FaBrain className="text-accent text-4xl" />,
    href: "/ai-solutions",
  },
  {
    id: 3,
    num: "03",
    title: "Branding & Logo Design",
    description: "Creating stunning, memorable logos and branding assets for businesses and startups.",
    icon: <FaPenNib className="text-accent text-4xl" />,
    href: "/branding",
  },
  {
    id: 4,
    num: "04",
    title: "SEO & Performance Optimization",
    description: "Boosting your website's ranking with advanced SEO techniques and speed optimization.",
    icon: <FaSearch className="text-accent text-4xl" />,
    href: "/seo-optimization",
  },
];

const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] bg-gray-900">
        <div className="animate-pulse text-accent">Loading services...</div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex flex-col justify-center py-10 lg:py-0 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -5 }}
                className="group p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-white">{service.num}</span>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-5">{service.description}</p>
                <div className="border-t border-gray-700 pt-4">
                  <motion.div 
                    className="w-full h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesPage;