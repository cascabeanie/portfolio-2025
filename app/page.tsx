import Navbar from "@/components/header/navbar";
import Hero from "@/components/main/hero";
import About from "@/components/main/about/about";
import Work from "@/components/main/work";
import Projects from "@/components/main/projects";
import Contact from "@/components/main/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="grid min-h-svh grid-rows-[auto_1.5rem] bg-black font-['Geist']">
        <header className="fixed top-0 z-10 flex w-full text-gray-300 md:justify-center md:p-6">
          <Navbar />
        </header>

        <main className="grid min-h-svh grid-rows-[repeat(5,minmax(1fr,auto))]">
          <Hero />
          <About />
          <Work />
          <Projects />
          <Contact />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
