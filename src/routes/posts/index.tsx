import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: PostsPage,
})

function PostsPage() {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is my very first post.' },
    { id: 2, title: 'Second Post', content: 'Learning TanStack Router is fun!' },
    { id: 3, title: 'Third Post', content: 'TypeScript makes everything safer.' },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="border rounded p-3 shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
