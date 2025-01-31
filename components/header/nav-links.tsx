import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <li>
        <Link href="#hero" className="transition-colors hover:text-white">
          Home
        </Link>
      </li>
      <li>
        <Link href="#about" className="transition-colors hover:text-white">
          About
        </Link>
      </li>
      <li>
        <Link href="#work" className="transition-colors hover:text-white">
          Work
        </Link>
      </li>
      <li>
        <Link href="#projects" className="transition-colors hover:text-white">
          Projects
        </Link>
      </li>
      <li>
        <Link href="#contact" className="transition-colors hover:text-white">
          Contact
        </Link>
      </li>
    </>
  );
}
