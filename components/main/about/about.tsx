import AboutCards from "./about-cards";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="flex min-h-svh flex-col items-center justify-center px-4 py-24 md:px-8"
      >
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-center text-4xl font-light tracking-wide text-gray-100 md:text-5xl">
              Development Technologies
            </h2>
            <h3 className="text-center text-base text-gray-400 md:text-lg">
              Here are some of the main technologies that I work with:
            </h3>
          </div>

          <AboutCards />
        </div>
      </section>
    </>
  );
}
