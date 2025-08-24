import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about/settings/"!</div>
}
