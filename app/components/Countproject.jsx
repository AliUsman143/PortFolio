"use client";
import React from "react";
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

const Countproject = () => {
  return (
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
  );
};

export default Countproject;