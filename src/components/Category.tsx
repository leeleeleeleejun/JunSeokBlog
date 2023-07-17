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
    <li className="mx-[3px]">
      <Link
        href={href}
        className={`font-light ${
          isActive ? "text-mainGreen" : "hover:underline"
        }`}
      >
        {children}
        <span className="text-sm text-[lightGray]"> ({quantity})</span>
      </Link>
    </li>
  );
}
