
import { createRoot } from 'react-dom/client'
// styling css
import './index.css'
// library
import { RouterProvider } from 'react-router-dom'
// component
import AppRoutes from './routes/AppRoutes';

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={AppRoutes} />
  </>,
)
