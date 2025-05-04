import Link from "next/link";
import Image from "next/image";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <div className="relative h-40 sm:h-48 w-full">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
          {post.category}
        </span>
        <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-gray-500">{post.date}</span>
          <Link
            href={`/blog/${post.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
