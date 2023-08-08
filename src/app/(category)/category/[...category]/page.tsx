import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import { getPostsByCategory } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = params.category;
  return {
    title: category,
    description: `${category} | 이준석의 개발 블로그입니다`,
    openGraph: {
      title: category,
      description: `${category} | 이준석의 개발 블로그입니다`,
      locale: "ko-KR",
      siteName: "JunSeok-blog.com",
      url: `https://junseok-blog.vercel.app/${category}/`,
      type: "website",
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string[] };
}) {
  const [category, group] = params.category;
  const getPosts = getPostsByCategory(category, [
    "category",
    "slug",
    "title",
    "description",
    "date",
    "tags",
    "readTime",
  ]);

  const totalPage = Math.ceil(getPosts.length / 5);

  if (getPosts.length < 1 || Number(group) > totalPage) notFound();

  return (
    <>
      <PostList posts={getPosts} group={Number(group)} />
      <Pagination
        totalPage={totalPage}
        currPage={Number(group)}
        category={category}
      />
    </>
  );
}
