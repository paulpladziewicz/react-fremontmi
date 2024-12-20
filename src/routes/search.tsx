import { createFileRoute } from '@tanstack/react-router'
import Search from '../components/Search.tsx'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Search />
    </>
  )
}
