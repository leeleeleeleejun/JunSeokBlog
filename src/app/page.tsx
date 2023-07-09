import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../lib/api";
export default function Home() {
  //const a = getAllPosts(["slug", "title", "description", "date", "content"]);
  // const b = getPostBySlug("test1", [
  //   "slug",
  //   "title",
  //   "description",
  //   "date",
  //   "content",
  // ]);

  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;
}
