"use clinet";
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
    num: 100,
    text: "Code commits",
  },
];
const Countproject = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80wv] mx-auto lg:max-w-none">
          {countpro.map((item, index) => {
            return (
              <div className="flex-1 flex gap-4 items-center justify-center lg:justify-start" key={index}>
                {" "}
                <CountUp 
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl lg:text-6xl font-extrabold "
                />
                <p  className={`${item.text.length<15? "max-w-[100px]":"max-w-[150px]"}`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Countproject;
