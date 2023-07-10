import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../lib/api";
import Category from "@/components/Category";
import PostItem from "@/components/PostItem";

export default function Home() {
  const posts = getAllPosts(["slug", "title", "description", "date"]);
  // const b = getPostBySlug("test1", [
  //   "slug",
  //   "title",
  //   "description",
  //   "date",
  //   "content",
  // ]);
  return (
    <div className="flex">
      <div>
        <div>Category</div>
        <ul className="flex flex-col rounded">
          {["one", "two"].map((item, index) => (
            <Category key={index}>{item}</Category>
          ))}
        </ul>
      </div>
      <ul>
        {posts.map((post, index) => (
          <PostItem
            key={index}
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </ul>
    </div>
  );
}
