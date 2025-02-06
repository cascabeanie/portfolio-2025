import Navbar from "@/components/header/navbar";
import Hero from "@/components/main/hero";
import About from "@/components/main/about/about";
import Work from "@/components/main/work";
import Projects from "@/components/main/projects/projects";
import Contact from "@/components/footer/contact";

export default function Home() {
  return (
    <>
      <div className="grid min-h-svh grid-rows-[auto] bg-[#0a0a0a] font-['Geist']">
        <header className="fixed top-0 z-10 flex w-full text-gray-300 md:justify-center md:p-6">
          <Navbar />
        </header>

        <main className="grid min-h-svh grid-rows-[repeat(4,minmax(1fr,auto))]">
          <Hero />
          <About />
          <Work />
          <Projects />
          {/*  <Contact /> */}
        </main>

        <footer className="flex items-center justify-center">
          <Contact />
        </footer>
      </div>
    </>
  );
}
