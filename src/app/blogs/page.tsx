"use client";
import React, { useState } from "react";
import { roboto_condensed } from "../utils/fonts";
import BlogPost from "../components/blog/blog";
import ViewMore from "../components/Buttons/viewMore";
import { BlogData } from "../utils/data";
import BlogTag from "../components/tag/blogTag";
const Blogs = () => {
  const [tag, setTag] = useState("Technology");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  const filteredBlog = BlogData.filter((blog) => blog.tag.includes(tag));
  const blogImages = ["/course1.jpg", "/course2.jpg", "/cat8.jpg"];
  const blogCategory = [
    "LifeStyle",
    "Technology",
    "Science",
    "Culture",
    "Health",
  ];

  return (
    <main className=" bg-[#1E1917] md:pb-10 md:px-[5%]">
      <section
        id="hero"
        className=" h-[25vh] md:h-[80vh] group relative bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/b.jpg)" }}
      ></section>
      <div className="flex w-full py-10 place-content-center">
        <p className=" text-[32px] md:text-[64px] text-white ">
          <em className="text-[32px] md:text-[64px] text-[#D2BEA5]">#</em> I
          WRITE ABOUT
        </p>
      </div>
      <div className="bg-[#1E1917] flex py-[5%] flex-wrap justify-center w-[90%] gap-3 mx-auto md:w-full md:gap-10 items-center h-full  bg-opacity-40">
        {blogCategory.map((category, index) => (
          <BlogTag
            onClick={handleTagChange}
            tag={category}
            isSelected={tag === category}
            key={index}
          />
        ))}
      </div>
      <div className="grid w-[90%] mx-auto md:w-full md:grid-cols-3 sm:grid-cols-2 gap-5">
        {filteredBlog.map((blog, index) => (
          <BlogPost
            key={index}
            image={blogImages[index]}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
      {/* <div className=" w-full py-[20%] block justify-center items-center">
        <div className="flex w-[50%] mx-auto mb-10  place-content-center">
          <h2 className=" text-[32px] text-white ">
            LIKE WHAT YOU SEE
            <span className=" text-[32px] text-[#D2BEA5]">!!</span>, LETS
            COLLABORATE ON YOUR PROJECT
          </h2>
        </div>
        <div className="bg-[#574a44] w-[100%] mx-auto py-[5%] flex justify-center items-center gap-3">
          <div className="flex">
            <h2 className=" text-[64px] text-white ">LETS CONNECT</h2>
          </div>
          <ViewMore />
        </div>
      </div> */}
    </main>
  );
};

export default Blogs;
