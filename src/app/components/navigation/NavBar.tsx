"use client";

import Image from "next/image";
import React, { useState } from "react";
import { roboto } from "@/app/utils/fonts";
import NavMenu from "./NavMenu";
import Link from "next/link";
import Button from "../Buttons/navMenuButton";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const menuItem = [
    { title: "Home", link: "/home" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Project", link: "/projects" },
    { title: "Blog", link: "/blogs" },
  ];

  return (
    <header className="w-full  bg-[#1E1917] py-[1%] px-[5%]  sticky top-0 z-50">
      <nav className="w-full  flex justify-between items-center">
        <Link
          className="w-[20%] justify-start items-center flex gap-2"
          href={"/"}
        >
          <Image
            className="rounded-full "
            width={40}
            height={40}
            alt="logo-image"
            src="/formasit.png"
          />
          <p
            className={` text-[8px] whitespace-nowrap md:text-[12px] text-white ${roboto.className}`}
          >
            Formasit Chijoh .F
          </p>
        </Link>
        <button
          onClick={handleShowMenu}
          className="w-1/4flex flex md:hidden justify-end items-end pb-2 h-[40px]"
        >
          <div className="  w-[30px] gap-1 flex flex-col justify-center">
            <div className="w-[30px] h-[2px] bg-white"></div>
            <div className="w-[20px] h-[2px] bg-white flex justify-center items-center"></div>
            <div className="w-[30px] h-[2px] bg-white"></div>
          </div>
        </button>
        <div className=" hidden md:flex w-[80%] justify-between items-center">
          <ul className=" w-[70%]  justify-center items-center flex gap-10">
            {menuItem.map((item, index) => (
              <li className=" text-[16px] text-white" key={index}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="w-[30%] flex gap-4 justify-end items-center">
            <Button text="Hire Me" />
            <Button text="DownLoad CV" icon="true" />
          </div>
        </div>
      </nav>
      {showMenu && <NavMenu setShowMenu={setShowMenu} />}
    </header>
  );
};

export default NavBar;

// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { roboto } from "@/app/utils/fonts";
// import NavMenu from "./NavMenu";
// import Link from "next/link";
// import Button from "../Buttons/navMenuButton";
// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const handleShowMenu = () => {
//     setShowMenu(true);
//   };
//   const menuItem = [
//     { title: "Home", link: "/home" },
//     { title: "About", link: "/about" },
//     { title: "Contact", link: "/contact" },
//     { title: "Project", link: "/projects" },
//     { title: "Blog", link: "/blogs" },
//   ];
//   return (
//     <header className="w-full  bg-[#1E1917] py-[1%] px-[5%] relative">
//       <nav className="w-full  flex justify-between items-center">
//         <Link
//           className="w-[20%] justify-start items-center flex gap-2"
//           href={"/"}
//         >
//           <Image
//             className="rounded-full "
//             width={40}
//             height={40}
//             alt="logo-image"
//             src="/formasit.png"
//           />
//           <p
//             className={` text-[8px] whitespace-nowrap md:text-[12px] text-white ${roboto.className}`}
//           >
//             Formasit Chijoh .F
//           </p>
//         </Link>
//         <button
//           onClick={handleShowMenu}
//           className="w-1/4flex flex md:hidden justify-end items-end pb-2 h-[40px]"
//         >
//           <div className="  w-[30px] gap-1 flex flex-col justify-center">
//             <div className="w-[30px] h-[2px] bg-white"></div>
//             <div className="w-[20px] h-[2px] bg-white flex justify-center items-center"></div>
//             <div className="w-[30px] h-[2px] bg-white"></div>
//           </div>
//         </button>
//         <div className=" hidden md:flex w-[80%] justify-between items-center">
//           <ul className=" w-[70%]  justify-center items-center flex gap-10">
//             {menuItem.map((item, index) => (
//               <li className=" text-[16px] text-white" key={index}>
//                 <Link href={item.link}>{item.title}</Link>
//               </li>
//             ))}
//           </ul>
//           <div className="w-[30%] flex gap-4 justify-end items-center">
//             <Button text="Hire Me" />
//             <Button text="DownLoad CV" icon="true" />
//           </div>
//         </div>
//       </nav>
//       {/* <hr className="mt-2 hidden md:block" /> */}
//       {showMenu && <NavMenu setShowMenu={setShowMenu} />}
//     </header>
//   );
// };

// export default NavBar;
