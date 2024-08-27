
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutesComp from './routes/AppRoutes'

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={AppRoutesComp} />
  </>,
)
