import Link from "next/link";

import { Mail } from "lucide-react";
import LinkedIn from "@/public/svg/linkedin";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Contact() {
  return (
    <section id="contact" className="mb-4 flex items-center gap-8 sm:gap-10">
      <Link
        href="https://github.com/cascabeanie"
        className="group flex items-center gap-2"
      >
        <SiGithub
          size={18}
          className="fill-gray-300 transition delay-150 duration-300 ease-in-out group-hover:fill-white"
        />
        <h4 className="font-light tracking-wide text-gray-300 transition delay-150 duration-300 ease-in-out group-hover:text-white">
          GitHub
        </h4>
      </Link>

      <Link
        href="https://linkedin.com/"
        className="group flex items-center gap-2"
      >
        <LinkedIn
          size={18}
          className="fill-gray-300 transition delay-150 duration-300 ease-in-out group-hover:fill-white"
        />
        <h4 className="font-light tracking-wide text-gray-300 transition delay-150 duration-300 ease-in-out group-hover:text-white">
          LinkedIn
        </h4>
      </Link>

      <Link href="#" className="group flex items-center gap-2">
        <Mail
          size={18}
          className="stroke-gray-300 transition delay-150 duration-300 ease-in-out group-hover:stroke-white"
        />
        <h4 className="font-light tracking-wide text-gray-300 transition delay-150 duration-300 ease-in-out group-hover:text-white">
          Contact
        </h4>
      </Link>

      {/* <div className="flex items-center gap-10 rounded-3xl border-2 border-gray-100 p-10 transition-all duration-500 hover:shadow-[0_0_15px_5px_rgba(180,167,214,0.5)]">
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

          <Link href="#">
            <Mail
              size={45}
              className="stroke-gray-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:stroke-white"
            />
          </Link>
        </div> */}
    </section>
  );
}
