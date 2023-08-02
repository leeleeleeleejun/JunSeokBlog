"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Pagination({
  totalPosts,
  currPage,
}: {
  totalPosts: number;
  currPage: number;
}) {
  const pathname = usePathname();
  const totalPage = Math.ceil(totalPosts / 5);

  return (
    <ul className="flex justify-center mt-[50px]">
      {Array(totalPage)
        .fill(0)
        .map((_, i) => {
          const currPath = pathname.split("/")[pathname.length - 1];
          // 메인페이지 경우 1로 표시
          const _currPath = currPath === "" ? 1 : currPath;
          const isActive = i + 1 === Number(_currPath);
          return (
            <li
              key={i}
              className={`w-[30px] h-[30px] mx-[10px] rounded-full text-center text-lg font-semibold leading-[30px] ${
                isActive ? "bg-mainGreen text-white" : "hover:underline"
              }`}
            >
              <Link href={`/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
            </li>
          );
        })}
    </ul>
  );
}
