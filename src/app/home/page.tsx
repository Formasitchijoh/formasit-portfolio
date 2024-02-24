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
import { BlogData } from "../utils/data";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { ScrollButton } from "../components/Buttons/viewMore";
import Button from "../components/Buttons/navMenuButton";
import Link from "next/link";

const HomePage = () => {
  const socialIcons = [
    { icon: "/icons/github.png", name: "github" },
    { icon: "/icons/linkedin.png", name: "linkedin" },
    { icon: "/icons/twitter.png", name: "twitter" },
  ];

  const projectImages = ["/construction.PNG", "/home.JPG"];
  const blogImages = ["/course1.jpg", "/course2.jpg", "/cat8.jpg"];
  return (
    <main className=" bg-[#1E1917] md:pb-10 md:px-[3%]">
      <section className="w-full h-[80vh] md:h-[100vh] flex flex-col-reverse justify-center items-center md:flex-row gap-2 ">
        <div
          id="intro-text"
          className=" px-[5%] md:px-0 w-full h-full md:w-1/2 mt-2 hidden  md:flex flex-col  justify-center gap-5 items-start"
        >
          <div>
            <Threelines />
            <p
              className={`text-white pt-4 md:w-3/4 text-[16px] md:text-[24px] font-bold inline-block ${roboto_condensed.className}`}
            >
              I DEVELOPE SUSTAINABLE AND SCALABLE APPLICATIONS, THAT IS USER
              FRIENDLY AND VERY SECURE AND TURN THEM INTO PROFITABLE VENTURES
              THAT THRIVE
            </p>
          </div>

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
            <div className="flex animate-bounce justify-center justify-items-stretch">
              <ScrollButton />
            </div>
          </div>
        </div>
        <div
          id="user"
          className=" w-full md:w-1/2 h-full  md:h-full flex flex-col justify-start mt-5  items-end"
        >
          <div
            className="w-[100%]  relative md:w-[100%] h-[80vh]  sm:h-[100vh] md:h-[85%] bg-no-repeat bg-cover"
            style={{ backgroundImage: "url(/chijoh.jpg)" }}
          >
            <div
              id="mobile-screen"
              className=" px-[5%]  bg-[#1E1917] bg-opacity-50 md:bg-opacity-10  w-full h-full flex flex-col justify-between items-start"
            >
              <p className="inline-block w-[80%]  text-[49px]  text-[#D2BEA5]">
                FRONTEND
              </p>
              <div id="social-icons" className=" md:hidden">
                <div className="flex flex-col justify-end items-center gap-8 pt-2">
                  <FaGithub className=" text-white" width={20} height={20} />
                  <FaLinkedin className=" text-white" width={20} height={20} />
                  <FaTwitter className=" text-white" width={20} height={20} />
                  <div className="flex animate-bounce justify-center justify-items-stretch">
                    <ScrollButton />
                  </div>
                </div>
              </div>
              <div className=" w-full flex justify-end items-end">
                <p className="  md:-ml-[250px] text-[49px] md:text-[64px]  text-[#D2BEA5]">
                  ENGINEER
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-[#7b6e69] py-10  items-center gap-2 flex-col">
        <div className="w-full justify-start  mt-[10%] md:my-0  items-start flex flex-col md:justify-center md:items-center px-[5%]">
          <div className="flex w-full mb-10 place-content-center">
            <h2 className=" text-5xl text-white ">
              <em className="text-[32px] md:text-[64px] text-[#D2BEA5]">#</em> i
              am
            </h2>
          </div>
          <div className="w-full flex place-items-start">
            <Threelines />
          </div>
          <p
            className={`text-white text-[16px] my-5 text-center md:text-[32px] font-bold inline-block ${roboto_condensed.className}`}
          >
            A FULLSTACK SOFTWARE ENGINEER AND MOBILE APP DEVELOPER.WITH A FIRM
            QUEST TO BUILD SOLUTIONS THAT HELP HUMANITY AND BRING HOPE AND FAITH
            TO MANKIND
          </p>

          <div className="w-full flex place-content-end">
            <Threelines />
          </div>
        </div>
        <Link href={"/about"}>
          <Button text="ABOUT ME" />
        </Link>
      </section>

      <Services />

      <div className="w-full mt-[10%] px-5">
        <div className="flex w-full py-10 place-content-center">
          <p className=" text-[32px] md:text-[64px] text-white ">
            <em className="text-[32px] md:text-[64px] text-[#D2BEA5]">#</em> my
            projects
          </p>
        </div>
        <div className="gap-5  grid md:grid-cols-2 ">
          <ProductPage image="construction.PNG" />
          <ProductPage image="home.JPG" />
        </div>
        {/* <div className="flex animate-bounce w-full justify-end items-center py-2 h-[20vh]">
          <ViewMore />
        </div> */}
      </div>
      <section className="w-full mt-[5%] px-5">
        <div className="flex w-full py-3 place-content-center">
          <p className=" md:text-[64px] text-[32px] text-white ">
            <em className="text-[32px] md:text-[64px] text-[#D2BEA5]">#</em> my
            works
          </p>
        </div>
        <div className=" grid md:grid-cols-3 gap-5">
          {BlogData.slice(0, 3).map((blog, index) => (
            <BlogPost
              key={index}
              image={blogImages[index]}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </section>
      <Hobbies />
      <Contact />
    </main>
  );
};

export default HomePage;
