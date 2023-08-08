import PostItem from "./PostItem";
import { Items } from "@/lib/api";

export default function PostList({
  posts,
  group,
}: {
  posts: Items[];
  group: number;
}) {
  if (isNaN(group)) {
    group = 1;
  }
  return (
    <ul className="w-[100%] h-[650px]">
      {posts.slice((group - 1) * 5, group * 5).map((post, index) => (
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
