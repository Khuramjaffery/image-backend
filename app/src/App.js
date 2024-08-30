import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'

import ProductForm from './pages/admin/ProductForm'
import Adminpage from './pages/admin/Adminpage'
import Imageform from './pages/admin/Imageform'
const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>} ></Route>
  <Route path='/admin' element={<Adminpage/>}></Route>
   <Route path='/admin/product' element={<ProductForm/>}></Route>
   <Route path='/admin/imageform' element={<Imageform/>} ></Route>
    
  </Routes>
  )
}

export default App