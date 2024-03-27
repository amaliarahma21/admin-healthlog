import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Login from "./views/Login/Login"

import './App.css'
import Register from "./views/Register/Register"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        
      </Routes>
    </Router>
  )
}

export default App
