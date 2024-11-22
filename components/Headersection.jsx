"use client"
import React from "react";
import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import SwipeableTemporaryDrawer from "./MobileNav";
import Button from "./ui/button";
import { AlignCenter } from "lucide-react";
const Headersection = () => {
  return (
    <header className="py-8 xl:py-10 text-white ">
      <div className="container mx-auto  flex justify-between items-center">
        {/* logo  */}
        <Link href="/">
          <h1 className="md:text-4xl sm:text-3xl  text-2xl font-semibold">
            M.Ali Usman<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop navbar */}

        <div className="lg:flex hidden  items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button text="Hire me" style={{ fontSize: "12px", fontWeight: "bold" }} className="border-2 border-accent  bg-primary text-accent hover:bg-accent hover:text-white hover:scale-105 duration-700 "/>
          </Link>
        </div>

        {/* mobile nav  */}
        <div className="lg:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Headersection;
