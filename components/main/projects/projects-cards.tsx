import { projectTechnologies } from "@/data/constants/technologies";
import { projects } from "@/data/constants/projects";

import ProjectsButton from "@/components/ui/buttons/projects-button";

import { Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function ProjectsCards() {
  return (
    <>
      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-6 md:flex-row md:gap-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex max-w-2xl rounded-2xl border-2 border-gray-100"
          >
            <span className="grid grid-rows-[2rem_5rem_12rem_7rem] justify-items-center gap-4 rounded-2xl bg-zinc-900 p-4 md:grid-rows-[2rem_5rem_12rem_3rem] md:justify-items-start md:gap-6 md:p-10">
              <h3 className="text-2xl font-semibold text-gray-100 md:text-3xl">
                {project.title}
              </h3>

              <p className="max-w-sm text-center text-base font-light text-gray-100 md:text-left md:text-lg">
                {project.description}
              </p>

              <div className="flex flex-col gap-6">
                <h4 className="text-center text-xl font-medium text-gray-100 md:text-left md:text-2xl">
                  Technologies used
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {project.technologies.map((tech) => {
                    const techInfo = projectTechnologies.find(
                      (t) => t.name === tech,
                    );
                    return (
                      <div key={tech} className="flex flex-col items-center">
                        {techInfo && (
                          <techInfo.icon
                            size={32}
                            className={`${techInfo.color}`}
                          />
                        )}
                        <p className="mt-2 text-xs text-gray-400">{tech}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row">
                <a href={project.demoLink}>
                  <ProjectsButton
                    buttonVariant={"primary"}
                    buttonType={"button"}
                    buttonWidth={"min-w-44"}
                  >
                    <Globe />
                    Visit
                  </ProjectsButton>
                </a>

                <a href={project.githubLink}>
                  <ProjectsButton
                    buttonVariant={"secondary"}
                    buttonType={"button"}
                    buttonWidth={"min-w-44"}
                  >
                    <SiGithub />
                    Source
                  </ProjectsButton>
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
