import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { paths } from './helpers/route.tsx'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={paths}/>
)
