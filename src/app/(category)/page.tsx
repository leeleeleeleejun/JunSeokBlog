import PostList from "@/components/PostList";
import Pagination from "@/components/Pagination";
import { getAllPosts, getPostCategories } from "../../lib/api";

export default function Home() {
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
      <PostList posts={posts} group={1} />
      <Pagination totalPosts={posts.length} currPage={1} />
    </>
  );
}
