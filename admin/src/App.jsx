import React from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
        <Nav />
        <hr className='border-gray-300' />
        <div className='flex w-full'>
          <Sidebar />
        </div>
      </>
    </div>
  )
}

export default App