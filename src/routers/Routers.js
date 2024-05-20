import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Bikelist from '../pages/Bikelist'
import Bikedetails from '../pages/Bikedetails'
import Blog from '../pages/Blog'
import Blogdetails from '../pages/Blogdetails'
import Contact from '../pages/Contact'
function Routers() {
  return (
    
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/bikes' element={<Bikelist/>}/>
        <Route path='/bikes/:slug' element={<Bikedetails/>}/>
        <Route path='/bikes' element={<Blog/>}/>
        <Route path='/blogs/:slug' element={<Blogdetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Routers