"use client";
import React from "react";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import IconSocial from "../app/components/ui/IconSocial";
import { motion } from "framer-motion";
import Countproject from "../app/components/Countproject";
import Image from "next/image";
import CountUp from "react-countup";

const countpro = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 15,
    text: "Project complete",
  },
  {
    num: 11,
    text: "Technologies masters",
  },
  {
    num: "100+",
    text: "Code commits",
    isString: true // Add this flag for string values
  },
];
const Page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between  ">
          <div className="lg:order-1 order-2">
            <h1>Software Developer</h1>
            <h1 className="text-[40px] font-primary lg:text-[50px] font-semibold leading-[1.1]">
              Hello I'm <br />
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-600 ">
                Muhammad Ali Usman
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a passionate Next.js developer with expertise in building
              fast, scalable, and user-friendly web applications. I specialize
              in crafting seamless UI/UX experiences and optimizing performance
              for modern web solutions.
            </p>

            <div className="lg:flex-row flex-col flex items-center gap-7">
              <a
                href="/assets/files/ali_usman.pdf"
                download="ali_usman.pdf"
                className="border-2 rounded-3xl border-accent capitalize bg-primary text-accent hover:bg-accent hover:text-white hover:scale-105 duration-700 px-4 py-2 flex items-center gap-2"
              >
                Download CV
                <DownloadRoundedIcon className="text-3xl" />
              </a>

              <IconSocial
                containerstyle="flex lg:gap-6 gap-3 lg:mb-0 mb-10"
                iconstyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="lg:order-2 order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
              }}
              className="relative flex items-center justify-center"
            >
              {/* Image */}
              <Image
                src="/assets/ali.png"
                alt="Ali"
                width={350}
                height={350}
                className="lg:w-[350px] lg:h-[350px] w-[300px] h-[300px] mt-10 mb-10 relative z-10 mix-blend-lighten rounded-full shadow-[0_0_40px_10px_rgba(0,0,255,0.3)]"
              />

              {/* Circle SVG */}
              <motion.svg
                className="absolute top-10 inset-0 lg:w-[350px] lg:h-[350px] w-[300px] h-[300px] z-20"
                fill="transparent"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="#00ff99"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: ["120", "360"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <Countproject /> */}
      <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {countpro.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    {item.isString ? (
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                        {item.num}
                      </span>
                    ) : (
                      <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                      />
                    )}
                    <p className="text-sm md:text-base text-center">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    </section>
  );
};

export default Page;
