import { getAllPosts, getPostCategories } from "../../lib/api";
import PostItem from "@/components/PostItem";

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
    <ul className="w-[100%]">
      {posts.map((post, index) => (
        <PostItem
          key={index}
          category={post.category}
          slug={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          readTime={post.readTime}
        />
      ))}
    </ul>
  );
}
