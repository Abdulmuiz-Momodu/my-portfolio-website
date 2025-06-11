import React from "react";

export default function SectionAbout() {
  return (
    <div id="about" className="sectionAbout">
      <div className="flex flex-col gap-10 md:gap-16">
        <div className="flex items-center justify-between md:justify-start md:gap-8">
          <h2 className="text-[#E4D9FF] text-[1rem] min-[25rem]:text-2xl md:text-4xl font-bold pb-2">
            <span className="text-[#F2B880] text-[10px] min-[25rem]:text-[1rem] md:text-2xl">
              {" "}
              01.
            </span>{" "}
            About me
          </h2>
          <div className="w-1/2 min-[30rem]:w-3/5 md:w-1/3 h-[1px] bg-[#A9AABC]"></div>
        </div>
        <section className="flex flex-col items-center  md:flex-row gap-10 md:gap-16">
          <div className="w-full md:max-w-3/5 flex flex-col gap-8 md:gap-16">
            <div className="text-[#A9AABC] flex flex-col gap-4">
              <p className="text-base leading-relaxed">
                Hello! I'm Drixel — a frontend developer with a strong passion
                for crafting digital experiences that are fast, accessible, and
                user-focused. Whether it’s a landing page, a web app, or an
                interactive portfolio, I’m always seeking ways to make the web
                feel intuitive and alive.
              </p>
              <p className="text-base leading-relaxed">
                My core stack includes{" "}
                <span className="text-[#F2B880] font-medium">
                  <a href="https://react.dev/">React</a>
                </span>
                ,{" "}
                <span className="text-[#F2B880] font-medium">
                  <a href="https://nextjs.org/">Next.js</a>
                </span>
                ,{" "}
                <span className="text-[#F2B880] font-medium">
                  <a href="https://tailwindcss.com/">Tailwind CSS</a>
                </span>
                , and{" "}
                <span className="text-[#F2B880] font-medium">
                  <a href="https://www.typescriptlang.org/">TypeScript</a>
                </span>
                . I’m constantly learning — recently diving deeper into
                animation libraries like Framer Motion and experimenting with 3D
                tools and WebGL.
              </p>
              <p className="text-base leading-relaxed">
                Beyond coding, I care about thoughtful UI/UX design,
                performance, and clean code. I enjoy collaborating with other
                developers, designers, and product teams to bring ideas to life.
              </p>
              <p className="text-base leading-relaxed">
                When I’m not in front of a screen, you might find me exploring
                design systems, catching up on new frontend trends, or sketching
                ideas for personal projects.
              </p>
            </div>
          </div>
          <div className="w-2/5 md:w-[30%]">
            <img
              className="bitmoji w-full cursor-pointer"
              src="./bitmoji.png"
              alt="bitmoji"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
