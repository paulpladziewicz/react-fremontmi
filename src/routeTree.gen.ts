/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchIndexImport } from './routes/search/index'
import { Route as EventsIndexImport } from './routes/events/index'
import { Route as EventSlugImport } from './routes/event/$slug'

// Create/Update Routes

const SearchIndexRoute = SearchIndexImport.update({
  id: '/search/',
  path: '/search/',
  getParentRoute: () => rootRoute,
} as any)

const EventsIndexRoute = EventsIndexImport.update({
  id: '/events/',
  path: '/events/',
  getParentRoute: () => rootRoute,
} as any)

const EventSlugRoute = EventSlugImport.update({
  id: '/event/$slug',
  path: '/event/$slug',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/event/$slug': {
      id: '/event/$slug'
      path: '/event/$slug'
      fullPath: '/event/$slug'
      preLoaderRoute: typeof EventSlugImport
      parentRoute: typeof rootRoute
    }
    '/events/': {
      id: '/events/'
      path: '/events'
      fullPath: '/events'
      preLoaderRoute: typeof EventsIndexImport
      parentRoute: typeof rootRoute
    }
    '/search/': {
      id: '/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/event/$slug': typeof EventSlugRoute
  '/events': typeof EventsIndexRoute
  '/search': typeof SearchIndexRoute
}

export interface FileRoutesByTo {
  '/event/$slug': typeof EventSlugRoute
  '/events': typeof EventsIndexRoute
  '/search': typeof SearchIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/event/$slug': typeof EventSlugRoute
  '/events/': typeof EventsIndexRoute
  '/search/': typeof SearchIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/event/$slug' | '/events' | '/search'
  fileRoutesByTo: FileRoutesByTo
  to: '/event/$slug' | '/events' | '/search'
  id: '__root__' | '/event/$slug' | '/events/' | '/search/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  EventSlugRoute: typeof EventSlugRoute
  EventsIndexRoute: typeof EventsIndexRoute
  SearchIndexRoute: typeof SearchIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  EventSlugRoute: EventSlugRoute,
  EventsIndexRoute: EventsIndexRoute,
  SearchIndexRoute: SearchIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/event/$slug",
        "/events/",
        "/search/"
      ]
    },
    "/event/$slug": {
      "filePath": "event/$slug.tsx"
    },
    "/events/": {
      "filePath": "events/index.tsx"
    },
    "/search/": {
      "filePath": "search/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
