import React from "react";

export default function SectionProject() {
  const projects = [
    {
      title: "Audiophile Website",
      description:
        "A sleek and responsive personal portfolio built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.vercel.app",
      image: <img src="./audiophile.png" alt="audiophile"/>
    },
    {
      title: "Product-List-With-Cart",
      description:
        "A minimal e-commerce site with add-to-cart, product pages, and Zustand for state management.",
      tech: ["React", "Zustand", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce-store",
      live: "https://mystore.vercel.app",
      image: <img src="./product-list-with-cart.png" alt="product-list-with-cart"/>
    },
    {
      title: "Rock-Paper-Scissors",
      description:
        "An interactive landing page with smooth transitions and animations.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/yourusername/landing-page",
      live: "https://landing.vercel.app",
      image: <img src="./rock-paper-scissors.png" alt="rock-paper-scissors"/>
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

          {/* <p className="text-center text-[#A9AABC] mb-12 max-w-xl mx-auto">
            Here are some of the personal and collaborative projects I’ve worked
            on recently.
          </p> */}

          {/* <div className="grid gap-8 md:grid-cols-2"> */}
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (

              // Projects
              <div key={index} className="flex">
                <div>{project.image}</div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="projectDescription bg-[#2C2233] text-[#A9AABC]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-[#F2B880] text-[#1A1423] px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Extension */}
                  <div className="flex gap-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live Site
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <img className="w-5" src="./github.png" alt="github" />
                    </a>
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
