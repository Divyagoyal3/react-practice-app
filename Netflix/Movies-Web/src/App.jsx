import React, { use } from 'react'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth,async(user) => {
      if(user){
        console.log("User is logged in");
        navigate("/");  
      }
      else{
        console.log("User is logged out");
        navigate("/login");         
      }})
  },[]);
  return (
    <div>
         <ToastContainer  theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path ='/player/:id' element={<Player />} />
      </Routes>
      {/* <Home /> */}
    </div>
  )
}

export default App
