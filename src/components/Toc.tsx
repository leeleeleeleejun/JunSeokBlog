"use client";
import { getIntersectionObserver } from "@/lib/getIntersectionObserver";
import Link from "next/link";
import { useEffect, useState } from "react";
const padding = {
  0: "",
  1: "pl-1",
  2: "pl-2",
  3: "pl-3",
};

type level = 0 | 1 | 2 | 3;

export default function Toc({ TocArray }: { TocArray: string[][] }) {
  const [active, setActive] = useState("");
  const levelArray = Array.from(
    new Set<string>(TocArray.map((item) => item[1]))
  ).sort();
  useEffect(() => {
    const observer = getIntersectionObserver(setActive);
    const headingElements = Array.from(
      document.querySelectorAll("h1, h2, h3, h4")
    );
    headingElements.map((header) => {
      observer.observe(header);
    });
  }, []);

  return (
    <aside className="fixed top-[150px] w-[260px] max-h-[600px] max-xl:hidden ml-[950px] p-[20px] text-sm max-xl:ml-[900px] overflow-y-auto">
      <p className="font-semibold mb-[10px]">On this page</p>
      <ul className="font-light">
        {TocArray.map((item, index) => {
          const level: level = levelArray.indexOf(item[1]) as level;
          return (
            <li
              key={index}
              className={`mb-[3px] hover:text-mainGreen ${padding[level]} ${
                item[0] === active ? "text-mainGreen" : ""
              }`}
            >
              <Link
                href={`#${item[0]}`}
                onClick={() => {
                  setActive(item[0]);
                }}
              >
                {item[0]}
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
