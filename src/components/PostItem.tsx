import Link from "next/link";
import PostInfo from "./PostInfo";

export default function PostItem({
  category,
  slug,
  title,
  description,
  date,
  readTime,
}: {
  category: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}) {
  return (
    <li className="flex rounded mb-[10px] p-[20px] border-b-[1px] border-[#e7e7e7] shadow-list">
      <Link href={`/${category}/${slug}`} className="flex flex-col w-[100%]">
        <h3 className="text-h3 font-bold">{title}</h3>
        <div className="text-sm">{description}</div>
        <div>
          <PostInfo date={date} readTime={readTime} />
        </div>
      </Link>
    </li>
  );
}
