'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { roboto, roboto_condensed } from "../../utils/fonts";
import styles from "./project.module.css";
import { Todo } from "../../utils/Schema";

const Project = () => {

  return (
    <div className="bg-[#1E1917] text-white">
      {/* Header Section */}
      <div className="w-full bg-[#D2BEB5] h-[25vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-[32px] font-bold">Construction Marketplace</h1>
        <h2 className="text-[24px] text-[#1E1917] font-medium">Client: Tech Chantier</h2>
      </div>

      {/* Project Details Section */}
      <div className=" w-[80%] lg:w-[60%] mx-auto py-8">
        <h2 className={`text-[32px] ${roboto_condensed.className} py-5 font-semibold`}>Introduction</h2>
        <p className={`text-[14px] ${roboto.className} text-justify`}>
          Welcome to the Construction Marketplace, a revolutionary platform that centralizes construction materials, 
          architectural plans, and skilled contractors in one marketplace. The goal is to simplify the construction process, 
          enabling users to find everything they need in one place.
        </p>

        <h3 className={`text-[28px] ${roboto_condensed.className} py-5 font-semibold`}>Problem Statement</h3>
        <p className={`text-[14px] ${roboto.className} text-justify`}>
          The construction industry faces challenges such as fragmented markets, difficulty in sourcing materials, 
          and lack of reliable architectural plans. This project addresses these pain points by providing a unified 
          platform where users can seamlessly plan and execute their projects.
        </p>

        <h3 className={`text-[28px] ${roboto_condensed.className} py-5 font-semibold`}>Approach & Methodology</h3>
        <p className={`text-[14px] ${roboto.className} text-justify`}>
          Our approach involves leveraging modern technologies: 
          <strong>Node.js</strong> for the backend, <strong>React & Next.js</strong> for the frontend, 
          <strong>Tailwind</strong> for styling, and <strong>Redux</strong> for state management. The platform 
          focuses on an intuitive user experience, reliability, and an extensive selection of offerings.
        </p>

        {/* Key Features Section */}
        <h3 className={`text-[28px] ${roboto_condensed.className} py-5 font-semibold`}>Key Features</h3>
        <ul className="w-[95%] mx-auto list-disc pl-6 space-y-4">
          {[
            { title: "Materials Marketplace", desc: "Browse and purchase construction materials from verified suppliers." },
            { title: "Architectural Plans Library", desc: "Access a vast library of architectural plans for various constructions." },
            { title: "Contractor Connection", desc: "Find and connect with skilled contractors with verified profiles." },
            { title: "Project Collaboration", desc: "Track project progress and communicate effectively with teams." },
            { title: "Tailored Recommendations", desc: "Receive AI-driven recommendations based on your project needs." },
            { title: "Integrated Budgeting", desc: "Plan, manage, and track construction expenses efficiently." },
          ].map((feature, index) => (
            <li key={index}>
              <h4 className={`text-[20px] ${roboto_condensed.className} font-medium`}>{feature.title}</h4>
              <p className={`text-[14px] ${roboto.className} text-justify`}>{feature.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Carousel */}
      <div className="w-[80%] lg:w-[60%] mx-auto py-8">
        <h3 className={`text-[28px] ${roboto_condensed.className} py-5 font-semibold text-center`}>Gallery</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {["/a.jpg", "/b.jpg", "/c.jpg"].map((src, index) => (
            <div key={index} className="min-w-[150px] h-[150px]">
              <Image src={src} height={150} width={150} alt={`Project image ${index + 1}`} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
