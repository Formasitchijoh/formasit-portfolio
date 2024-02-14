import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { roboto, roboto_condensed } from "@/app/utils/fonts";
const Contact = () => {
  return (
    <section className="w-[80vw] pt-[20%] mx-auto md:py-10 ">
      <div className="flex w-full place-content-center">
        <p
          className={`text-white text-[32px]  md:text-[64px] ${roboto_condensed.className}`}
        >
          LETS CONNECT
        </p>
      </div>
      <div
        id="contact"
        className="grid w-[80vw] mx-auto md:grid-cols-2  md:my-12 py-4 gap-8 relative"
      >
        <div className="z-10 w-full md:w-2/3">
          <p
            className={`text-white md:text-[16px] text-[12px]  mb-4 ${roboto.className}`}
          >
            ARE YOU INTERESTED IN WORKING WITH ME OR JUST WANT TO SAY HI
          </p>
        </div>
        <div>
          <form action="" className="flex flex-col ">
            <div className="mb-6">
              <label
                htmlFor="email"
                className={`text-white block mb-2 text-sm font-medium ${roboto.className}`}
                typeof="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#D2BEB5] bg-opacity-10 border border-[#D2BEB5] placeholder-[#D2BEB5] text-gray-100 text-sm  block w-full p-2.5 "
                required
                placeholder="youremail@gmail.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className={`text-white block mb-2 text-sm font-medium ${roboto.className}`}
                typeof="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-[#D2BEB5] bg-opacity-10 border border-[#D2BEB5] placeholder-[#D2BEB5] text-gray-100 text-sm  block w-full p-2.5 "
                required
                placeholder="your message to me!!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
                typeof="subject"
              ></label>
              <textarea
                name="message"
                id="message"
                className="bg-[#D2BEB5] bg-opacity-10 border border-[#D2BEB5] placeholder-[#D2BEB5] text-gray-100 text-sm  block w-full p-2.5 "
                placeholder="lets talks about ..."
              />
            </div>
            <button
              type="submit"
              className={`bg-[#D87C4F] hover:bg-[#D87C4F] ${roboto.className} text-white font-medium py-2.5 px-5 rounded-lg w-full`}
            >
              Send To Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
