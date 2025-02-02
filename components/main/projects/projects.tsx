import ProjectsCards from "./projects-cards";

export default function Projects() {
  return (
    <section id="projects" className="min-h-svh flex-col px-4 py-24 md:px-8">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <h2 className="text-center text-4xl font-light tracking-wide text-gray-100 md:text-5xl">
          Personal Projects
        </h2>

        <ProjectsCards />
      </div>
    </section>
  );
}
