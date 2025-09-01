import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { PortableText } from '@portabletext/react';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  "author": author->{name, "image": image.asset->url},
  "mainImage": mainImage.asset->url,
  "categories": categories[]->{title},
  body,
  readTime,
  excerpt,
  featured
}`;

async function getPost(slug: string) {
  return sanityClient.fetch(POST_QUERY, { slug });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <main className="py-20 md:py-32">
        <div className="mx-auto container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>

            <article>
              <header className="mb-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author.name}</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                  {post.title}
                </h1>

                <div className="mt-6 flex items-center space-x-2">
                  <Tag className="h-5 w-5 text-gray-400" />
                  {post.categories.map((category: { title: string }) => (
                    <Badge key={category.title} variant="secondary" className="bg-orange-100 text-orange-700">
                      {category.title}
                    </Badge>
                  ))}
                </div>
              </header>

              <Image
                src={post.mainImage}
                alt={post.title}
                width={1200}
                height={600}
                className="object-cover w-full h-96 rounded-2xl shadow-lg mb-12"
              />

              <div className="prose lg:prose-xl max-w-none">
                <PortableText value={post.body} />
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
