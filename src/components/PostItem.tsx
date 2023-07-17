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
    <li className="flex mb-[10px] p-[20px] rounded border-b-[1px] border-b-[#e7e7e7] hover:translate-y-[-5px] hover:border-r-[10px] hover:border-r-mainGreen shadow-list duration-[400ms]">
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
