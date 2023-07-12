import Link from "next/link";

export default function Category({
  children,
  category,
}: {
  children: string;
  category: string;
}) {
  return (
    <li>
      <Link
        href={`/${category}`}
        className="text-black hover:text-mainGreen transition-all underline px-[10px] "
      >
        {children}
      </Link>
    </li>
  );
}
