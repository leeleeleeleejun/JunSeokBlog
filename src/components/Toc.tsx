"use client";
import { getIntersectionObserver } from "@/lib/getIntersectionObserver";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Toc({ TocArray }: { TocArray: string[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = getIntersectionObserver(setActive);
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    headingElements.map((header) => {
      observer.observe(header);
    });
  }, []);

  return (
    <aside className="fixed top-[300px] right-[0] mr-[5%]">
      <p>On this page</p>
      <ul>
        <li>
          <Link href={`#`}>Top</Link>
        </li>
        {TocArray.map((item, index) => (
          <li
            key={index}
            className={`${item === active ? "text-mainGreen" : ""}`}
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
      </ul>
    </aside>
  );
}
