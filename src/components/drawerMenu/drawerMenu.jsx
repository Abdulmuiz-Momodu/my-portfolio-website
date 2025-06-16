import React, { useEffect, useRef } from "react";

export default function DrawerMenu({ isOpen, onClose }) {
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

    const handleTouchEnd = () => {
      if (touchStartX.current - touchEndX.current > 50) {
        // Swiped left
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
      className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#0A192F] text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-[#F2B880] hover:text-white text-3xl font-bold"
        >
          &times;
        </button>
      </div>

      <nav className="flex flex-col gap-6 mt-8 px-6 text-lg">
        {["About", "Skills", "Projects", "Services", "Contact"].map(
          (item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="hover:text-[#F2B880]"
            >
              0{i + 1}. {item}
            </a>
          )
        )}
      </nav>
    </div>
  );
}
