import Link from "next/link";

export default function PostItem({
  slug,
  title,
  description,
  date,
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
}) {
  return (
    <li className="flex rounded">
      <Link href={`/post/${slug}`} className="flex flex-col">
        <h3 className="font-bold text-xl">{title}</h3>
        <div>{description}</div>
        <div>{date}</div>
      </Link>
    </li>
  );
}
