import React from 'react'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div >
      <Home />
      <ToastContainer    theme="colored" position="top-right" autoClose={3000}/>
    </div>
  )
}

export default App
