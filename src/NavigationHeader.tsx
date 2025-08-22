import { Link, Outlet } from "@tanstack/react-router";

const NavigationHeader = () => {
  return (
    <>
      <header className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo / Brand */}
          <h1 className="text-xl font-bold">
            <Link to="/">MyApp</Link>
          </h1>

          {/* Navigation Links */}
          {/* used Arbitrary Variants */}
          <nav className="flex gap-6">
            <Link
              to="/"
              className="[&.active]:text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="[&.active]:text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="[&.active]:text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="[&.active]:text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Renders the matched child route */}
      <main className="container mx-auto px-6 py-6">
        <Outlet />
      </main>
    </>
  );
};

export default NavigationHeader;
