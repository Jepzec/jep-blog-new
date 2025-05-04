export default function FooterPage() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 sm:py-6 mt-10">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm sm:text-base">
        <p>
          © {new Date().getFullYear()} Jepzec Auto-car. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
