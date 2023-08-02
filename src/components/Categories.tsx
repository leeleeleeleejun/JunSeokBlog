"use client";

import { usePathname } from "next/navigation";
import Category from "./Category";

export default function Categories({
  categories,
}: {
  categories: {
    category: string;
    quantity: number;
  }[];
}) {
  const pathname = usePathname();
  // 페이지 네이션 경우 / 뒤에 숫자가 붙을 수 있기때문에 정규식으로 분리
  const pattern = /^\/(\d+)?$/;
  const isActive = pattern.test(pathname);

  return (
    <aside className="flex flex-col min-[1200px]:absolute top-[120px] left-[-16%] mb-[10px]">
      <div className=" mb-[10px] font-semibold text-xl">Category</div>
      <ul className="flex min-[1200px]:flex-col">
        <Category
          href="/"
          isActive={isActive}
          quantity={categories.reduce((prev, curr) => prev + curr.quantity, 0)}
        >
          {`All`}
        </Category>
        {categories.map((item, index) => {
          const url = `/category/${item.category}`;
          const isActive = pathname.startsWith(url);
          return (
            <Category
              key={index}
              href={url}
              quantity={item.quantity}
              isActive={isActive}
            >
              {item.category}
            </Category>
          );
        })}
      </ul>
    </aside>
  );
}
