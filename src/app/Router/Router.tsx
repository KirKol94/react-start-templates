import { About } from '@/pages/About'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export const Router = () => <RouterProvider router={router} />
