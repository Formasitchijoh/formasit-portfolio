"use client";

import { useRef, MutableRefObject } from "react";
import { useIsVisible } from "./visibile";

interface CustomComponentProps {
  // Define the props for your custom component
}

const CustomComponent: React.FC<CustomComponentProps> = (props) => {
  // ...your custom component logic here...
  return <div className="text-white h-[100vh]">Hello world to me</div>;
};

export default function Page() {
  const ref1: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}
      >
        <CustomComponent />
      </div>
      <div
        ref={ref2}
        className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}
      >
        <CustomComponent />
      </div>
      <div
        ref={ref3}
        className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}
      >
        <CustomComponent />
      </div>
    </>
  );
}
