"use client";
import React from "react";
import NavBar from "../components/navigation/NavBar";
import { roboto, roboto_condensed } from "../utils/fonts";
import Image from "next/image";
import Threelines from "../components/threeline/Threelines";
import Services from "../components/homeComponents/services";
import ProductPage from "../components/products/product";
import Hobbies from "../components/hobby/hobbies";
import Contact from "../components/contact/contact";
import { TypeAnimation } from "react-type-animation";
import ViewMore from "../components/Buttons/viewMore";
import BlogPost from "../components/blog/blog";
const HomePage = () => {
  const socialIcons = [
    { icon: "/icons/github.png", name: "github" },
    { icon: "/icons/linkedin.png", name: "linkedin" },
    { icon: "/icons/twitter.png", name: "twitter" },
  ];

  const projectImages = ["/construction.PNG", "/home.JPG"];
  const blogImages = ["/course1.jpg", "/course2.jpg", "/cat8.jpg"];
  return (
    <main className=" bg-[#1E1917] md:pb-10 md:px-[5%]">
      <section className="w-full h-[80vh] md:h-[100vh] flex flex-col-reverse justify-center items-center md:flex-row gap-2 ">
        <div
          id="intro-text"
          className=" px-[5%] md:px-0 w-full h-full md:w-1/2 mt-2 hidden  md:flex flex-col  justify-center gap-5 items-start"
        >
          <Threelines />
          <p
            className={`text-white md:w-3/4 text-[16px] md:text-[24px] font-bold inline-block ${roboto_condensed.className}`}
          >
            I DEVELOPE SUSTAINABLE AND SCALABLE APPLICATIONS, THAT IS USER
            FRIENDLY AND VERY SECURE AND TURN THEM INTO PROFITABLE VENTURES THAT
            THRIVE
          </p>
          <div
            id="social-icons"
            className=" hidden md:flex  flex-col h-1/2 justify-center items-center gap-10"
          >
            {socialIcons.map((socialIcon, index) => (
              <Image
                key={index}
                src={socialIcon.icon}
                alt={socialIcon.name}
                width={30}
                height={30}
              />
            ))}
          </div>
        </div>
        <div
          id="user"
          className=" w-full md:w-1/2 h-full  md:h-full flex flex-col justify-start mt-20 items-end"
        >
          <p className=" hidden md:inline-block w-[80%] justify-start -mb-[50%] absolute md:relative md:-mb-0  items-start text-[49px] md:text-[64px] text-[#D2BEA5]">
            FRONTEND
          </p>
          <div
            className="w-[100%]  relative md:w-[100%] h-[80vh]  sm:h-[100vh] md:h-full bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(/formasit.png)" }}
          >
            <div
              id="mobile-screen"
              className=" px-[5%]  bg-[#1E1917] bg-opacity-50 md:bg-opacity-10 md:hidden w-full h-full flex flex-col justify-between items-start"
            >
              <p className="inline-block w-[80%]  text-[49px]  text-[#D2BEA5]">
                FRONTEND
              </p>
              <div
                id="social-icons"
                className="flex flex-col justify-around items-center gap-5"
              >
                {socialIcons.map((socialIcon, index) => (
                  <Image
                    key={index}
                    src={socialIcon.icon}
                    alt={socialIcon.name}
                    width={30}
                    height={30}
                  />
                ))}
              </div>
              <div className=" w-full flex justify-end items-end">
                <p className="  md:-ml-[250px] text-[49px] md:text-[64px]  text-[#D2BEA5]">
                  ENGINEER
                </p>
              </div>
            </div>
          </div>

          <div className=" hidden  w-full md:flex h-1/4  justify-start  items-start">
            <p className="justify-start items-start md:-ml-[150px] text-[49px] md:text-[64px]  text-[#D2BEA5]">
              ENGINEER
            </p>
          </div>
        </div>
      </section>

      <section className="w-full pb-[40%] pt-[40%] md:pt-[20%] justify-start  items-start flex flex-col md:justify-center md:items-center px-[5%]">
        <div className="flex w-full mb-10  place-content-center">
          <h2 className=" text-[64px] text-white ">I AM</h2>
        </div>
        <div className="w-full flex place-items-start">
          <Threelines />
        </div>
        <p
          className={`text-white text-[16px] my-5 text-center md:text-[32px] font-bold inline-block ${roboto_condensed.className}`}
        >
          A FULLSTACK SOFTWARE ENGINEER AND MOBILE APP DEVELOPER.A FULLSTACK
          SOFTWARE ENGINEER AND MOBILE APP DEVELOPER A FULLSTACK SOFTWARE
          ENGINEER AND MOBILE APP DEVELOPER
        </p>

        <div className="w-full flex place-content-end">
          <Threelines />
        </div>
      </section>

      <Services />

      <div className="w-full mt-[10%] px-5">
        <div className="flex w-full py-10 place-content-center">
          <p className=" text-[64px] text-white ">MY WORK</p>
        </div>
        <div className="gap-5  grid md:grid-cols-2 ">
          <ProductPage image="construction.PNG" />
          <ProductPage image="home.JPG" />
        </div>
        <div className="flex animate-bounce w-full justify-end items-center py-2 h-[20vh]">
          <ViewMore />
        </div>
      </div>
      <section className="w-full mt-[5%] px-5">
        <div className="flex w-full py-3 place-content-center">
          <p className=" text-[64px] text-white ">INTERESTS</p>
        </div>
        <div className=" grid md:grid-cols-3 gap-5">
          {blogImages.map((image, index) => (
            <BlogPost image={image} key={index} />
          ))}
        </div>
      </section>
      <Hobbies />
      <Contact />
    </main>
  );
};

export default HomePage;
