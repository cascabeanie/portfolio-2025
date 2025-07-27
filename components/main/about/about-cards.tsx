import { skillTechnologies } from "@/data/constants/technologies";

export default function AboutCards() {
  return (
    <>
      <div className="grid w-full max-w-7xl grid-cols-2 justify-items-center gap-8 md:grid-cols-3">
        {skillTechnologies.map((tech) => (
          <a
            href={tech.link}
            key={tech.id}
            className="group grid w-full max-w-sm grid-rows-3 items-center justify-items-center gap-2 rounded-lg bg-zinc-900/75 p-7 transition-colors hover:bg-zinc-800 md:gap-4"
          >
            <tech.icon size={35} className={`${tech.color}`} />

            <span className="text-center text-xs text-gray-400 group-hover:text-gray-300 md:text-sm">
              {tech.description}
            </span>
            <span className="text-center text-sm font-medium text-gray-300 group-hover:text-white md:text-base">
              {tech.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
