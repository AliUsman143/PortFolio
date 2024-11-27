"use client";
import React from "react";

const Button = ({ text, style, className,children }) => {
  return (
    <button
      style={style}
      className={`rounded-full items-center justify-center  px-4 py-1 ${className}`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
