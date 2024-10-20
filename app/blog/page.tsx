import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Federico's Blog - Insights and Ideas",
};

export default function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <section className="max-w-4xl mx-auto px-4">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-center">My Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {allBlogs
          .sort((a, b) => {
            if (
            new Date(a.metadata.publishedAt) >
            new Date(b.metadata.publishedAt)
             ) {
            return -1;
             }
            return 1;
             })
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                {post.metadata.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                    {post.metadata.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  {post.metadata.summary && (
                    <p className="text-gray-700 dark:text-gray-200 line-clamp-3">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
              </article>
            </Link>
          ))}
      </div>
    </section>
  );
}