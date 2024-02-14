import React from "react";
import { roboto } from "@/app/utils/fonts";
import { Roboto } from "next/font/google";
const Hobbies = () => {
  return (
    <section className="bg-[#D2BEB5] w-full md:my-[10%]  px-[5%] mb-10">
      <div className="flex w-[90%] pt-10 place-content-center">
        <p className={`text-[#1E1917] text-[24px] md:text-[32px]  ${roboto}`}>
          WHEN ITS NOT WORK OCLOCK
        </p>
      </div>
      <div className=" flex flex-col  justify-start items-start md:flex-row md:mx-auto w-[90%] py-10 md:justify-between md:items-center">
        <div className="flex gap-2 justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[rgb(30,25,23)]"></div>
          <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
            CODE
          </h2>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#1E1917]"></div>
          <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
            RUN
          </h2>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#1E1917]"></div>
          <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
            COOK
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
