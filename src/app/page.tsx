import BlogCard, { type BlogPost } from "@/components/blog-card";

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Innova Reborn 2025",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et nostrum eos, eum atque ullam?",
    category: "Semi-Touring",
    date: "December 29, 2024",
    imageUrl: "/inova.avif?height=400&width=600",
  },
  {
    id: "2",
    title: "Double Cabin 2025",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et nostrum eos, eum atque ullam?",
    category: "Touring",
    date: "April 2, 2025",
    imageUrl: "/dc2.jpg?height=400&width=600",
  },
  {
    id: "3",
    title: "Isuzu Panther GT",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et nostrum eos, eum atque ullam?",
    category: "Touring",
    date: "June 10, 2012",
    imageUrl: "/panther.avif?height=400&width=600",
  },
];

export default function Home() {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center min-h-dvh flex flex-col justify-center">
        <h1 className="lg:text-7xl text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Welcome to, <br />
          Jepzec Auto
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the latest best car of all time.
        </p>
        <p className="text-lg sm:text-xl text-black py-10 max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa omnis
          quam obcaecati tenetur culpa quis?
        </p>
      </div>
      <h1 className="font-bold text-5xl">Featured Post</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
