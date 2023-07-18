import { getAllPosts, getPostCategories, getPostBySlug } from "../../lib/api";
import Tag from "@/components/Tag";
import Post from "@/components/PostContent";
import { Metadata } from "next";

export async function generateStaticParams() {
  const getCategories = getPostCategories();
  const posts = getAllPosts(getCategories, [
    "category",
    "slug",
    "title",
    "description",
    "date",
    "readTime",
    "tags",
  ]);
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
      url: `https://JunSeok-blog.com/${category}/${slug}`,
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
  const tags = Array.from(post.tags);

  return (
    <>
      <h1 className="my-[0.67em] font-bold text-h1 max-[768px]:text-h2">
        {post.title}
      </h1>
      <div className="flex mt-[20px] mb-[40px]">
        {tags.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </div>
      <Post>{post.content}</Post>
    </>
  );
}
