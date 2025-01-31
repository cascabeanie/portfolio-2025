"use client";

import { useState } from "react";
import Hamburger from "./hamburger";
import NavLinks from "../nav-links";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleToggleMobileNav(): void {
    isNavOpen === false ? setIsNavOpen(true) : setIsNavOpen(false);
  }

  return (
    <>
      <Hamburger onToggleIcon={handleToggleMobileNav} navStatus={isNavOpen} />

      <ul
        className={`fixed top-0 z-20 flex min-h-svh flex-col items-center gap-8 overflow-hidden rounded-r-3xl bg-zinc-900/50 px-6 pt-20 backdrop-blur-xs transition-all duration-300 md:hidden ${
          isNavOpen === true
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-40 opacity-0"
        }`}
      >
        <NavLinks />
      </ul>
    </>
  );
}
