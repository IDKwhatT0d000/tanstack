import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

// Root route
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <h1 className="text-xl font-bold">Welcome to TanStack Router 🚀</h1>

      {/* Navigation Links */}
      <nav className="flex gap-4 mt-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </nav>

      {/* Child routes will render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}
