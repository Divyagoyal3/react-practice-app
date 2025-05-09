import React from 'react'
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Product'
import About from './pages/About'
import SingleProduct from './pages/SingleProduct'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './components/Footer'

const App = () => {

  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenDropdown(false)
        // console.log(exactLocation);

      } catch (error) {
        console.log(error);

      }

    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
   <>
   <BrowserRouter>
   <Navbar  location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<SingleProduct/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='*' element={<h1>404 Not Found</h1>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
