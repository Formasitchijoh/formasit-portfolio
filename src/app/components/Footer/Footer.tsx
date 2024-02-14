import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" py-[20%] md:py-[10%] bg-[#1E1917] p-[1%] flex flex-col">
      <hr className="w-full h-[1px] bg-[#D2BEA5]" />

      <div className=" flex full justify-between items-start px-2 gap-10">
        <p className="text-white text-[12px] md:text-[16px]">
          formasitf@gmail.com
        </p>
        <p className="text-[12px] whitespace-nowrap md:text-[16px] text-[#D2BEA5]">
          My Blog
        </p>
        <div className="flex justify-end items-center gap-2 pt-2">
          <FaGithub className=" text-white" width={20} height={20} />
          <FaLinkedin className=" text-white" width={20} height={20} />
          <FaTwitter className=" text-white" width={20} height={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
