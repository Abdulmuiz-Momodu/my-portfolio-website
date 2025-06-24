import React from "react";

export default function ServiceSection() {
  return (
    <div id="services" className="sectionServices">
      <section className="text-[#E4D9FF]">
        <div className="flex flex-col gap-10 md:gap-16">
          <div className="flex items-center justify-between md:justify-start md:gap-8">
            <h2 className="text-[1rem] min-[25rem]:text-2xl md:text-4xl font-bold pb-2">
              <span className="text-[#F2B880] text-[10px] min-[25rem]:text-[1rem] md:text-2xl">
                {" "}
                04.
              </span>{" "}
              What I Offer
            </h2>
            <div className="w-1/2 min-[30rem]:w-3/5 md:w-1/3 h-[1px] bg-[#A9AABC]"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* <!-- Web Development --> */}
            <div className="service flex flex-col gap-4 bg-[#2C2233] rounded-xl shadow-lg hover:shadow-[#F2B880]/40">
              <h3 className="text-xl font-semibold mb-2 text-[#F2B880]">
                Frontend Development
              </h3>
              <p className="text-[#A9AABC] text-sm leading-relaxed">
                I build fast, responsive, and accessible websites using modern
                frontend technologies like React, Next.js, Tailwind CSS, and
                TypeScript.
              </p>
            </div>

            {/* <!-- UI/UX Design --> */}
            <div className="service flex flex-col gap-4 bg-[#2C2233] rounded-xl shadow-lg hover:shadow-[#F2B880]/40">
              <h3 className="text-xl font-semibold mb-2 text-[#F2B880]">
                UI/UX Design
              </h3>
              <p className="text-[#A9AABC] text-sm leading-relaxed">
                From wireframes to final polish, I design intuitive user
                interfaces that combine aesthetic appeal with usability — using
                Figma and design systems.
              </p>
            </div>

            {/* <!-- Website Optimization --> */}
            <div className="service flex flex-col gap-4 bg-[#2C2233] rounded-xl shadow-lg hover:shadow-[#F2B880]/40">
              <h3 className="text-xl font-semibold mb-2 text-[#F2B880]">
                Performance Optimization
              </h3>
              <p className="text-[#A9AABC] text-sm leading-relaxed">
                I help boost your website’s speed, SEO, and accessibility scores
                — making sure your site performs well on all devices and
                networks.
              </p>
            </div>

            {/* <!-- Component & UI System Dev --> */}
            <div className="service flex flex-col gap-4 bg-[#2C2233] rounded-xl shadow-lg hover:shadow-[#F2B880]/40">
              <h3 className="text-xl font-semibold mb-2 text-[#F2B880]">
                Component System Development
              </h3>
              <p className="text-[#A9AABC] text-sm leading-relaxed">
                I create reusable, scalable UI components for design consistency
                and developer efficiency — perfect for teams working in React
                ecosystems.
              </p>
            </div>
          </div>

    
        </div>
      </section>
    </div>
  );
}
