import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type ProjectType = {
  image: string;
};

const ProductPage = ({ image }: ProjectType) => {
  return (
    <div
      className="p-5 h-[25vh] md:h-[50vh] group relative bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(/${image})`,
      }}
    >
      <div className="overlay  items-center justify-center absolute top-0 left-0 h-full w-full bg-[#1E1917] bg-opacity-80 hidden  group-hover:flex  group-hover:bg-opacity-80 transition-all duration-500">
        <Link
          href={"#"}
          className="md:h-14 md:w-14 h-8 w-8 mr-2 border-2 relative flex justify-center items-center rounded-full border-[#ADB7BE] hover:border-white"
        >
          <CodeBracketIcon className="md:h-10 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-10 w-5 text-[#ADB7BE] cursor-pointer" />
        </Link>
        <Link
          href={"#"}
          className="md:h-14 md:w-14 h-8 w-8 mr-2 border-2 relative flex justify-center items-center rounded-full border-[#ADB7BE] hover:border-white"
        >
          <EyeIcon className="md:h-10 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-10 w-5 text-[#ADB7BE] cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
