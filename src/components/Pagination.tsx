"use client";
import Link from "next/link";

export default function Pagination({
  totalPage,
  currPage,
  category,
}: {
  totalPage: number;
  currPage: number;
  category?: string;
}) {
  return (
    <ul className="flex justify-center mt-[50px]">
      {Array(totalPage)
        .fill(0)
        .map((_, i) => {
          const isActive = i + 1 === currPage;
          return (
            <li
              key={i}
              className={`w-[30px] h-[30px] mx-[10px] rounded-full text-center text-lg font-semibold leading-[30px] ${
                isActive ? "bg-mainGreen text-white" : "hover:underline"
              }`}
            >
              <Link
                href={
                  (category ? `/category/${category}` : "") +
                  (i === 0 ? "/" : `/${i + 1}`)
                }
              >
                {i + 1}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
