import PostItem from "@/components/PostItem";
import { getPostsByCategory } from "@/lib/api";
import { Metadata, ResolvingMetadata } from "next";

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
      url: `https://JunSeok-blog.com/${category}/`,
      type: "website",
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const getCategories = getPostsByCategory(params.category, [
    "category",
    "slug",
    "title",
    "description",
    "date",
    "tags",
    "readTime",
  ]);
  return (
    <ul>
      {getCategories.map((post, index) => (
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
