import { useState } from 'react'
import ReatDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import {Home,About} from './About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
