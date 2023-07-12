import { getPostBySlug } from "../../lib/api";
import Tag from "@/components/tag";
import MarkdownRenderer from "@/components/MarkdownRenderer";
export default function Post({ params }: { params: { slug: string[] } }) {
  const [slug, category] = params.slug;
  const post = getPostBySlug(slug, category, [
    "slug",
    "title",
    "description",
    "date",
    "tags",
    "content",
  ]);
  const tags = Array.from(post.tags);

  return (
    <div>
      <h1 className="text-h1 font-bold my-[0.67em]">{post.title}</h1>
      <div>{post.date}</div>
      <div>
        {tags.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </div>
      <MarkdownRenderer>{post.content}</MarkdownRenderer>
    </div>
  );
}
