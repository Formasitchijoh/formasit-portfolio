/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { roboto } from "@/app/utils/fonts";
import { BiLaptop } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import styles from "./styles.module.css";

const Hobbies = () => {
  return (
    <section className="bg-[#7b6e69] w-full md:my-[10%] px-[5%] mb-10">
      <div className="flex w-[90%] pt-10 place-content-center">
        <p className={`text-[#1E1917] text-[24px] md:text-[32px] ${roboto}`}>
          WHEN IT'S NOT WORK O'CLOCK
        </p>
      </div>
      <div className={`${styles.marquee} py-10`}>
        <div className={styles.marqueeContent}>
          <div className="flex justify-center items-center">
            <BiLaptop className="text-[#1E1917] text-2xl md:text-5xl" />
            <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
              CODE
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <FaRunning className="text-[#1E1917] text-2xl md:text-5xl" />
            <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
              RUN
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <GiCook className="text-[#1E1917] text-2xl md:text-5xl" />
            <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
              COOK
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
