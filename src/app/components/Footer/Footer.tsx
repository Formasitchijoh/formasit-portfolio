import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" py-[2%] bg-[#1E1917] p-[1%] flex flex-col">
      <div className=" flex w-[50%] justify-between items-start gap-10">
        <p className="text-white text-[20px]">formasitf@gmail.com</p>
        <p className="text-[20px] text-[#D2BEA5]">My Blog</p>
      </div>
      <hr className="w-full h-[1px]" />
      <div className="flex justify-end items-center gap-2 pt-2">
        <Image src="/icons/github.png" alt="github" width={30} height={30} />
        <Image
          src="/icons/linkedin.png"
          alt="linkedin"
          width={40}
          height={40}
        />
        <Image src="/icons/twitter.png" alt="twitter" width={40} height={40} />
      </div>
    </footer>
  );
};

export default Footer;
