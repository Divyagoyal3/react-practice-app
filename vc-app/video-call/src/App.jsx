import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import VideeoRoom from './pages/VideeoRoom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/room/:roomId' element={<VideeoRoom />} />
      </Routes>
    </div>
  )
}

export default App
