import React from "react";

type Props = {
  tag: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
};
const BlogTag = ({ tag, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected
    ? "text-white border-[#[#1E1917]]"
    : "text-[#D2BEB5] border-slate-600 hover:border-white";
  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default BlogTag;
