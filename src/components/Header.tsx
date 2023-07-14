"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import LightIcon from "./icons/lightIcon";

export default function Header() {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/about")
    ? "About"
    : pathname.startsWith("/timer")
    ? "Timer"
    : "Home";
  return (
    <header className="flex justify-between items-center h-[80px] max-w-[900px] m-auto">
      <nav className="flex justify-between items-center w-[30%] min-w-[200px]">
        <NavItem isActive={isActive} href="/">
          Home
        </NavItem>
        <NavItem isActive={isActive} href="/about">
          About
        </NavItem>
        <NavItem isActive={isActive} href="/timer">
          Timer
        </NavItem>
      </nav>
      <button>
        <LightIcon />
      </button>
    </header>
  );
}

function NavItem({
  isActive,
  children,
  href,
}: {
  isActive: string;
  children: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`w-[20px] h-[100%] hover:text-mainGreen text-center transition-all ${
        isActive === children
          ? "text-mainGreen font-bold text-xl"
          : "text-black"
      }`}
    >
      {children}
    </Link>
  );
}
