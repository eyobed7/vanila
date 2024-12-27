import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {About,Home} from './About.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
