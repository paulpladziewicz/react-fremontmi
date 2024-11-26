import { createFileRoute } from '@tanstack/react-router'
import ContentList from "../components/ContentList.tsx";

export const Route = createFileRoute('/events')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ContentList contentType="EVENT" />
}
