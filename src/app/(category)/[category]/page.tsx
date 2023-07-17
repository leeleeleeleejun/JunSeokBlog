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
