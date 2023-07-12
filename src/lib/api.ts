import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const rootPostDirectory = join(process.cwd(), "_posts");


export function getPostCategories() {
  return fs.readdirSync(rootPostDirectory);
}

export function getCategoriesQuantity(categories: string[]) {
  return categories.map(category => ({category , quantity: fs.readdirSync(join(process.cwd(), "_posts/", category)).length}));
}


export function getPostsByCategory(category: string, fields: string[] = []) {
  const postsDirectory = join(process.cwd(), "_posts/", category);
  const posts = fs.readdirSync(postsDirectory);
  return posts.map(post => getPostBySlug(category, post, fields))
}

export function getPostBySlug(category: string, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(rootPostDirectory, category, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === 'category') {
      items[field] = category;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(slugs: string[], fields: string[] = []) {
  const posts = slugs
    .map((category) => getPostsByCategory(category, fields))
    .flat()
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}



