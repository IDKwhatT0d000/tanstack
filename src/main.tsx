import { StrictMode } from 'react'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute
} from '@tanstack/react-router'
import NavigationHeader from './NavigationHeader.tsx';
import Home from './pages/Home.tsx';
import { createRoot } from "react-dom/client";  // ✅ React 18 API
import App from './App.tsx';


const queryClient = new QueryClient();

export const rootRoute = createRootRoute({
  component: NavigationHeader
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
})

const dashboardRoute=createRoute({
  getParentRoute:()=>rootRoute,
  component:App,
  path:'/dashboard',

})

const routeTree = rootRoute.addChildren([homeRoute,dashboardRoute])

const router = createRouter({ routeTree })

const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement);  // ✅ use createRoot directly
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
