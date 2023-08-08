import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import { getAllPosts, getPostCategories } from "@/lib/api";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { group: string } }) {
  const { group } = params;
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

  const totalPage = Math.ceil(posts.length / 5);

  if (
    (isNaN(Number(group)) && group !== undefined) ||
    Number(group) > totalPage
  )
    notFound();

  return (
    <>
      <PostList posts={posts} group={Number(group)} />
      <Pagination totalPage={totalPage} currPage={Number(group)} />
    </>
  );
}
