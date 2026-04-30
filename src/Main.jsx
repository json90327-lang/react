import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Api from './RestAPI/Api'
createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Api/>

  </StrictMode>,
)
