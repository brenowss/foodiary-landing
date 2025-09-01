import { sanityClient } from './sanity';

export type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  author: {
    name: string;
    image: string;
  };
  mainImage: string;
  categories: {
    title: string;
  }[];
  body: any;
  readTime: string;
  excerpt: string;
  featured: boolean;
};

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
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

const options = { next: { revalidate: 30 } };

export async function getPosts(): Promise<Post[]> {
  return sanityClient.fetch(POSTS_QUERY, {}, options);
}
