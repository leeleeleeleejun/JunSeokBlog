import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import { getPostsByCategory, getPostCategories } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const getCategories = getPostCategories();

  return getCategories.map((category) => {
    const totalPage = Math.ceil(getPostsByCategory(category, []).length / 5);
    const array = Array(totalPage)
      .fill(1)
      .map((item, index) => ({ category: [category, `${item + index}`] }));
    return array;
  });
}

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
  const numGroup = Number(group);

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

  if (getPosts.length < 1 || numGroup > totalPage || isNaN(numGroup))
    notFound();

  return (
    <>
      <PostList posts={getPosts} group={numGroup} />
      <Pagination
        totalPage={totalPage}
        currPage={numGroup}
        category={category}
      />
    </>
  );
}
