import { work } from "@/data/constants/work";

export default function Work() {
  return (
    <section
      id="work"
      className="flex min-h-svh flex-col items-center justify-center px-4 py-24 md:px-8"
    >
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-center text-4xl font-light tracking-wide text-gray-100 md:text-5xl">
          Work History
        </h2>

        <div className="max-w-4xl rounded-lg border border-white">
          <ul className="ml-10 border-l border-white">
            {work.map((job) => (
              <li key={job.id} className="relative ml-10 py-4 pr-2 md:pr-4">
                <span className="absolute top-4 -left-[4.25rem] rounded-full bg-white p-1">
                  <job.icon size={48} />
                </span>
                <div className="flex flex-col gap-1">
                  <time className="text-xs font-light text-gray-400 md:text-sm">
                    {job.date}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-100 md:text-2xl">
                    {job.name}
                  </h3>
                  <p className="text-base font-light text-gray-300 md:text-lg">
                    {job.title}
                  </p>
                  <p className="text-base font-normal text-gray-100 md:text-lg">
                    {job.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
