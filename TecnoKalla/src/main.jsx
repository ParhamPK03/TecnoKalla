import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
    <div className='bg-white dark:bg-slate-900 min-h-[100vh]'>
    <App />
    </div>
    </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
