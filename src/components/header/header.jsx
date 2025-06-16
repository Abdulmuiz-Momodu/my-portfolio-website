"use client";
import React, { useRef, useState } from "react";
import DrawerMenu from "@/components/modalMenu/modalMenu";
import ModalMenu from "@/components/modalMenu/modalMenu";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.toggle("change");
    }
  };

  const handleDrawerClose = () => {
  if (buttonRef.current) {
    buttonRef.current.classList.remove("change");
  }
  setIsDrawerOpen(false);
};


  return (
    <div className="sticky top-0 w-full bg-inherit z-50">
      <div className="header relative top-0">

        <div className="flex justify-between items-center text-[#CCD6F6]">
          <a href="/" className="cursor-pointer">
            <img src="./my-logo.jpg" className="h-10 logo" alt="logo" />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            <ul className="flex gap-6">
              {["About", "Skills", "Projects", "Services"].map((text, i) => (
                <li key={i} className="hover:text-[#F2B880]">
                  <a href={`#${text.toLowerCase()}`}>
                    <span className="text-[13px] text-[#F2B880]">0{i + 1}.</span>{" "}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="contactButton border-[1px] rounded-[3px] text-[#F2B880] font-medium border-[#F2B880] px-3 py-1">
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/*Mobile Menu-button*/}
          <button
            ref={buttonRef}
            onClick={() => {
              toggleMenu();
              setIsDrawerOpen((prev) => !prev);
            }}
            className="drawer-toggle z-[100] flex flex-col items-end gap-[5px] cursor-pointer md:hidden"
          >
            <div className="bar1 bg-[#F2B880] h-0.5 w-8" />
            <div className="bar2 bg-[#F2B880] h-0.5 w-7" />
            <div className="bar3 bg-[#F2B880] h-0.5 w-6" />
          </button>

        </div>
      </div>
      {/* Mobile Menu */}
      <ModalMenu isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </div>
  );
}
