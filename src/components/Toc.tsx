"use client";
import { getIntersectionObserver } from "@/lib/getIntersectionObserver";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Toc({ TocArray }: { TocArray: string[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = getIntersectionObserver(setActive);
    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));
    headingElements.map((header) => {
      observer.observe(header);
    });
  }, []);

  return (
    <aside className="fixed top-[350px] ml-[1000px] text-sm w-[200px]  max-[1540px]:hidden">
      <p className="font-semibold mb-[10px]">On this page</p>
      <ul className="font-light">
        {TocArray.map((item, index) => (
          <li
            key={index}
            className={`mb-[3px] hover:text-mainGreen ${
              item === active ? "text-mainGreen" : ""
            }`}
          >
            <Link
              href={`#${item}`}
              onClick={() => {
                setActive(item);
              }}
            >
              {item}
            </Link>
          </li>
        ))}
        <li className="mt-[10px] pt-[5px] border-t-[1px] hover:text-mainGreen">
          <Link href={`#`}>Scroll to top</Link>
        </li>
      </ul>
    </aside>
  );
}
