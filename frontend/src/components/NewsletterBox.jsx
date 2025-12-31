import React from 'react'
import { toast } from 'react-toastify';

const NewsletterBox = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  }

  return (
    <div className=' text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
        Join our newsletter to stay updated with the latest trends and offers.
        </p>
        <form onSubmit={submitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
          <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox