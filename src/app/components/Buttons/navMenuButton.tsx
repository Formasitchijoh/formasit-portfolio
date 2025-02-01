import React from "react";
import { roboto } from "@/app/utils/fonts";
import { FaDownload } from "react-icons/fa";

type ButtonProps = {
  icon?: string;
  text?: string;
  isDownload?:boolean
};


const Button = ({ icon, text, isDownload }: ButtonProps) => { 

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to the CV file in /public
    link.download = "resume.pdf"; // Rename the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleHireme = () => {
    const link = document.createElement("a");
    link.href = "https://www.linkedin.com/in/formasit-chijoh-0a9a5b202/"; // Path to the CV file in /public
    link.target="_blank"
    link.rel="noopener noreferrer"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
     onClick={isDownload ? handleDownload : handleHireme}
      className={`${roboto.className} text-white inset-ring-10 inset-ring-blue-500 text-[10px] px-2 py-1 lg:text-[12px] rounded-md  gap-2 flex justify-center items-center bg-primary`}
    >
      {text}
      {icon ? <FaDownload className="text-white ml-2" /> : ""}
    </button>
  );
};

export default Button;
