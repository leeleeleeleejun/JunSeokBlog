import { getPostBySlug } from "../../lib/api";
import Tag from "@/components/tag";
import Post from "@/components/PostContent";
export default function Page({ params }: { params: { slug: string[] } }) {
  const [slug, category] = params.slug;
  const post = getPostBySlug(slug, category, [
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
      <h1 className="text-5xl font-bold my-[0.67em]">{post.title}</h1>
      <div className="flex mt-[20px] mb-[40px]">
        {tags.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </div>
      <Post>{post.content}</Post>
    </div>
  );
}
