import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'

// Routering Elements
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Build from './pages/Build.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/build',
    element: <Build />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
