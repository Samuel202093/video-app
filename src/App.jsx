import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import MapPage from './MapPage/MapPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<MapPage />}/>
      </Routes>
    </Router>
  )
}

export default App