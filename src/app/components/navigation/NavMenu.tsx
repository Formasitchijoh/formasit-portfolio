import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "../Buttons/navMenuButton";
import { FaCross } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { BiCross } from "react-icons/bi";
import { XMarkIcon } from "@heroicons/react/24/solid";
const NavMenu = ({
  setShowMenu,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuItem = [
    { title: "HOME", link: "/home" },
    { title: "ABOUT", link: "/about" },
    { title: "CONTACT", link: "/contact" },
    { title: "MY WORK", link: "/projects" },
    { title: "BLOG", link: "/blogs" },
  ];
  const handleShowMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="absolute z-50 inset-0 w-[100vw] px-[5%] h-screen bg-[#1E1917]">
      <div
        onClick={handleShowMenu}
        className="w-full h-[20%] flex justify-end items-center"
      >
        <XMarkIcon className="text-white" width={50} height={50} />
      </div>
      <div className=" w-full justify-center items-center flex">
        <ul className=" text-left w-full md:w-1/4 justify-start items-start flex flex-col gap-3">
          {menuItem.map((item, index) => (
            <li
              onClick={handleShowMenu}
              className=" text-[40px] text-white"
              key={index}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
          <Button text="HIRE ME" />
          <Button text="DOWNLOAD CV" icon="true" />
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
