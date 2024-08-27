
import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes';
import { AppProvider } from './contexts/AppContext';

createRoot(document.getElementById('root')!).render(
  <>
  <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
  </>,
)