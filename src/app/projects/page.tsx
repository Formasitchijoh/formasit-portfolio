import React from "react";
import { ProjectEntity } from "../utils/entities";
import { roboto, roboto_condensed } from "../utils/fonts";
import ProductPage, { Project } from "../components/products/product";
import { projects } from "../utils/data";
import { Todo } from "../utils/Schema";

const Projects = () => {
  const todo = Todo.find();
  console.log(todo);

  return (
    <main className=" bg-[#1E1917] md:pb-10 md:px-[5%]">
      <section
        id="hero"
        className=" h-[25vh] md:h-[50vh] group relative bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/g.jpg)" }}
      >
        <div className="bg-[#1E1917] flex  justify-center items-center h-full  bg-opacity-40">
          <h1
            className={`md:text-[32px] text-[24px] text-white ${roboto_condensed.className}`}
          >
            SELECTED PROJECTS
          </h1>
        </div>
      </section>
      <div className="w-full mt-[10%] ">
        <div className="gap-y-20 grid ">
          <Project
            image="construction.PNG"
            title={projects[0].title}
            description={projects[0].description}
          />
          <Project
            image="home.JPG"
            title={projects[1].title}
            description={projects[0].description}
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
