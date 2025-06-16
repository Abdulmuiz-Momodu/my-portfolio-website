"use client";
import React, { useRef, useState } from "react";
import DrawerMenu from "@/components/drawerMenu/drawerMenu"; // 👈 import the component

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("change");
    }
  };

  const handleDrawerClose = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("change");
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
              {["About", "Skills", "Work", "Services"].map((text, i) => (
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

          {/* Hamburger for mobile */}
          <button
            ref={menuRef}
            onClick={() => {
              toggleMenu();
              setIsDrawerOpen(true);
            }}
            className="flex flex-col items-end gap-[5px] cursor-pointer md:hidden"
          >
            <div className="bg-[#F2B880] h-0.5 w-8 bar1" />
            <div className="bg-[#F2B880] h-0.5 w-7 bar2" />
            <div className="bg-[#F2B880] h-0.5 w-6 bar3" />
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      <DrawerMenu isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </div>
  );
}
