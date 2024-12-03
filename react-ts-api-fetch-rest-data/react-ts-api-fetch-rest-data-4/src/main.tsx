
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={AppRoutes} />
  </>,
)
