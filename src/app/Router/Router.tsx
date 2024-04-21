import { About } from '@/pages/About'
import { Home } from '@/pages/Home'
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
    element: <>Page is not a found</>,
  },
])

export const Router = () => <RouterProvider router={router} />
