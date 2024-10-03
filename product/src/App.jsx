import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './components/add'
import Home from './components/Home'
const App = () => {
  const [count,setcount] = useState(0)
  return (
    <>
     <div>
      <Navbar/>
      <Routes>
      <Route path='/A' element={<Add/>}/>
      <Route path='/B' element={<Home/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
