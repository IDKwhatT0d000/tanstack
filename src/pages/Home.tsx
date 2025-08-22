import { Link } from "@tanstack/react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 text-gray-800 p-6">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4">
        Welcome to <span className="text-purple-600">MyApp</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
        A modern React app powered by <span className="font-semibold">TanStack Router</span> 
        and <span className="font-semibold">React Query</span>. Navigate through pages and explore features.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <Link
          to="/about"
          className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
        >
          Learn More
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-xl border border-purple-600 text-purple-600 font-medium shadow-md hover:bg-purple-50 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
