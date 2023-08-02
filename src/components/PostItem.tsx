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
    <li className="flex mb-[20px] p-[20px] rounded border-b-[1px] border-b-[#e7e7e7] hover:translate-y-[-5px] hover:border-r-[10px] hover:border-r-mainGreen shadow-list duration-[400ms] dark:bg-neutral-800">
      <Link
        href={`/post/${category}/${slug}`}
        className="flex flex-col w-[100%]"
      >
        <h4 className="text-h4 font-bold">{title}</h4>
        <div className="text-sm">{description}</div>
        <PostInfo date={date} readTime={readTime} />
      </Link>
    </li>
  );
}
