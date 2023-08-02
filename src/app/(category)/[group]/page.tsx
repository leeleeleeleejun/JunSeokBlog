import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import { getAllPosts, getPostCategories } from "@/lib/api";

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
  return (
    <>
      <PostList posts={posts} group={Number(group)} />
      <Pagination totalPosts={posts.length} currPage={Number(group)} />
    </>
  );
}
