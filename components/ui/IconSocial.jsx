import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitch } from "react-icons/fa";

const icons = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitch />, path: "" },
];

const IconSocial = ({ containerstyle, iconstyle }) => {
  return (
    <div className={containerstyle}>
      {icons.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconstyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default IconSocial;
