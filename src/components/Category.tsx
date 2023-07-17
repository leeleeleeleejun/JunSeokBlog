import Link from "next/link";

export default function Category({
  children,
  href,
  quantity,
  isActive,
}: {
  children: string;
  href: string;
  quantity: number;
  isActive: boolean;
}) {
  return (
    <li
      className={`mx-[3px] text-sm  ${
        isActive ? "text-mainGreen" : "hover:underline"
      }`}
    >
      <Link href={href}>
        {children}
        <span className="text-xs text-[lightGray]"> ({quantity})</span>
      </Link>
    </li>
  );
}
