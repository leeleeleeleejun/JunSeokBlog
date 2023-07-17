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
  const isActive = pathname === "/";

  return (
    <div className="flex flex-col min-[1150px]:absolute top-[50px] left-[-15%] mb-[10px]">
      <div className=" mb-[10px] font-semibold text-xl">Category</div>
      <ul className="flex min-[1150px]:flex-col">
        <Category
          href="/"
          isActive={isActive}
          quantity={categories.reduce((prev, curr) => prev + curr.quantity, 0)}
        >
          {`All`}
        </Category>
        {categories.map((item, index) => {
          const isActive = pathname.startsWith("/" + item.category);
          return (
            <Category
              key={index}
              href={`/${item.category}`}
              quantity={item.quantity}
              isActive={isActive}
            >
              {item.category}
            </Category>
          );
        })}
      </ul>
    </div>
  );
}
