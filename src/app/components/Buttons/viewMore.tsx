import React from "react";
import { roboto } from "@/app/utils/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const ViewMore = () => {
  return (
    <button
      className={`${roboto.className} text-white my-2 font-bold text-[14px] rounded-full p-[14px] flex justify-center place-items-center bg-[#D87C4F] w-[185] h-[90]`}
    >
      <ArrowRightIcon
        width={30}
        height={20}
        className="text-white ml-2 font-bold text-[20px]"
      />
    </button>
  );
};

export default ViewMore;
