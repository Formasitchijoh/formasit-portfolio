"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import { roboto } from "../utils/fonts";
import { BsSquareFill } from "react-icons/bs";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { BiChevronDown } from "react-icons/bi";
import { TechnologyTag } from "../components/tag/blogTag";
const About = () => {
  const [showSkills, setShowSkills] = useState(false);
  return (
    <main className="w-[100vw] bg-[#1E1917] ">
      <div className="w-[100vw] bg-[#1E1917] pt-10 h-[100vh]">
        <div className=" md:flex md:w-[90%] mx-auto  h-2/3  gap-20 ">
          <div
            className="skew-y-6 md:w-[50%] h-full bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(/forma2.jpeg)" }}
          ></div>
          <div
            className=" skew-y-6 md:w-[50%] h-full bg-cove bg-no-repeat"
            style={{ backgroundImage: "url(/chijoh.jpg)" }}
          ></div>
        </div>
        <div className="md:flex justify-center skew-y-6 items-center md:w-1/2 mx-auto  h-full -mt-[25%] ">
          <div
            className=" w-[50%] h-[50vh] bg-contain bg-no-repeat"
            style={{ backgroundImage: "url(/forma1.jpg)" }}
          ></div>
        </div>
      </div>

      <section className="w-[90%] mx-auto">
        <div className="flex w-[80%] mx-auto place-content-start py-5">
          <h2 className=" text-5xl text-white ">
            <em className="text-[32px] md:text-[64px] text-[#D2BEA5]">#</em>{" "}
            formasit chijoh
          </h2>
        </div>
        <div className="w-[80%] text-white mx-auto py-10 flex">
          <div className="w-1/2 flex justify-start items-start gap-2">
            <h2 className="text-2xl text-[#D2BEA5]">
              A creative and dedicated <br /> software developer
            </h2>
          </div>

          <div className="w-1/2">
            <p className={`md:text-sm  text-xs text-left ${roboto.className}`}>
              I believe in making a meaningful impact is what fuels my
              enthusiaxs for software development. I believe in the power of
              well-designed software to transform the way we work, connect, and
              experience the world
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="">
        <div className="flex w-[80%] mx-auto place-content-center py-10">
          <h2 className=" text-5xl text-white ">
            <em className="text-[32px] md:text-[64px] text-[#D2BEA5]">#</em> my
            skills
          </h2>
        </div>
        <div className="w-[80vw] flex flex-col mx-auto">
          {/* language */}
          <hr className="w-full bg-[#D2BEA5] transition-all ease-in-out duration-1000" />
          <div
            onClick={() => setShowSkills(!showSkills)}
            className="w-[90%] py-10 text-white mx-auto flex"
          >
            <div
              id="language"
              className="w-1/2 flex justify-start items-start gap-2"
            >
              <span>Language</span>
              <span>
                <BiChevronDown className="text-white w-5" />
              </span>
            </div>
            {showSkills && (
              <div id="items" className="w-1/2 grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <div
                    id="language-name"
                    className="w-1/2 flex justify-start items-start gap-2"
                  >
                    <span>
                      <BsSquareFill className="text-[#D2BEA5] w-5" />
                    </span>
                    <span className={`text-md ${roboto.className}`}>Java</span>
                  </div>
                  <p className={`text-xs  text-left ${roboto.className}`}>
                    make a meaningful impact is what fuels my enthusiaxs for
                    software development. I believe in the power of
                    well-designed software to transform the way we work,
                    connect, and experience the world
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    id="language-name"
                    className="w-1/2 flex justify-start items-start gap-2"
                  >
                    <span>
                      <BsSquareFill className="text-[#D2BEA5] w-5" />
                    </span>
                    <span className={`text-md ${roboto.className}`}>
                      JavaScript
                    </span>
                  </div>
                  <p className={`text-xs text-left ${roboto.className}`}>
                    make a meaningful impact is what fuels my enthusiaxs for
                    software development. I believe in the power of
                    well-designed software to transform the way we work,
                    connect, and experience the world
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    id="language-name"
                    className="w-1/2 flex justify-start items-start gap-2"
                  >
                    <span>
                      <BsSquareFill className="text-[#D2BEA5] w-5" />
                    </span>
                    <span className={`text-md ${roboto.className}`}>
                      TypeScript
                    </span>
                  </div>
                  <p className={`text-xs  text-left ${roboto.className}`}>
                    make a meaningful impact is what fuels my enthusiaxs for
                    software development. I believe in the power of
                    well-designed software to transform the way we work,
                    connect, and experience the world
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="w-full bg-[#D2BEA5]" />

          {/* frameworks */}
          <div
            onClick={() => setShowSkills(!showSkills)}
            className="w-[90%] py-10 text-white mx-auto flex"
          >
            <div
              id="language"
              className="w-1/2 flex justify-start items-start gap-2"
            >
              <span>Technologies</span>
              <span>
                <BiChevronDown className="text-white w-5" />
              </span>
            </div>
            {showSkills && (
              <div id="items" className="w-1/2 grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <div
                    id="language-name"
                    className="w-1/2 flex justify-start items-start gap-2"
                  >
                    <span>
                      <BsSquareFill className="text-[#D2BEA5] w-5" />
                    </span>
                    <span className={`text-md ${roboto.className}`}>React</span>
                  </div>
                  <p className={`text-xs  text-left ${roboto.className}`}>
                    make a meaningful impact is what fuels my enthusiaxs for
                    software development. I believe in the power of
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    id="language-name"
                    className="w-1/2 flex justify-start items-start gap-2"
                  >
                    <span>
                      <BsSquareFill className="text-[#D2BEA5] w-5" />
                    </span>
                    <span className={`text-md ${roboto.className}`}>
                      React Native
                    </span>
                  </div>
                  <p className={`text-xs text-left ${roboto.className}`}>
                    make a meaningful impact is what fuels my enthusiaxs for
                    software development. and experience the world
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    id="language-name"
                    className="w-1/2 flex justify-start items-start gap-2"
                  >
                    <span>
                      <BsSquareFill className="text-[#D2BEA5] w-5" />
                    </span>
                    <span className={`text-md ${roboto.className}`}>
                      Express
                    </span>
                  </div>
                  <p className={`text-xs  text-left ${roboto.className}`}>
                    I believe in the power of well-designed software to
                    transform the way we work, connect, and experience the world
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="w-full bg-[#D2BEA5]" />

          {/* Databases */}
          <div
            onClick={() => setShowSkills(!showSkills)}
            className="w-[90%] py-10 text-white mx-auto flex"
          >
            <div
              id="language"
              className="w-1/2 flex justify-start items-start gap-2"
            >
              <span>Databases</span>
              <span>
                <BiChevronDown className="text-white w-5" />
              </span>
            </div>
            {showSkills && (
              <div id="items" className="w-1/2 grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <div
                    id="language-name"
                    className="w-1/2 flex justify-start items-start gap-2"
                  >
                    <span>
                      <BsSquareFill className="text-[#D2BEA5] w-5" />
                    </span>
                    <span className={`text-md ${roboto.className}`}>
                      PostgresSql
                    </span>
                  </div>
                  <p className={`text-xs  text-left ${roboto.className}`}>
                    make a meaningful impact is what fuels my enthusiaxs for
                    software development. I believe in the power of
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    id="language-name"
                    className="w-1/2 flex justify-start items-start gap-2"
                  >
                    <span>
                      <BsSquareFill className="text-[#D2BEA5] w-5" />
                    </span>
                    <span className={`text-md ${roboto.className}`}>
                      MongoDB
                    </span>
                  </div>
                  <p className={`text-xs text-left ${roboto.className}`}>
                    make a meaningful impact is what fuels my enthusiaxs for
                    software development. and experience the world
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="w-full bg-[#D2BEA5]" />
        </div>
      </section>

      <section className="py-10" id="Work Experience">
        <div className="flex w-full place-content-center py-5">
          <h2 className=" text-5xl text-white ">
            <em className="text-[32px] md:text-[64px] text-[#D2BEA5]">#</em> my
            experience
          </h2>
        </div>
        <div className="flex flex-col w-[100%] md:w-[80%] mx-auto">
          <div className="flex px-5 md:w-[80%] mx-auto gap-5 my-10">
            <div className=" flex flex-col gap-2 md:justify-center w-1/4 md:w-1/2 md:items-center">
              <div className=" flex gap-2 justify-center w-full items-center">
                <h2 className=" text-[#D2BEA5]">1/3/2023 - 3/5/2023</h2>
                <ArrowRightIcon className="w-20 text-[#D2BEA5] hidden md:flex  h-10" />
              </div>
              <div className=" flex gap-2 justify-center w-full items-center">
                <h2 className=" text-white">5months</h2>
              </div>
            </div>
            <div className=" flex flex-col gap-2  w-3/4 md:w-1/2">
              <div
                id="language-name"
                className="w-1/2 flex justify-start text-white items-start gap-2"
              >
                <span
                  className={`text-md whitespace-nowrap ${roboto.className}`}
                >
                  Tech Chantier
                </span>
              </div>
              <p
                className={`text-[10px] md:text-xs text-white text-left ${roboto.className}`}
              >
                make a meaningful impact is what fuels my enthusiaxs for
                software development. I believe in the power of well-designed
                software to transform the way we work, connect, and experience
                the world
              </p>
              <div className="flex w-full place-content-start">
                <h2 className=" text-md text-[#D2BEA5] ">
                  <em className="text-[32px] md:text-lg text-[#D2BEA5]">#</em>{" "}
                  technologies
                </h2>
              </div>
              <div className="flex-wrap place-items-center gap-2">
                <TechnologyTag tag="React" />
                <TechnologyTag tag="React Native" />
                <TechnologyTag tag="Next Js" />
                <TechnologyTag tag="Express" />
              </div>
            </div>
          </div>
          <div className="flex px-5 md:w-[80%] mx-auto gap-5 my-10">
            <div className=" flex flex-col gap-2 md:justify-center w-1/4 md:w-1/2 md:items-center">
              <div className=" flex gap-2 justify-center w-full items-center">
                <h2 className=" text-[#D2BEA5]">1/3/2023 - 3/5/2023</h2>
                <ArrowRightIcon className="w-20 text-[#D2BEA5] hidden md:flex  h-10" />
              </div>
              <div className=" flex gap-2 justify-center w-full items-center">
                <h2 className=" text-white">5months</h2>
              </div>
            </div>
            <div className=" flex flex-col gap-2  w-3/4 md:w-1/2">
              <div
                id="language-name"
                className="w-1/2 flex justify-start text-white items-start gap-2"
              >
                <span
                  className={`text-md whitespace-nowrap ${roboto.className}`}
                >
                  Digital Renter
                </span>
              </div>
              <p
                className={`text-[10px] md:text-xs text-white text-left ${roboto.className}`}
              >
                make a meaningful impact is what fuels my enthusiaxs for
                software development. I believe in the power of well-designed
                software to transform the way we work, connect, and experience
                the world
              </p>
              <div className="flex w-full place-content-start">
                <h2 className=" text-md text-[#D2BEA5] ">
                  <em className="text-[32px] md:text-lg text-[#D2BEA5]">#</em>{" "}
                  technologies
                </h2>
              </div>
              <div className="flex-wrap place-items-center gap-2">
                <TechnologyTag tag="React" />
                <TechnologyTag tag="React Native" />
                <TechnologyTag tag="Next Js" />
                <TechnologyTag tag="Express" />
              </div>
            </div>
          </div>

          {/* <hr className="w-full bg-[#D2BEA5]" /> */}
        </div>
      </section>
    </main>
  );
};

export default About;
