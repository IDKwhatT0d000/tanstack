import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: () => <div>Welcome to Home Page</div>,
})
