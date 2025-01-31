import DesktopNav from "./desktop-nav/desktop-nav";
import MobileNav from "./mobile-nav/mobile-nav";

export default function Navbar() {
  return (
    <>
      <nav>
        <DesktopNav />
        <MobileNav />
      </nav>
    </>
  );
}
