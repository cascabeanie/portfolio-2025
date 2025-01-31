import { Menu } from "lucide-react";
import { X } from "lucide-react";

type HamburgerProps = {
  navStatus: boolean;
  onToggleIcon: () => void;
};

export default function Hamburger({ onToggleIcon, navStatus }: HamburgerProps) {
  return (
    <>
      <div
        onClick={onToggleIcon}
        className="fixed top-4 left-8 z-30 flex cursor-pointer rounded-2xl bg-zinc-900/50 p-2 backdrop-blur-xs md:hidden"
      >
        {navStatus === false ? (
          <Menu className="stroke-white" />
        ) : (
          <X className="stroke-white" />
        )}
      </div>
    </>
  );
}
