import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { getPosts } from "@/lib/blog"

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Blog Header */}
      <header className="py-20 md:py-32 text-center bg-white">
        <div className="mx-auto container px-4 md:px-6">
          <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-700 hover:bg-green-100">
            Our Blog
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mt-6">
            Foodiary
            <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              Wellness Hub
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-[800px] mx-auto">
            Your source for the latest in nutrition, health, and mindful living.
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <main className="py-20 md:py-32">
        <div className="mx-auto container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post._id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden flex flex-col">
                <Link href={`/blog/${post.slug.current}`} className="block">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48"
                  />
                </Link>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <Link href={`/blog/${post.slug.current}`} className="block">
                    <CardTitle className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-700">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-gray-400" />
                    {post.categories.map((category) => (
                      <Badge key={category.title} variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors">
                        {category.title}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug.current}`} className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}