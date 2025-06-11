// "use client";
// import React, { useRef } from "react";

export default function Header(
  // {
    // openModal2,
    // toggleModal
  // }
) {
  // const menuRef = useRef(null);
  //  const toggleMenu = () => {
  //   menuRef.current.classList.toggle("change");
  // };

  // if (closeMenu) {
  //   menuRef.current.classList.remove("change"); // Reset menu to bars
  //   closeMenu(); // Close modal
  // }

  return (
    <div className="sticky w-full bg-inherit top-0">
      <div className="header relative top-0">
        <div className="flex justify-between text-[#CCD6F6]">
          <a href="/" className="cursor-pointer">
            <img src="./my-logo.jpg" className="h-10 logo" alt="logo" />
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <ul className="flex gap-6">
              <li className="hover:cursor-pointer hover:text-[#F2B880]">
                <a href="#about">
                  <span className="text-[13px] text-[#F2B880]">01.</span> About
                </a>
              </li>
              <li className="hover:cursor-pointer hover:text-[#F2B880]">
                <a href="#skills">
                  <span className="text-[13px] text-[#F2B880]">02.</span> Skills
                </a>
              </li>
              <li className="hover:cursor-pointer hover:text-[#F2B880]">
                <a href="#projects">
                  <span className="text-[13px] text-[#F2B880]">03.</span> Work
                </a>
              </li>
              <li className="hover:cursor-pointer hover:text-[#F2B880]">
                <a href="#services">
                  <span className="text-[13px] text-[#F2B880]">04.</span>{" "}
                  Services
                </a>
              </li>
            </ul>
            <div className="contactButton border-[1px] rounded-[3px] text-[#F2B880] font-medium border-[#F2B880]">
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="menuButton cursor-pointer flex flex-col gap-2 items-end md:hidden">
            <div className="menu1 bg-[#F2B880] h-0.5 w-8"></div>
            <div className="menu2 bg-[#F2B880] h-0.5 w-7"></div>
            <div className="menu3 bg-[#F2B880] h-0.5 w-6"></div>
          </div>
          {/* <button ref={menuRef} 
            onClick={() => {
              toggleModal();
              toggleMenu();
              openModal2();
            }}
            className="flex flex-col gap-[5px] lg:hidden"
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button> */}
        </div>
      </div>
    </div>
  );
}
