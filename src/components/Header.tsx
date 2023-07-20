"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/about") ? "About" : "Home";
  const [position, setPosition] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    let timer: NodeJS.Timeout | null;
    window.addEventListener("scroll", () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleScroll();
        }, 200);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <header
      className={`sticky mb-[40px] bg-white dark:bg-darkModeBG border-b-[1px] duration-300 z-10 ${
        visible ? "top-[0]" : "top-[-80px]"
      }`}
    >
      <div className="flex justify-between items-center h-[80px] max-w-[900px] m-auto px-[20px]">
        <nav className="flex justify-between items-center min-w-[120px]">
          <NavItem isActive={isActive} href="/">
            Home
          </NavItem>
          <NavItem isActive={isActive} href="/about">
            About
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
      className={`w-[20px] h-[100%] text-center hover:text-mainGreen duration-[400ms] text-[15px] ${
        isActive === children && "text-mainGreen font-bold text-[20px]"
      }`}
    >
      {children}
    </Link>
  );
}
