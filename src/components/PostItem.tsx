import Link from "next/link";

export default function PostItem({
  category,
  slug,
  title,
  description,
  date,
}: {
  category: string;
  slug: string;
  title: string;
  description: string;
  date: string;
}) {
  return (
    <li className="flex rounded">
      <Link href={`/${category}/${slug}`} className="flex flex-col">
        <h3 className="font-bold text-xl">{title}</h3>
        <div>{description}</div>
        <div>{date}</div>
      </Link>
    </li>
  );
}
