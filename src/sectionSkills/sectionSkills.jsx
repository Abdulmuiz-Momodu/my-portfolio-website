import React from "react";

export default function SectionSkills() {
  return (
    <div id="skills" className="sectionskills">
      <section className="text-[#E4D9FF]">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="min-w-3/5 flex flex-col gap-16">
            <div className="flex items-center gap-8">
              <h2 className="text-[#E4D9FF] text-[1rem] min-[25rem]:text-2xl md:text-4xl font-bold pb-2">
                <span className="text-[#F2B880] text-[10px] min-[25rem]:text-[1rem] md:text-2xl">
                  {" "}
                  02.
                </span>{" "}
                Skills
              </h2>
              <div className="w-1/2 min-[30rem]:w-3/5 md:w-1/3 h-[1px] bg-[#A9AABC]"></div>
            </div>
            <div className="flex flex-wrap gap-6 text-[#E4D9FF] text-center">
              <div className="bg-[#2C2233] rounded-xl skill">HTML</div>
              <div className="bg-[#2C2233] rounded-xl skill">CSS</div>
              <div className="bg-[#2C2233] rounded-xl skill">JavaScript</div>
              <div className="bg-[#2C2233] rounded-xl skill">React</div>
              <div className="bg-[#2C2233] rounded-xl skill">Next.js</div>
              <div className="bg-[#2C2233] rounded-xl skill">Tailwind CSS</div>
              <div className="bg-[#2C2233] rounded-xl skill">TypeScript</div>
              <div className="bg-[#2C2233] rounded-xl skill">Git & GitHub</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
