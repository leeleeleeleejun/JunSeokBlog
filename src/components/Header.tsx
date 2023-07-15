"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/about")
    ? "About"
    : pathname.startsWith("/timer")
    ? "Timer"
    : "Home";
  const [position, setPosition] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <header
      className={`sticky border-b-[1px] mb-[40px] transition-all duration-300 bg-white ${
        visible ? "top-0" : "top-[-80px]"
      }`}
    >
      <div className="flex justify-between items-center h-[80px] max-w-[900px] m-auto px-[20px]">
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
        <ThemeToggle />
      </div>
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
      className={`w-[20px] h-[100%] hover:text-mainGreen text-center duration-[400ms] ${
        isActive === children
          ? "text-mainGreen font-bold text-xl"
          : "text-black"
      }`}
    >
      {children}
    </Link>
  );
}
