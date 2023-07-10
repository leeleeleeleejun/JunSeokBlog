import Link from "next/link";

export default function Category({ children }: { children: string }) {
  return (
    <li>
      <Link href="/" className="underline px-[10px]">
        {children}
      </Link>
    </li>
  );
}
