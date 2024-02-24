import React from "react";

type Props = {
  tag: string;
  onClick: (newTag: string) => void;
  isSelected?: boolean;
};
type TechnnolotyProps = {
  tag: string;
};
const BlogTag = ({ tag, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected
    ? "text-white border-[#1E1917]"
    : "text-[#D2BEB5] border-slate-600 hover:border-white";
  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-[12px] md:text-[16px] cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default BlogTag;

export const TechnologyTag = ({ tag }: TechnnolotyProps) => {
  return (
    <button
      className={`rounded-full m-[2px] text-[10px] text-white px-6 py-3 lg:text-xs bg-[#7b6e69] font-bold cursor-pointer`}
    >
      {tag}
    </button>
  );
};
