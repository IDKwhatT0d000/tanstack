import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/posts/$postID')({
  component: PostPage,
});

function PostPage() {
  // useParams gives you the `postID` from the URL
  const { postID } = Route.useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Post Details</h1>
      <p>Showing post with ID: {postID}</p>
    </div>
  );
}
