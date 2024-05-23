import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Bikelist from '../pages/Bikelist'
import Bikedetails from '../pages/Bikedetails'
import Blog from '../pages/Blog'
import Blogdetails from '../pages/Blogdetails'
import Contact from '../pages/Contact'
import Honda from "../pages/Honda"
import Hero from '../pages/Hero'
import Bajaj from '../pages/Bajaj'
import Tvs from '../pages/Tvs'
import Tvsrider from '../pages/Tvsrider'
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
        <Route path='/honda' element={<Honda/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/tvs' element={<Tvs/>}/>
        <Route path='/bajaj' element={<Bajaj/>}/>
        <Route path='/Tvsrider' element={<Tvsrider/>}/>

    </Routes>
  )
}

export default Routers