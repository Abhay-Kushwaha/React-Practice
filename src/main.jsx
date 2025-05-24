import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { router } from './route'
import { RouterProvider } from 'react-router-dom' // <-- Add this line
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
