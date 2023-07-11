import { getPostBySlug } from "../../lib/api";
import Tag from "@/components/tag";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
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
      <h2 className="text-5xl font-bold">{post.title}</h2>
      <div>
        {tags.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </div>
      <div>{post.description}</div>
      <div>{post.date}</div>
    </div>
  );
}
