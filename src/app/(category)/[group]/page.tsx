import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import { notFound } from "next/navigation";
import { posts } from "@/app/(category)/page";

export async function generateStaticParams() {
  const totalPage = Math.ceil(posts.length / 5) - 1;
  const array = Array(totalPage)
    .fill(2)
    .map((item, index) => ({ group: item + index }));
  return array;
}

export default function Page({ params }: { params: { group: string } }) {
  const { group } = params;
  const numGroup = Number(group);
  const totalPage = Math.ceil(posts.length / 5);

  if (isNaN(numGroup) || numGroup > totalPage) notFound();

  return (
    <>
      <PostList posts={posts} group={numGroup} />
      <Pagination totalPage={totalPage} currPage={numGroup} />
    </>
  );
}
