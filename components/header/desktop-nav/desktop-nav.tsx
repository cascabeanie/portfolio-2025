import NavLinks from "../nav-links";

export default function DesktopNav() {
  return (
    <>
      <ul className="z-20 hidden gap-8 rounded-full bg-zinc-900/50 px-6 py-2 backdrop-blur-xs transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.25)] md:flex">
        <NavLinks />
      </ul>
    </>
  );
}
