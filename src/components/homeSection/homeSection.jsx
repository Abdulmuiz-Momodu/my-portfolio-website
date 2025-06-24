import React from "react";
import DownloadResume from "../downloadResume/downloadResume";

export default function HomeSection() {
  return (
    <section className="sectionHome md:min-h-[85vh] md:  pl-12">
      <div className="w-full lg:max-w-4/5 flex flex-col gap-4">
        <h1 className="text-[#F2B880]">Hi, my name is</h1>
        <p className="text-[#E4D9FF] text-[2rem] font-bold lg:text-7xl">
          Abdulmuiz Momodu.
        </p>
        <h1 className="text-[#A9AABC] text-2xl font-bold lg:text-5xl">
          I craft interfaces that feel as smooth as they look.
        </h1>
        <p className="text-[#A9AABC]">
          I'm a Frontend developer focused on building responsive, accessible
          and user-friendly web interfaces using modern web technologies.
          Currently, I'm expanding into animation and micro-interaction to bring
          designs to life.
        </p>
        <DownloadResume/>
      </div>
    </section>
  );
}
