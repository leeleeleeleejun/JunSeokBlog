import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import { getAllPosts, getPostCategories } from "@/lib/api";

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

export default function Page() {
  const totalPage = Math.ceil(posts.length / 5);
  return (
    <>
      <PostList posts={posts} group={1} />
      <Pagination totalPage={totalPage} currPage={1} />
    </>
  );
}
