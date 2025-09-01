'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, ArrowRight, Tag, Filter } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'

export default function BlogControl({ posts: blogPosts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterPosts(category)
  }

  const filterPosts = (category: string) => {
    let filtered = blogPosts

    if (category !== "All") {
      filtered = filtered.filter(post => post.categories.some(c => c.title === category))
    }

    setFilteredPosts(filtered)
  }

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-700 hover:bg-green-100">
            📚 Health & Nutrition Blog
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Expert Insights for Your
            <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              Health Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            Discover evidence-based nutrition advice, practical tips, and inspiring stories from health experts and real users.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="h-5 w-5 text-gray-500 flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter(category)}
                  className={`whitespace-nowrap rounded-full ${selectedCategory === category
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    : "border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700"
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                ⭐ Featured Article
              </Badge>
            </div>
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <Link href={`/blog/${featuredPost.slug.current}`} className="relative h-64 md:h-full">
                  <Image
                    src={featuredPost.mainImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </Link>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {featuredPost.categories[0].title}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${featuredPost.slug.current}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight hover:text-green-600 transition-colors">
                        {featuredPost.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={featuredPost.author.image}
                          alt={featuredPost.author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <span className="font-medium text-gray-900">{featuredPost.author.name}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${featuredPost.slug.current}`}>
                      <Button
                        size="lg"
                        className="w-fit bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl group"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Card key={post._id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <Link href={`/blog/${post.slug.current}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700 backdrop-blur-sm">
                      {post.categories[0].title}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>

              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                  <Link href={`/blog/${post.slug.current}`}>
                    {post.title}
                  </Link>
                </CardTitle>

                <CardDescription className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.categories.slice(0, 3).map((category) => (
                    <Badge key={category.title} variant="outline" className="text-xs border-green-200 text-green-700 hover:bg-green-50">
                      <Tag className="h-3 w-3 mr-1" />
                      {category.title}
                    </Badge>
                  ))}
                </div>

                <Link href={`/blog/${post.slug.current}`} className="block">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 rounded-xl group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse different categories.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("All")
                setFilteredPosts(blogPosts)
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 px-8 py-3 rounded-2xl"
              >
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Never Miss a Health Tip
                  </h3>
                  <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    Get the latest nutrition insights, healthy recipes, and wellness tips delivered straight to your inbox every week.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
                  />
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100 rounded-xl font-semibold"
                  >
                    Subscribe
                  </Button>
                </div>

                <p className="text-sm opacity-75">
                  Join 50,000+ health enthusiasts. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
