import React from "react";

export default function ProjectSection() {
  const projects = [
    {
      title: "Audiophile Website",
      description:
        "A visually engaging and responsive website designed for showcasing audio gear products. The site features a clean, modern layout with intuitive navigation and detailed product pages, making it ideal for e-commerce-style product displays. Built to reflect a premium brand feel with smooth interactions.",
      tech: ["Next.js", "Zustand", "Vanilla CSS", "Tailwind CSS"],
      github: "https://github.com/Abdulmuiz-Momodu/audiophile-website",
      live: "https://drixel-audiophile-website.vercel.app/",
      image: (
        <div className="projectOne">
          <div></div>
        </div>
      ),
    },
    {
      title: "Product-List-With-Cart",
      description:
        "A functional e-commerce interface that includes product listings, real-time cart updates, and user-friendly item interactions. This project demonstrates frontend state management, dynamic rendering, and a seamless shopping experience from product view to cart total.",
      tech: ["React", "Vanilla CSS"],
      github: "https://github.com/Abdulmuiz-Momodu/Product-Lists-with-Cart",
      live: "https://mypher-product-lists-with-cart.netlify.app/",
      image: (
        <div className="projectTwo">
          <div></div>
        </div>
      ),
    },
    {
      title: "Rock-Paper-Scissors",
      description:
        "A simple, fun and interactive browser game that recreates the classic Rock-Paper-Scissors experience. It showcases my skills in crafting engaging UI and clean game mechanics.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Abdulmuiz-Momodu/Rock-Paper-Scissors",
      live: "https://mypher-rock-paper-scissor.netlify.app/",
      image: (
        <div className="projectThree">
          <div></div>
        </div>
      ),
    },
    {
      title: "Rest-Countries-API",
      description:
        "A responsive web application that allows users to browse, search, and filter through a comprehensive list of countries. The app displays each country’s essential information including flag, name, population, region, and capital. Users can filter countries by region or search by name using an intuitive UI.",
      tech: ["Next.Js", "Vanilla CSS", "Tailwind CSS"],
      github: "https://github.com/Abdulmuiz-Momodu/Rest-Countries-API",
      live: "https://rest-countries-api-mauve-five.vercel.app/",
      image: (
        <div className="projectFour">
          <div></div>
        </div>
      ),
    },
  ];

  return (
    <div id="projects" className="sectionProject">
      <section className="text-[#E4D9FF]">
        <div className="flex flex-col gap-10 md:gap-16">
          <div className="flex items-center justify-between md:justify-start md:gap-8">
            <h2 className="text-[1rem] min-[25rem]:text-2xl md:text-4xl font-bold pb-2">
              <span className="text-[#F2B880] text-[10px] min-[25rem]:text-[1rem] md:text-2xl">
                {" "}
                03.
              </span>{" "}
              Projects
            </h2>
            <div className="w-1/2 min-[30rem]:w-3/5 md:w-1/3 h-[1px] bg-[#A9AABC]"></div>
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-layout flex flex-col md:flex-row lg:h-[25rem]"
              >
                <div className="projectImage">{project.image}</div>

                <div className="md:w-[30%] flex items-center projectInfo">
                  <div className="projectContent flex flex-col gap-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="projectDescription bg-[#2C2233] text-[#A9AABC]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[#a4a5b690] rounded-full font-black text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Extension */}
                    <div className="flex gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="go-live socialLinks w-5 h-5"></div>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="github socialLinks w-5 h-5"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
