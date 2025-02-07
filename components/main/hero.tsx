import Link from "next/link";

import Button from "@/components/ui/buttons/button";

import { MapPin } from "lucide-react";
import { Code } from "lucide-react";
import { Download } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import LinkedIn from "@/public/svg/linkedin";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section id="hero" className="flex min-h-svh items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex max-w-sm flex-col items-center md:max-w-full">
            <h1 className="mb-4 text-center text-6xl font-medium tracking-wide text-gray-100 md:text-8xl">
              Jack Cascarini
            </h1>
            <h3 className="mb-6 text-center text-xl text-gray-300 md:text-3xl">
              Front End Developer
            </h3>
            <div className="flex items-center gap-4 text-base text-gray-400 md:text-xl">
              <MapPin color={"rgb(156 163 175 / 0.7)"} size={24} />
              London, UK
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <Link href="#projects">
              <Button
                buttonType="button"
                buttonVariant={"primary"}
                buttonWidth="min-w-56"
              >
                View My Projects
                <Code size={20} />
              </Button>
            </Link>

            <Link href="#">
              <Button
                buttonType="button"
                buttonVariant={"secondary"}
                buttonWidth="min-w-56"
              >
                Download CV
                <Download size={20} />
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            <Link href="https://github.com/cascabeanie">
              <SiGithub
                size={35}
                className="fill-gray-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-white"
              />
            </Link>

            <Link href="https://linkedin.com/">
              <LinkedIn
                size={35}
                className="fill-gray-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-white"
              />
            </Link>

            <Link href="mailto:jack.cascarini@yahoo.com">
              <Mail
                size={45}
                className="stroke-gray-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:stroke-white"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
