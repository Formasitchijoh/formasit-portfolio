import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ProjectEntity } from "@/app/utils/entities";
import { roboto } from "@/app/utils/fonts";
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

export const Project = (project: ProjectEntity) => {
  return (
    <div
      className="p-5  h-[50vh] md:h-[80vh] group relative bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(/${project.image})`,
      }}
    >
      <div className="overlay  absolute top-0 left-0 h-full w-full bg-[#1E1917] bg-opacity-90 hidden  group-hover:flex group-hover:flex-col  group-hover:bg-opacity-80 transition-all duration-500">
        <div className="flex h-15 w-full  justify-end items-end py-5 px-[2%] gap-2">
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
        <div className=" h-[75%] w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center h-[25vh] w-3/4 md:w-2/3">
            <h3
              className={`group-hover/link:text-[#1E1917]  ${roboto.className} text-[#D2BEA5] hover:text-[#1E1917] text-[16px] md:text-[24px]`}
            >
              {project.title}
            </h3>
            <p
              className={`text-white text-justify py-2 text-[12px] md:text-[16px] ${roboto.className}`}
            >
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
