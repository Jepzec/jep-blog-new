import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          About My Blog
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Learn more about my mission and the Person behind this blog.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative h-64 md:h-auto">
            <Image
              src="/profil2.jpg?height=600&width=400"
              alt="Our team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Mi Misión
            </h2>
            <p className="text-gray-600 mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              dicta rerum quos est, iste explicabo ipsum, necessitatibus rem
              animi magnam nisi inventore expedita dolorum veniam eius ducimus
              asperiores. Quod, id.
            </p>
            <p className="text-gray-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              dicta rerum quos est, iste explicabo ipsum, necessitatibus rem
              animi magnam nisi inventore expedita dolorum veniam eius ducimus
              asperiores. Quod, id.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-4 sm:mb-6">
          Have questions, suggestions, or want to contribute to my blog?
          We&apos;d love to hear from you lads!
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:mnaufalkadisatria13@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 sm:px-6 rounded-md transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
