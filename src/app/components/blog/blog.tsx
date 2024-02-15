import React from "react";
import { roboto } from "@/app/utils/fonts";
import Image from "next/image";
import {
  ArrowRightIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";

type BlogEntity = {
  image: string;
};
const BlogPost = ({ image }: { image: string }) => {
  return (
    <main
      className={`bg-[#8a756c] rounded-tr-2xl rounded-bl-2xl group/link hover:bg-[#b6aaa5] ${roboto.className} flex flex-col  bg-opacity-30 p-[2%]`}
    >
      <div
        className="p-5 h-[25vh] md:h-[50vh] group relative bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <h1 className="text-[16px] group-hover/link:text-[#1E1917] text-white pt-2">
        Getting into Tech
      </h1>
      <p className="text-[10px] group-hover/link:text-[#1E1917] py-2 text-white ">
        The introduction of Hooks made it easy for developers to add
        statefulness without needing a container component to provide that state
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
              className={` text-[8px] group-hover/link:text-[#1E1917] whitespace-nowrap md:text-[8px] text-white ${roboto.className}`}
            >
              FORMASIT CHIJOH .F
            </li>
            <li
              className={` text-[5px] group-hover/link:text-[#1E1917] whitespace-nowrap md:text-[5] text-white ${roboto.className}`}
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
