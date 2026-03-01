import React, { useState } from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Orders from './pages/Orders'
import Add from './pages/Add'
import Login from './components/Login'

const App = () => {

  const [token,setToken] = useState('');


  return (
    <div className='bg-gray-50 min-h-screen'>
      { token === '' 
      ? <Login /> 
      : <>
        <Nav />
        <hr className='border-gray-300' />
        <div className='flex w-full'>
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add />} />
              <Route path='/list' element={<List />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>
          </div>
        </div>
      </>}
      
    </div>
  )
}

export default App