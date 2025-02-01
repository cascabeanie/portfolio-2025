import Stylist from "@/public/svg/stylist";

export default function Work() {
  return (
    <section
      id="work"
      className="flex min-h-svh flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-center text-4xl font-light tracking-wide text-gray-100 md:text-5xl">
          Work Experience
        </h2>

        <div className="max-w-4xl rounded-lg border border-white">
          <ul className="ml-10 border-l border-white">
            <li className="relative ml-10 py-4 pr-2 md:pr-4">
              <span className="absolute top-4 -left-[4.25rem] rounded-full bg-white p-1">
                <Stylist size={48} />
              </span>
              <div className="flex flex-col gap-1">
                <time className="text-xs font-light text-gray-400 md:text-sm">
                  Feb 2025 - Feb 2025
                </time>
                <h3 className="text-xl font-semibold text-gray-100 md:text-2xl">
                  Stylist (DC Thomson)
                </h3>
                <p className="text-base font-light text-gray-300 md:text-lg">
                  Front End Work Experience
                </p>
                <p className="text-base font-normal text-gray-100 md:text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis voluptatem cum ut maiores debitis autem inventore
                  laudantium, assumenda modi consequuntur molestiae dolorem
                  sapiente quam eaque ad, accusamus ipsam alias? Suscipit.
                </p>
              </div>
            </li>

            <li className="relative ml-10 py-4 pr-2 md:pr-4">
              <span className="absolute top-4 -left-[4.25rem] rounded-full bg-white p-1">
                <Stylist size={48} />
              </span>
              <div className="flex flex-col gap-1">
                <time className="text-xs font-light text-gray-400 md:text-sm">
                  04 Nov 2024 - 8 Nov 2024
                </time>
                <h3 className="text-xl font-semibold text-gray-100 md:text-2xl">
                  Stylist (DC Thomson)
                </h3>
                <p className="text-base font-light text-gray-300 md:text-lg">
                  Front End Work Experience
                </p>
                <p className="text-base font-normal text-gray-100 md:text-lg">
                  Gained practical experience with agile software development on
                  industry projects.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
