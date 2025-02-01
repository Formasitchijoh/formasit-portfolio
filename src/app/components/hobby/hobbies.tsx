import React from "react";
import { roboto } from "@/app/utils/fonts";
import { BiLaptop } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import styles from "./styles.module.css";

const Hobbies = () => {
  const marqueeItems = (
    <>
      <div className="flex justify-center items-center mx-32">
        <BiLaptop className="text-[#1E1917] text-2xl md:text-5xl" />
        <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
          CODE
        </h2>
      </div>
      <div className="flex justify-center items-center mx-32">
        <FaRunning className="text-[#1E1917] text-2xl md:text-5xl" />
        <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
          RUN
        </h2>
      </div>
      <div className="flex justify-center items-center mx-32">
        <GiCook className="text-[#1E1917] text-2xl md:text-5xl" />
        <h2 className={`text-white text-[32px] md:text-[64px] ${roboto}`}>
          COOK
        </h2>
      </div>
    </>
  );

  return (
    <section className="bg-[#7b6e69] w-full md:my-[10%] px-[5%] mb-10">
      <div className="flex w-[90%] pt-10 justify-center">
        <p className={`text-[#1E1917] text-[24px] md:text-[32px] ${roboto}`}>
          WHEN ITS NOT WORK OCLOCK
        </p>
      </div>
      <div className={`${styles.marquee} py-10`}>
        <div className={styles.marqueeContent}>
          {/* Render the items twice for a seamless loop */}
          {marqueeItems}
          {marqueeItems}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
