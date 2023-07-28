"use client";
import { getIntersectionObserver } from "@/lib/getIntersectionObserver";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const padding = {
  0: "",
  1: "pl-1",
  2: "pl-2",
  3: "pl-3",
};

type level = 0 | 1 | 2 | 3;

export default function Toc() {
  const [active, setActive] = useState<string | null>("");
  const [headingEls, setHeadingEls] = useState<Element[]>([]);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const TocEl = useRef<HTMLElement>(null);
  const levelArray = Array.from(
    new Set<string>(headingEls.map((el) => el.tagName).sort())
  );

  useEffect(() => {
    const observer = getIntersectionObserver(setActive);
    const headingElements = Array.from(document.querySelectorAll("h2, h3, h4"));
    setHeadingEls(headingElements);
    headingElements.map((header) => {
      observer.observe(header);
    });
  }, []);
  useEffect(() => {
    if (!TocEl.current) return;
    const top = TocEl.current.getBoundingClientRect().top;

    const onScroll = () => {
      const scrollPosition = scrollY + 100;
      if (scrollPosition >= top) setIsFixed(true);
      else setIsFixed(false);
    };

    document.addEventListener("scroll", onScroll, { passive: true });
  }, []);
  const fixedStyle = isFixed ? "fixed top-[100px]" : "absolute";

  return (
    <aside
      ref={TocEl}
      className={`${fixedStyle} w-[260px] max-h-[600px] max-xl:hidden ml-[950px] p-[20px] text-sm max-xl:ml-[900px] overflow-y-auto`}
    >
      <p className="font-semibold mb-[10px]">On this page</p>
      <ul className="font-light">
        {headingEls.map((item, index) => {
          const level: level = levelArray.indexOf(item.tagName) as level;
          return (
            <li
              key={index}
              className={`mb-[3px] hover:text-mainGreen ${padding[level]} ${
                item.textContent === active ? "text-mainGreen" : ""
              }`}
            >
              <Link
                href={`#${item.textContent}`}
                onClick={() => {
                  setActive(item.textContent);
                }}
              >
                {item.textContent}
              </Link>
            </li>
          );
        })}
        <li className="mt-[10px] pt-[5px] border-t-[1px] hover:text-mainGreen">
          <Link href={`#`}>Scroll to top</Link>
        </li>
      </ul>
    </aside>
  );
}
