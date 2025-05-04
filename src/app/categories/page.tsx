import Link from "next/link";

// Mock data for categories
const categories = [
  { name: "Semi-touring", count: 12, color: "blue" },
  { name: "Touring", count: 8, color: "pink" },
  { name: "Sport", count: 5, color: "green" },
];

const colorClasses = {
  blue: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  pink: "bg-pink-100 text-pink-800 hover:bg-pink-200",
  green: "bg-green-100 text-green-800 hover:bg-green-200",
  purple: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  yellow: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  red: "bg-red-100 text-red-800 hover:bg-red-200",
};

export default function Categories() {
  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Categories
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Browse articles by topic to find exactly what you&apos;re looking for.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.name.toLowerCase()}`}
            className={`${
              colorClasses[category.color as keyof typeof colorClasses]
            } 
              p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center text-center h-32 sm:h-40`}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
              {category.name}
            </h2>
            <p className="text-sm opacity-75">{category.count} articles</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
