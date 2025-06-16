"use client";
import React, { useRef, useState } from "react";

export default function Header({}) {
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
    <div className="sticky w-full bg-inherit top-0 z-50">
      <div className="header relative top-0">
        <div className="flex justify-between items-center text-[#CCD6F6] px-4 py-2">
          <a href="/" className="cursor-pointer">
            <img src="./my-logo.jpg" className="h-10 logo" alt="logo" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <ul className="flex gap-6">
              {["About", "Skills", "Work", "Services"].map((text, i) => (
                <li key={i} className="hover:text-[#F2B880]">
                  <a href={`#${text.toLowerCase()}`}>
                    <span className="text-[13px] text-[#F2B880]">
                      0{i + 1}.
                    </span>{" "}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="contactButton border-[1px] rounded-[3px] text-[#F2B880] font-medium border-[#F2B880] px-3 py-1">
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuRef}
            onClick={() => {
              toggleMenu();
              setIsDrawerOpen(true);
            }}
            className="flex flex-col items-end gap-[5px] md:hidden"
          >
            <div className="bg-[#F2B880] h-0.5 w-8 bar1" />
            <div className="bg-[#F2B880] h-0.5 w-7 bar2" />
            <div className="bg-[#F2B880] h-0.5 w-6 bar3" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 h-full w-[80%] bg-[#0A192F] z-[100] transition-transform duration-300 shadow-lg">
          <div className="flex justify-end close-button">
            <button
              onClick={handleDrawerClose}
              className="text-[#F2B880] text-3xl font-bold"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-start gap-6 px-8 pt-4 text-[#CCD6F6] text-lg">
            {["About", "Skills", "Work", "Services", "Contact"].map(
              (text, i) => (
                <li key={i} className="w-full">
                  <a
                    href={`#${text.toLowerCase()}`}
                    onClick={handleDrawerClose}
                    className="block w-full py-2 border-b border-[#233554] hover:text-[#F2B880]"
                  >
                    <span className="text-[13px] text-[#F2B880]">
                      0{i + 1}.
                    </span>{" "}
                    {text}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
