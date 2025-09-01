import { getPosts } from "@/lib/blog";
import BlogControl from "./control";

export default async function BlogSection() {
  const posts = await getPosts();
  const categories = ["All", ...new Set(posts.flatMap(p => p.categories.map(c => c.title)))];

  return <BlogControl posts={posts} categories={categories} />;
}
