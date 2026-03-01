import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Orders from './pages/Orders'
import Add from './pages/Add'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {

  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);


  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      { token === '' 
      ? <Login setToken={setToken} /> 
      : <>
        <Nav setToken={setToken} />
        <hr className='border-gray-300' />
        <div className='flex w-full'>
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add token={token} />} />
              <Route path='/list' element={<List token={token} />} />
              <Route path='/orders' element={<Orders token={token} />} />
            </Routes>
          </div>
        </div>
      </>}
      
    </div>
  )
}

export default App