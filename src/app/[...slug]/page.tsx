import { getPostBySlug } from "../../lib/api";
import Tag from "@/components/tag";
import Post from "@/components/PostContent";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const slug = params.slug[1];
  return {
    title: slug,
  };
}
export default function Page({ params }: { params: { slug: string[] } }) {
  const [category, slug] = params.slug;
  const post = getPostBySlug(category, slug, [
    "slug",
    "title",
    "description",
    "date",
    "readTime",
    "tags",
    "content",
  ]);
  const tags = Array.from(post.tags);

  return (
    <div>
      <h1 className="my-[0.67em] font-bold text-5xl">{post.title}</h1>
      <div className="flex mt-[20px] mb-[40px]">
        {tags.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </div>
      <Post>{post.content}</Post>
    </div>
  );
}
