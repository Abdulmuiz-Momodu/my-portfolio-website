import React from "react";

export default function Contact() {
  return (
    <section className="md:fixed bottom-0">
      <div className="contact flex items-center md:items-start justify-center md:flex-col">
        <div className="w-fit flex flex-col items-center gap-10">
          <ul className="flex justify-around w-3xs md:w-fit md:flex-col md:gap-10">
            <li>
              <a href="https://github.com/Abdulmuiz-Momodu" target="_blank">
                <div className="github socialLinks w-5 h-5"></div>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muiz-momodu" target="_blank">
                <div className="linkedin socialLinks w-5 h-5"></div>
              </a>
            </li>
            <li>
              <a href="https://wa.me/+2347045912062"  target="_blank">
                <div className="whatsapp socialLinks w-5 h-5"></div>
              </a>
            </li>
          </ul>
          <div className="hidden md:block w-[1px] h-40 bg-[#A9AABC]"></div>
        </div>
      </div>
    </section>
  );
}
