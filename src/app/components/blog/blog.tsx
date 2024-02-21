import React from "react";
import { roboto } from "@/app/utils/fonts";
import Image from "next/image";
import {
  ArrowRightIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";

type BlogEntity = {
  image: string;
  title?: string;
  description?: string;
};
const BlogPost = ({ image, title, description }: BlogEntity) => {
  return (
    <main
      className={`bg-[#4a4a4a] group-hover/link:transition-all group-hover/link:duration-700 rounded-tr-2xl rounded-bl-2xl group/link hover:bg-[#b6aaa5] ${roboto.className} flex flex-col  bg-opacity-30 p-[2%]`}
    >
      <div
        className="p-5 h-[25vh] md:h-[50vh] group relative bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <h2 className=" text-sm md:text-md  group-hover/link:text-[#1E1917] font-bold text-[#D2BEA5] pt-2">
        {title}
      </h2>
      <p className="text-xs group-hover/link:text-[#1E1917] py-3 text-white ">
        {description}
      </p>
      <hr className="bg-[#D2BEB5] " />
      <div className="flex justify-between items-center py-2 w-full  ">
        <button className="bg-[#D87C4F]  flex justify-center items-center gap-4 p-[2%] rounded-xl">
          <p className="text-white  text-[10px] group-hover/link:text-[#1E1917]">
            LearnMore
          </p>
          <ArrowRightIcon
            width={20}
            height={20}
            className="text-[#1E1917] group-hover/link:text-white"
          />
        </button>
        <div className="justify-start items-center flex gap-2">
          <Image
            className="rounded-full "
            width={20}
            height={20}
            alt="logo-image"
            src="/formasit.png"
          />
          <ul>
            <li
              className={` text-xs md:text-md  group-hover/link:text-[#1E1917] whitespace-nowrap md:text-[8px] text-white ${roboto.className}`}
            >
              Formasit Chijoh
            </li>
            <li
              className={` text-[10px] group-hover/link:text-[#1E1917] whitespace-nowrap md:text-[5] text-white ${roboto.className}`}
            >
              Software Engineer
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
