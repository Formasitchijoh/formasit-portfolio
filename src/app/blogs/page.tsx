import React from "react";
import { roboto_condensed } from "../utils/fonts";
import BlogPost from "../components/blog/blog";
const Blogs = () => {
  const blogImages = ["/course1.jpg", "/course2.jpg", "/cat8.jpg"];
  const blogCategory = ["All", "LifeStyle", "Technology", "Science", "Culture"];

  return (
    <main className=" bg-[#1E1917] md:pb-10 md:px-[5%]">
      <section
        id="hero"
        className=" h-[25vh] md:h-[80vh] group relative bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/b.jpg)" }}
      ></section>
      <div className="bg-[#1E1917] flex  justify-center items-center h-full  bg-opacity-40">
        <h1
          className={`md:text-[32px] text-[24px] text-white ${roboto_condensed.className}`}
        >
          I WRITE ABOUT
        </h1>
      </div>
      <div className="bg-[#1E1917] flex py-[5%] justify-center gap-10 items-center h-full  bg-opacity-40">
        {blogCategory.map((category, index) => (
          <button
            key={index}
            className="p-[5px] justify-items-center bg-[#382e29] hover:bg-[#D2BEB5] items-center rounded-full text-white border-2 border-[#D2BEB5]"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {blogImages.map((image, index) => (
          <BlogPost image={image} key={index} />
        ))}
      </div>
    </main>
  );
};

export default Blogs;
