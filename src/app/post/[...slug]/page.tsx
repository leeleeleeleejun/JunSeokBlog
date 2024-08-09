import { getAllPosts, getPostCategories, getPostBySlug } from "@/lib/api";
import Tag from "@/components/Tag";
import Post from "@/components/PostContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {Giscus} from "@/components/Giscus";

export async function generateStaticParams() {
  const getCategories = getPostCategories();
  const posts = getAllPosts(getCategories, ["category", "slug"]);
  return posts.map((post) => ({
    slug: [post.category, post.slug],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const [category, slug] = params.slug;
  return {
    title: slug,
    description: `${slug}에 관해`,
    openGraph: {
      title: slug,
      description: `${slug}에 관해`,
      locale: "ko-KR",
      siteName: "JunSeok-blog.com",
      url: `https://junseok-blog.vercel.app/post/${category}/${slug}`,
      type: "article",
    },
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

  if (Object.keys(post).length < 1) notFound();
  const tags = Array.from(post.tags);

  return (
    <div className="max-xl:w-[85%] mx-auto">
      <h1 className="my-[0.67em] font-bold text-h1 max-md:text-h2">
        {post.title}
      </h1>
      <div className="flex mt-[20px]">
        {tags.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </div>
      <Post>{post.content}</Post>
      <Giscus/>
    </div>
  );
}
