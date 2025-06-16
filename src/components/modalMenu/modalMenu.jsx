import React, { useEffect, useRef } from "react";

export default function ModalMenu({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const drawer = drawerRef.current;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    // Swiped left to close
    const handleTouchEnd = () => {
      if (touchStartX.current - touchEndX.current < 50) {
        onClose();
      }
    };

    if (drawer) {
      drawer.addEventListener("touchstart", handleTouchStart);
      drawer.addEventListener("touchmove", handleTouchMove);
      drawer.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (drawer) {
        drawer.removeEventListener("touchstart", handleTouchStart);
        drawer.removeEventListener("touchmove", handleTouchMove);
        drawer.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [onClose]);

  return (
    <div
      ref={drawerRef}
      className={`fixed top-0 right-0 flex justify-end h-full w-full backdrop-blur-xs text-white shadow-lg z-50 transform duration-[500ms] ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full w-3/5 flex flex-col items-center justify-center gap-20 bg-[#1a1423]">
        <ul className="flex flex-col gap-6 tracking-wide text-lg">
          {["About", "Skills", "Projects", "Services"].map((item, i) => (
            <li key={i} onClick={onClose} className="hover:text-[#F2B880]">
              <a className="flex flex-col items-center" href={`#${item.toLowerCase()}`}>
                <span className="text-[13px] text-[#F2B880]">0{i + 1}.</span>{" "}
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="contactButton border-[1px] rounded-[3px] text-[#F2B880] font-medium border-[#F2B880] px-3 py-1">
          <a onClick={onClose} href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
