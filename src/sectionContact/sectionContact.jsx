export default function SectionContact() {
  return (
    <div className="text-[#E4D9FF] sectionContact" id="contact">
      <section className="flex flex-col gap-8 items-center text-center">
        <h2 className="text-base min-[25rem]:text-2xl md:text-4xl font-bold pb-2">
          Let's Work Together
        </h2>

        {/* <p className="text-center mb-12 max-w-xl mx-auto">
          I'm currently open to frontend development roles (full-time or part-time), freelance projects,
          and creative collaborations. Whether you're hiring, building something
          exciting, or just want to connect — feel free to drop me a message!
        </p> */}
        <div className="max-w-[40rem]">
          <p>
            I’m currently available for{" "}
            <strong>full-time, part-time, or freelance roles</strong> in
            frontend development.
          </p>
          <p>
            Let’s create something impactful — whether it’s a product,
            portfolio, or idea. Have an opportunity or just want to connect?
            Drop me a message!
          </p>
        </div>

        <button className="explore border-[1px] rounded-[3px] text-[#F2B880] max-w-fit p-4 font-medium border-[#F2B880]">
          <a href="mailto:ilamosiabdul@gmail.com">Say Hello!</a>
        </button>
      </section>
    </div>
  );
}
