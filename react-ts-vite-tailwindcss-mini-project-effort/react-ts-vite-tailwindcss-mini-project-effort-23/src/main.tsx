
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={AppRoutes} />
  </>,
)
