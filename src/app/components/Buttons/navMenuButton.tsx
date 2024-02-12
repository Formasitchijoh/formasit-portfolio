import React from "react";
import { roboto } from "@/app/utils/fonts";
import { FaDownload } from "react-icons/fa";

type ButtonProps = {
  icon?: string;
  text?: string;
};

const Button = ({ icon, text }: ButtonProps) => {
  return (
    <button
      className={`${roboto.className} text-white my-2 font-bold text-[14px] rounded-full p-[14px] flex justify-center place-items-center bg-[#D87C4F] w-[185] h-[90]`}
    >
      {text} {icon ? <FaDownload className="text-white ml-2" /> : ""}
    </button>
  );
};

export default Button;
