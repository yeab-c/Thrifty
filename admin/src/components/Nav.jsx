import React from 'react'
import {assets} from '../assets/assets'

const Nav = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
        <img className='w-36' src={assets.logo} alt="Logo" />
        <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-gray-800'>Logout</button>
    </div>
  )
}

export default Nav