
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppROutes'

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={AppRoutes} />
  </>,
)