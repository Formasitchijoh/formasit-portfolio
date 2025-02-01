"use client";

import Image from "next/image";
import React, { useState } from "react";
import { roboto } from "@/app/utils/fonts";
import NavMenu from "./NavMenu";
import Link from "next/link";
import Button from "../Buttons/navMenuButton";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const pathname = usePathname(); // Get current route

  const menuItem = [
    { title: "Home", link: "/home" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Project", link: "/projects" },
    { title: "Blog", link: "/blogs" },
  ];

  return (
    <header className="w-full bg-[#1E1917] py-[1%] px-[2%]  sticky top-0 z-50">
      <nav className="w-full flex justify-between items-center">
        <Link
          className="w-[20%] hidden justify-start items-center md:flex gap-2"
          href={"/"}
        >
          <Image
            className="rounded-full "
            width={40}
            height={40}
            alt="logo-image"
            src="/formasit.png"
          />
          <p
            className={`text-[8px] whitespace-nowrap md:text-[12px] text-white ${roboto.className}`}
          >
            Formasit Chijoh .F
          </p>
        </Link>
        <div className="lg:hidden flex gap-4 justify-start items-center">
          <Button text="Hire Me" />
          <Button text="DownLoad CV" icon="true" isDownload />
        </div>
        <button
          onClick={handleShowMenu}
          className="w-1/4 flex lg:hidden justify-end items-end pb-2 h-[40px]"
        >
          <div className="  w-[30px] gap-1 flex flex-col justify-center">
            <div className="w-[30px] h-[2px] bg-white"></div>
            <div className="w-[20px] h-[2px] bg-white flex justify-center items-center"></div>
            <div className="w-[30px] h-[2px] bg-white"></div>
          </div>
        </button>
        <div className="hidden lg:flex w-[80%] justify-between items-center">
          <ul className="w-[70%] justify-center items-center flex gap-8 lg:gap-10">
            {menuItem.map((item, index) => {
               const isActive = pathname === item.link;
                return (
                <li
                  className="text-[14px] lg:text-[16px] text-white relative group"
                  key={index}
                >
                  <Link href={item.link}>{item.title}</Link>
                  <span
                    className={`absolute bottom-0 left-0 block rounded-sm h-1 bg-primary transition-all 
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </li>
              );
            })}
          </ul>

          <div className="w-[30%] hidden lg:flex gap-4 justify-end items-center">
            <Button text="Hire Me" />
            <Button text="DownLoad CV" icon="true" isDownload />
          </div>
        </div>
      </nav>
      {showMenu && <NavMenu setShowMenu={setShowMenu} />}
    </header>
  );
};

export default NavBar;
