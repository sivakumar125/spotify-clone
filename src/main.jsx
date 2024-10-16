import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Playercontextprovider from './context/Playercontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Playercontextprovider>
      <App />
      </Playercontextprovider>
    
    </BrowserRouter>
  
  </StrictMode>,
)