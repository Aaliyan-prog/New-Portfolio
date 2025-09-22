import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavProvider from './Context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <NavProvider>
    <App/>
  </NavProvider>  
)
