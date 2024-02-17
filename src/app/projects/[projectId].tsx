import React from "react";
import { ProjectEntity } from "../utils/entities";
import { roboto, roboto_condensed } from "../utils/fonts";
import ProductPage from "../components/products/product";
import { projects } from "../utils/data";
import { Todo } from "../utils/Schema";
import Image from "next/image";
import styles from "./project.module.css";
const Project = () => {
  const todo = Todo.find();
  console.log(todo);

  return (
    <div className="bg-[#1E1917] text-white">
      <div className="w-100 bg-[#D2BEB5] h-[25vh] flex flex-col justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-[32px]">Construction Marketplace</h1>
          <h2 className="text-24px">
            <span className="text-[24px] text-[#1E1917]">Client:</span>
            Tech Chantier
          </h2>
        </div>
      </div>
      <div className="flex flex-col w-[80%] mx-auto">
        <h2 className={`text-[32px] ${roboto_condensed.className} py-5`}>
          Introduction
        </h2>
        <p className={`text-[12px] ${roboto.className} py-1 text-justify`}>
          Welcome to the Construction Marketplace, a revolutionary platform that
          brings together the world of construction materials, architectural
          plans, and skilled contractors in one convenient marketplace. Our goal
          is to simplify the construction process, making it easy for users to
          find everything they need for their construction projects in one place
        </p>
        <h3 className={`text-[32px] ${roboto_condensed.className} py-5`}>
          Problem Statement
        </h3>
        <p className={`text-[12px] ${roboto.className} py-1 text-justify`}>
          The construction industry often faces challenges such as fragmented
          markets, difficulty in finding specific construction materials, lack
          of reliable architectural plans, and the need to connect with
          trustworthy contractors. Construction Marketplace Name addresses these
          pain points by providing a unified platform where users can seamlessly
          discover, plan, and execute their construction projectsZ
        </p>
        <h3 className={`text-[32px] ${roboto_condensed.className} py-5`}>
          Approach/Methodology
        </h3>
        <p className={`text-[12px] ${roboto.className} py-1 text-justify`}>
          Approach and Methodology: Our approach involves leveraging modern
          technologies to create a user-friendly platform. Using Node.js for the
          backend, React and Next.js for the frontend, Tailwind for styling, and
          Redux for state management, we ensure a robust and efficient
          application. The marketplace follows a comprehensive methodology that
          focuses on user experience, reliability, and a vast selection of
          offerings
        </p>
        <h3 className={`text-[32px] ${roboto_condensed.className} py-5`}>
          Key Features and Funtionalities
        </h3>
        <ul className=" w-[95%] mx-auto" style={{ listStyleType: "bullet" }}>
          <li>
            <h4 className={`text-[24px] ${roboto_condensed.className} py-1`}>
              {" "}
              Materials Marketplace
            </h4>
            <p className={`text-[12px] ${roboto.className}  text-justify`}>
              {" "}
              Browse and purchase a wide range of construction materials from
              verified suppliers. Detailed product information, pricing, and
              reviews for informed decision-making
            </p>
          </li>
          <li>
            <h4 className={`text-[24px] ${roboto_condensed.className} py-1`}>
              Architectural Plans Library
            </h4>
            <p className={`text-[12px] ${roboto.className}  text-justify`}>
              {" "}
              Access an extensive library of architectural plans for different
              types of constructions. Find the perfect plan for your dream home
              or customize existing plans to suit your needs
            </p>
          </li>
          <li>
            <h4 className={`text-[24px] ${roboto_condensed.className} py-1`}>
              Contractor Connection
            </h4>
            <p className={`text-[12px] ${roboto.className} text-justify`}>
              {" "}
              Connect with skilled contractors and construction professionals.
              View profiles, portfolios, and reviews to make informed choices.
            </p>
          </li>

          <li>
            <h4 className={`text-[24px] ${roboto_condensed.className} py-1`}>
              {" "}
              Project Collaboration
            </h4>
            <p className={`text-[12px] ${roboto.className} text-justify`}>
              Collaborate with contractors and suppliers through project
              dashboards. Track progress, share documents, and communicate
              effectively
            </p>
          </li>
          <li>
            <h4 className={`text-[24px] ${roboto_condensed.className} py-1`}>
              Tailored Recommendations
            </h4>
            <p className={`text-[12px] ${roboto.className} text-justify `}>
              {" "}
              Receive personalized recommendations based on your project
              requirements. Save time and make confident decisions with curated
              suggestions
            </p>
          </li>
          <li>
            <h4 className={`text-[24px] ${roboto_condensed.className} py-1`}>
              Integrated Budgeting
            </h4>
            <p className={`text-[12px] ${roboto.className}  text-justify`}>
              {" "}
              Plan and manage your construction budget efficiently. Estimate
              costs, track expenses, and ensure financial transparency.
              Real-time Notifications: Stay updated with real-time notifications
              on order status, project milestones, and communication from
              contractors
            </p>
          </li>
        </ul>
      </div>

      <div className="carousel-container">
        <div className="carousel-item">
          <Image
            src={"/a.jpg"}
            height={100}
            width={100}
            alt="image 1"
            className="img"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/a.jpg"}
            height={100}
            width={100}
            alt="image 2"
            className="img"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/a.jpg"}
            height={100}
            width={100}
            alt="image 3"
            className="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
