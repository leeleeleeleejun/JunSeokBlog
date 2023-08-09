import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import { getAllPosts, getPostCategories } from "@/lib/api";
import { notFound } from "next/navigation";

const getCategories = getPostCategories();
const posts = getAllPosts(getCategories, [
  "category",
  "slug",
  "title",
  "description",
  "date",
  "readTime",
  "tags",
]);

export async function generateStaticParams() {
  const totalPage = Math.ceil(posts.length / 5) - 1;
  const array = Array(totalPage)
    .fill(2)
    .map((item, index) => ({ group: `${item + index}` }));
  return array;
}

export default function Page({ params }: { params: { group: string } }) {
  const { group } = params;
  const numGroup = Number(group);
  const totalPage = Math.ceil(posts.length / 5);

  if (isNaN(numGroup) || numGroup > totalPage || numGroup <= 0) notFound();

  return (
    <>
      <PostList posts={posts} group={numGroup} />
      <Pagination totalPage={totalPage} currPage={numGroup} />
    </>
  );
}
