"use client";
import Image from "next/image";
import React, { useState } from "react";
import { roboto } from "@/app/utils/fonts";
import NavMenu from "./NavMenu";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(true);
  };
  return (
    <header className="w-full bg-[#1E1917] py-[1%] px-[5%] relative">
      <nav className="w-full flex justify-between items-center">
        <div className="w-1/4 justify-start items-center flex gap-2">
          <Image
            className="rounded-full "
            width={40}
            height={40}
            alt="logo-image"
            src="/formasit.png"
          />
          <p
            className={` text-[8px] whitespace-nowrap md:text-[12px] text-white ${roboto.className}`}
          >
            FORMASIT CHIJOH .F
          </p>
        </div>
        <button
          onClick={handleShowMenu}
          className="w-1/4flex justify-end items-end pb-2 h-[40px]"
        >
          <div className="  w-[30px] gap-1 flex flex-col justify-center">
            <div className="w-[30px] h-[2px] bg-white"></div>
            <div className="w-[20px] h-[2px] bg-white flex justify-center items-center"></div>
            <div className="w-[30px] h-[2px] bg-white"></div>
          </div>
        </button>
      </nav>
      <hr className="mt-2 hidden md:block" />
      {showMenu && <NavMenu setShowMenu={setShowMenu} />}
    </header>
  );
};

export default NavBar;
